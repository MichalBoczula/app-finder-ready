import { createAction, props } from "@ngrx/store";

export const toggleTest = createAction(
    'Show Test value'
);

export const setDomain = createAction(
    'Set domain name',
    props<{ domainName: string }>()
);

