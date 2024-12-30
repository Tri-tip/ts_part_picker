import pg from 'npm:pg'
import { Part } from "./classes.ts"

// expand as needed
interface DBEntry {
    name: string
    partType: string
    specs: object // NOTE: use postgres type "jsonb" for specs; "json" does not support comparison operators
    id: number
}

export class DBClient extends pg.Client {
    constructor(options : {host: string, user: string, port: number, password: string, database: string}) {
        super(options)
    }

    // to fix: redundant data in specs; is fine for now, but need to fix when we finalize data requirements
    async insertPart(part: Part) {
        const entry : DBEntry = data_constructor(part)
        await this.query(`INSERT INTO ${"Parts"} VALUES ($1, $2, $3, $4)`, [entry.name, entry.partType, entry.id, JSON.stringify(entry.specs)])
    }
    async removePart(part: string) {
        await this.query(`DELETE FROM ${"Parts"} WHERE name = $1`, [part])
    }
}

// helper to parse data for insertion to db
// will get a lot more complicated as parts do inevitably because of spec filtering etc
function data_constructor(part: Part): DBEntry {
    return {
        partType: part.partType,
        name: part.name,
        specs: part,
        id: id_gen() 
    }
}

function id_gen() {
    return Math.round(Math.random() * 10000) // random ids for now
}