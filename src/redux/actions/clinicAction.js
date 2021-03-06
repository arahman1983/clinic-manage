import {actionType} from '../actionTypes'

export function addClinic (clinic) {
  return {
    type: actionType.ADD_CLINIC,
    clinic,
  }
}

export function editClinic (id,clinic) {
  return {
    type: actionType.ADD_CLINIC,
    id,
    clinic,
  }
}

export function setClinic (clinics) {
  return {
    type: actionType.SET_CLINIC,
    clinics : [...clinics],
  }
}