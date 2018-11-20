import {FETCH_TOPICS_SUCCESS,SELECT_TOPIC} from './actionTypes';
import firebase from 'firebase';

export const selectTopic = (topicId)=>
{
  console.log("-TopicAction:" + topicId)
  return {
    type: SELECT_TOPIC,
    selectedTopicId: topicId
  }
}
export const fetchTopics = ()=>{
  const {currentUser} = firebase.auth();
  return (dispatch)=>{
    //https://manager-f3aca.firebaseio.com/work/N1s4KikejJQOLYKLeNp2FF5OR2K2
     firebase.database().ref("/topics").on("value", snapshot => {
     //firebase.database().ref(`//N1s4KikejJQOLYKLeNp2FF5OR2K2/works`).on("value", snapshot => {
      dispatch({type: FETCH_TOPICS_SUCCESS, payload: snapshot.val()})
    })
  }
}
