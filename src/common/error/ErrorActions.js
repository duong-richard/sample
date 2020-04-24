export const HANDLE_ERROR = 'HANDLE_ERROR';
export const CLOSE_ERROR = 'CLOSE_ERROR';

export function handleError(error) {
    console.log("error:", error.response.request.response );
    
    if (error && error.response && error.response.status && error.response.status === 403) {
        return {
            type: HANDLE_ERROR,
            message: "You do not have permission."
        };
    }
    return {
        type: HANDLE_ERROR,
        ...error
    };
}

export function closeError() {
    return {
        type: CLOSE_ERROR
    };
}
