import { createReducer, on } from "@ngrx/store";
import { FindApiState } from "./find-api.state";
import * as FindApiActions from './actions/find-api.actions'
import * as FindApiRequestActions from './actions/find-api.request.actions'

export interface FindApiStore {
    findApi: FindApiState
};

const initialState: FindApiState = {
    test: true,
    servers: [],
    domains: [],
    error: "",
    loaded: false,
    actualDomain: ""
}

export const FindApiReducer = createReducer<FindApiState>(
    initialState,
    on(FindApiActions.toggleTest, (state): FindApiState => {
        return {
            ...state,
            test: !state.test
        }
    }),
    on(FindApiRequestActions.loadServerModels, (state) => {
        return {
            ...state,
            servers: [],
            error: '',
            loaded: false
        }
    }),
    on(FindApiRequestActions.loadServerModelsSuccess, (state, action) => {
        return {
            ...state,
            servers: action.servers,
            error: '',
            loaded: true
        }
    }),
    on(FindApiRequestActions.loadServerModelsFailure, (state, action) => {
        return {
            ...state,
            servers: [],
            error: action.error,
            loaded: true
        }
    }),
    on(FindApiRequestActions.loadDomainModels, (state) => {
        return {
            ...state,
            domains: [],
            loaded: false
        }
    }),
    on(FindApiRequestActions.loadDomainModelsSuccess, (state, action) => {
        return {
            ...state,
            domains: action.domains,
            loaded: true
        }
    }),
    on(FindApiRequestActions.loadDomainModelsFailure, (state, action) => {
        return {
            ...state,
            servers: [],
            error: action.error,
            loaded: true
        }
    }),
    on(FindApiActions.setDomain, (state, action): FindApiState => {
        return {
            ...state,
            actualDomain: action.domainName
        }
    }),
)