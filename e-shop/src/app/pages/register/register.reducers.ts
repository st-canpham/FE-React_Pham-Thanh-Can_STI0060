import IAction from '../../shared/interfaces/action-interface';
import * as TYPES from '../../shared/constants/types';

interface IInitState {
  user: string
};

const initState: IInitState = {
  user: ''
}

const registerReducer = (state = initState, action: IAction) => {
  switch (action.type) {
    case TYPES.SET_USER: 
      return {
        ...state,
        user: action.payload
      }
    
    default: return state;
  }
};

export default registerReducer;
