import { BreathTraits } from "./breath-traits"

export interface BreathData {
    rfid: string,
    date_t: string,
    lat: string,
    lon: string,
    ref1: BreathTraits,
    breath: BreathTraits,
    hash: string
}
