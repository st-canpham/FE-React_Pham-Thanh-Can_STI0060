import * as TYPES from '../../shared/constants/types';

export const setUser = (data: string) => {
  return {
    type: TYPES.SET_USER,
    payload: data
  }
};
