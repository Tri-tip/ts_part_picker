import { Currency, Part, Build} from "../classes.ts"

interface Constraints {
    price: number,
    currency: Currency,
    case_color: color,
    size: form_factor,
    to_include: Part[],
}

// similar to constraints, but instead of being hard, they are added as weights to performance calculation 
// to offset some performance to achieve these preferences
interface Preferences {
    price: number,
    currency: Currency,
    case_color: color,
    size: form_factor,
    to_include: Part[],
    cg_weight: number, // manual skewing between cpu and gpu; calculated on frontend. + => gpu, - => cpu
    t_weight: number // emphasis on cooling. + => +cooling. calculated on frontend

}

interface BuildEval {
    build: Build,
    total_perf: number,
    therm_perf: number,
    price: number,
    currency: Currency,
    case_color: color,
    size: form_factor,
}

// maybe linear neural network to learn weights and relative weighting of preferences??
const _weights = {
    CPU: 0.4,
    Motherboard: 0.05,
    GPU: 0.3, 
    // .. etc
}


// constraint/preferences enumerations
enum color {
    black,
    white
}

enum form_factor {
    ATX,
    mATX,
    ITX
}