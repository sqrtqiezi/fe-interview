import { CALL_API } from '../middleware/api';

export const IMAGES_FETCH_REQUEST = 'IMAGES/FETCH_REQUEST';
export const IMAGES_FETCH_SUCCESS = 'IMAGES/FETCH_SUCCESS';
export const IMAGES_FETCH_FAILURE = 'IMAGES/FETCH_FAILURE';

const fetchImages = () => ({
  [CALL_API]: {
    types: [IMAGES_FETCH_REQUEST, IMAGES_FETCH_SUCCESS, IMAGES_FETCH_FAILURE],
    endpoint: '/api/images'
  },
});

export const loadImages = () => (dispatch) => {
  dispatch(fetchImages());
};