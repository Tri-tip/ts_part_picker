// methods related to compatibility of parts
import {Part, Build, CPU, Memory, Motherboard, Case} from "./classes.ts"
class Compatibilator {
    static checkCompatibility(part1: Part, part2: Part) : boolean {
        // if part1 is CPU, part2 is MB or vice versa: this
        // if part1 is Case, part2 is MB or vice versa: that
        // else throw error : incorrect compatibility check
        return true
    }
    static checkBuildCompatibility(build: Build) : boolean {
        // run all possible checks for compatibility; ie 
        // mb and cpu, cpu and mem, mb and mem, case and mb
        return true 
    }
}


// type guards
function isCPU(part : Part) : part is CPU { return part.partType == "CPU" }  
function isMemory(part : Part) : part is Memory { return part.partType == "Memory" }  
function isMotherboard(part : Part) : part is Motherboard { return part.partType == "Motherboard" }  
function isCase(part : Part) : part is Case { return part.partType == "Case" }  