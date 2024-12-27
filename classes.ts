export interface PricingData {
    url: string
    price: number
    currency: string
    supplier: string
}

export interface BasePart {
    partType: string
    name: string
    pricing?: PricingData[]
}

export interface CPU extends BasePart {
    tdp: string
    series: string
    socket: string
    cores: number
    threads: number
    max_mem: string
}

export interface Motherboard extends BasePart {
    form: string
    chipset: string
    socket: string
    max_mem: string
    memory_type: string
}

export interface Memory extends BasePart {
    speed: string
    modules: string
    storage: string
    cas_latency: number
    timings: string
}

export interface Case extends BasePart {
    color: string
    form_factors: string
    gpu_len: string
    dimensions: string
}

export interface Build {
    cpu: CPU
    motherboard: Motherboard
    memory: Memory
    case: Case  
}

export type Part = CPU | Motherboard | Memory | Case | BasePart