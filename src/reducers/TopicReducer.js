
import {FETCH_TOPICS_SUCCESS, SELECT_TOPIC} from '../actions/actionTypes';
const INITIAL_STATES = {selectedTopic:null, topics:[]}

export default (state=INITIAL_STATES, action)=>{
  switch (action.type) {
    case SELECT_TOPIC:
      return {...state, selectedTopic:action.selectedTopic}
    case FETCH_TOPICS_SUCCESS:
       console.log("-------topic reduce");
       console.dir(action.payload)
        return action.payload;

    default: return {state}
  }
}
