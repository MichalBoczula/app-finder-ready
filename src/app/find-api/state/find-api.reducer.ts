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
    error: ""
}

export const FindApiReducer = createReducer<FindApiState>(
    initialState,
    on(FindApiActions.toggleTest, (state): FindApiState => {
        return {
            ...state,
            test: !state.test
        }
    }),
    on(FindApiRequestActions.loadServerModelsSuccess, (state, action) => {
        return {
            ...state,
            servers: action.servers,
            error: ''
        }
    }),
    on(FindApiRequestActions.loadServerModelsFailure, (state, action) => {
        return {
            ...state,
            servers: [],
            error: action.error
        }
    })
)