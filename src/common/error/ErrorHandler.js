import { connect } from 'react-redux';

import * as ErrorActions from './ErrorActions';

export const errorHandler = connect(
    null,
    (dispatch) => ({
        onError: (error) => dispatch(ErrorActions.handleError(error))
    })
);
