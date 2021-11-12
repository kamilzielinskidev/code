export type PreState = { state: 'PRE' };
export type LoadingState = { state: 'LOADING' };
export type ErrorState = { state: 'ERROR'; message: string };
export type OkState<T> = { state: 'OK'; value: T };
