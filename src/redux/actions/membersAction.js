import {actionType} from '../actionTypes'


export function addMember (member) {
  return {
    type: actionType.ADD_MEMBER,
    member,
  }
}

export function editMember (id,member) {
  return {
    type: actionType.EDIT_MEMBER,
    id,
    member,
  }
}

export function setMember (members) {
  return {
    type: actionType.SET_MEMBERS,
    members : [...members],
  }
}