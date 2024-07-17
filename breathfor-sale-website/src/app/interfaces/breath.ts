import { BreathData } from "./breath-data";

export interface Breath {
    data: BreathData,
    sent: boolean,
    nft: boolean,
    requested: boolean
}
