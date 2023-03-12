import { createFeatureSelector, createSelector } from "@ngrx/store";
import { FindApiState } from "../find-api.state";

const getFindApiState = createFeatureSelector<FindApiState>('FindApiReducer');

export const getTest = createSelector(
    getFindApiState,
    state => state.test
);

export const getServers = createSelector(
    getFindApiState,
    state => state.servers
);

export const getError = createSelector(
    getFindApiState,
    state => state.error
);