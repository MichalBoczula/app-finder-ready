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

export const getDomains = createSelector(
    getFindApiState,
    state => state.domains
);

export const getError = createSelector(
    getFindApiState,
    state => state.error
);

export const getLoaded = createSelector(
    getFindApiState,
    state => state.loaded
);

export const getDomainName = createSelector(
    getFindApiState,
    state => state.actualDomain
);