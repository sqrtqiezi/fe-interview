import { Status } from '../constants';
import { IMAGES_FETCH_REQUEST, IMAGES_FETCH_SUCCESS, IMAGES_FETCH_FAILURE } from '../actions';

export const images = 
  (state = { status: Status.LOADING, images: [] }, action) => {
    switch (action.type) {
      case IMAGES_FETCH_REQUEST: {
        return {
          ...state,
          status: Status.LOADING,
        };
      }
      case IMAGES_FETCH_SUCCESS: {
        const images = action.response.data.result;
        return {
          status: Status.SUCCESS,
          images: images,
        };
      }
      case IMAGES_FETCH_FAILURE: {
        return {
          ...state,
          status: Status.FAILURE,
        };
      }
      default: {
        return state;
      }
    }
  }