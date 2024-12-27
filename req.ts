import fetch from 'npm:node-fetch'
import { Preformat } from "./preformatTypes.ts";

// returns an object with data in format of preFormat
// currently only works for the 4 types of parts defined in preformatTypes.ts
export async function req_with_id(id: string) {
    const response = await fetch(`http://127.0.0.1:5000/${id}`)
    const data = await response.json()
    return data as Preformat // definitely need to add more safety here lol 
}