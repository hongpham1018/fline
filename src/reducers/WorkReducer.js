
import {SELECT_WORK} from '../actions/actionTypes';
const INITIAL_STATES = {selectedWorkId:0}

export default (state=INITIAL_STATES, action)=>{
  switch (action.type) {
    case SELECT_WORK:
      return {...state, selectedTopicId:action.selectedTopicId}
    default: return {state}
  }
}
