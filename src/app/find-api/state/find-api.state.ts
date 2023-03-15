import { DomainModel } from "./DomainModel";
import { ServerModel } from "./ServerModel";

export interface FindApiState {
    test: boolean,
    servers: ServerModel[],
    domains: DomainModel[],
    error: string,
    loaded: boolean;
} 