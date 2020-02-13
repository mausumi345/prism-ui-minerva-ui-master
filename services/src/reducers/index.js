//
// Copyright (c) 2020 Nutanix Inc. All rights reserved.
//
// Starting point of redux reducers
//
import { combineReducers } from 'redux';

// Reducers
import modals from './modals';
import groupsapi from './groupsapi';

export default combineReducers({
  modals,
  groupsapi
});
