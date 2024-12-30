import {BasePart, CPU, Motherboard, Memory, Case, Part} from "./classes.ts"
import { Preformat, CPUPreformat, MemoryPreformat, MotherboardPreformat, CasePreformat} from "./preformatTypes.ts"



// just manual type conversion to convert from pcpp specs to our internal specs. change and dedicate for final format later 
export function object_to_part(data: Preformat) : Part {
    if (isCPU(data)) {
        return {
            name: data.name,
            partType: data.partType,
            tdp: data.TDP,
            series: data.Series,
            socket: data.Socket,
            cores: Number(data["Core Count"]),
            threads: Number(data["Thread Count"]),
            max_mem: data["Maximum Supported Memory"],
        } as CPU
    }
    else if (isMemory(data)) {
        return {
            name: data.name,
            partType: data.partType,
            speed: data.Speed,
            modules: data.Modules,
            storage: data.Modules,
            cas_latency: Number(data["CAS Latency"]),
            timings: data.Timing
        } as Memory
    }
    else if (isMotherboard(data)) {
        return {
            name: data.name,
            partType: data.partType,
            form: data["Form Factor"],
            chipset: data.Chipset,
            socket: data["Socket / CPU"],
            max_mem: data["Memory Max"],
            memory_type: data["Memory Type"]
        } as Motherboard
    }
    else if (isCase(data)) {
        return {
            name: data.name,
            partType: data.partType,
            color: data.Color,
            form_factors: data["Motherboard Form Factor"],
            gpu_len: data["Maximum Video Card Length"],
            dimensions: data.Dimensions
        } as Case
    }
    return {partType: "ha ha ha ", name: "ha ha ha "} as BasePart
}

// type guards for typescript typing system to work
function isCPU(data : Preformat) : data is CPUPreformat { return data.partType == "CPU" }  
function isMemory(data : Preformat) : data is MemoryPreformat { return data.partType == "Memory" }  
function isMotherboard(data : Preformat) : data is MotherboardPreformat { return data.partType == "Motherboard" }  
function isCase(data : Preformat) : data is CasePreformat { return data.partType == "Case" }  