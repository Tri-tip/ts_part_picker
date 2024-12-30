import { req_with_id } from "./req.ts";
import { object_to_part } from "./converter.ts";
import { DBClient } from "./db.ts";

const client = new DBClient({
    host: "localhost", 
    user: "postgres", 
    database: "Parts",
    port: 5432,
    password: "Romymann77" 
})

client.connect()


const id_list = ["fPyH99", "kvfxFT", "WBwypg", "KKytt6"]

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/*for (const id of id_list) {
    console.log(id)
    const data = await req_with_id(id)
    const part = object_to_part(data)
    client.insertPart(part)
    await sleep(2000)
}*/

const data = await client.query("SELECT name, type FROM Parts")
console.log(data.rows)

client.end()