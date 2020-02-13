//
// Copyright (c) 2020 Nutanix Inc. All rights reserved.
//
// Files Modals actions
//

// ------------
// Action Types
// ------------


export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

// ---------------
// Action Creators
// ---------------

/**
 * openModal - Show up a new modal
 * @param {string} type - Type of modal to be shown
 * @param {Object} options - Action payload
 * @returns {Object} - Action
*/
export function openModal(type, options) {
  return {
    type: OPEN_MODAL,
    payload: {
      type,
      options
    }
  };
}

/**
 * closeModal - Vanish current modal
 * @returns {Object} - Action
*/
export function closeModal() {
  return {
    type: CLOSE_MODAL
  };
}
