import {IErrorWithMessage} from "../types";

export function parseError(error: unknown): IErrorWithMessage {
    let message: string;
    if (error instanceof Error) {
        message = error.message;
    } else if (typeof error === 'string') {
        message = error;
    } else if (error && typeof error === 'object' && 'message' in error) {
        message = (error as { message: string }).message;
    } else if (error && typeof error === 'object' && 'toString' in error) {
        message = (error as { toString: () => string }).toString();
    } else {
        message = JSON.stringify(error);
    }
    return {
        message,
        thrown: error
    };
}
