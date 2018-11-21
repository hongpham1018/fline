
import {SELECT_TOPIC} from '../actions/actionTypes';
const INITIAL_STATES = {selectedTopic:null}

export default (state=INITIAL_STATES, action)=>{
  switch (action.type) {
    case SELECT_TOPIC:
      return {...state, selectedTopic:action.selectedTopicId}
    default: return {state}
  }
}
