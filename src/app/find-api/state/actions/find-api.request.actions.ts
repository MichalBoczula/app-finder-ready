import { createAction, props } from "@ngrx/store";
import { DomainModel } from "../DomainModel";
import { ServerModel } from "../ServerModel";

export const loadDomainModels = createAction(
    'Loading domains array ... '
);

export const loadDomainModelsSuccess = createAction(
    'Loaded domains array success',
    props<{ domains: DomainModel[] }>()
);

export const loadDomainModelsFailure = createAction(
    'Loaded domains array fail',
    props<{ error: string }>()
);

export const loadServerModels = createAction(
    'Loading servers array ... '
);

export const loadServerModelsSuccess = createAction(
    'Loaded servers array success',
    props<{ servers: ServerModel[] }>()
);

export const loadServerModelsFailure = createAction(
    'Loaded servers array fail',
    props<{ error: string }>()
);