//
// Copyright (c) 2020 Nutanix Inc. All rights reserved.
//
// Files Modals reducer
//

// Actions
import {
  OPEN_MODAL,
  CLOSE_MODAL
} from '../actions/modals';


// Default state
const initialState = {
  type: null,
  options: {},
  visible: false
};

/**
 * Modals redurer
 * @param {Object} state - Current state.
 * @param {Object} action - Action
 * @returns {Object} - New state
 */
function modals(state = initialState, action) {
  const { payload = {} } = action;

  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        options: payload.options,
        type: payload.type,
        visible: true
      };

    case CLOSE_MODAL:
      return {
        ...state,
        visible: false
      };

    default:
      return state;
  }
}

export default modals;

