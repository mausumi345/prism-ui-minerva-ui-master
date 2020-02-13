//
// Copyright (c) 2019 Nutanix Inc. All rights reserved.
//
// Application wide constants
//
const AppConstants = {
  APIS: {
    GROUPS_API : '/api/nutanix/v3/groups'
  },

  // State for when an action is enabled
  ACTION_CAPABILITY_ENABLED_STATE: { state: 'enabled' },

  // Polling Freq for the grid
  POLLING_FREQ_SECS: 90,

  // Name of the services.
  SERVICE_NAME: {
    PRISM_UI: 'prismui'
  },

  SUMMARY_TAB_KEY: 'summary',

  // Target and State for Header IFrame dom click listener
  IFRAME_EVENT_OPEN_PE: 'iframe_event_open_pe',
  FS_PC_TO_PE: 'fs_pc_to_pe',

  ENTITY_TYPES: {
    ENTITY_FILE_SERVER: 'file_server_service',
    ENTITY_ALERT      : 'alert',
    ENTITY_EVENT      : 'event'
  },

  ENTITY_TYPE_NAME: {
    ENTITY_FILE_SERVER: 'File Server',
    ENTITY_ALERT      : 'Alert',
    ENTITY_EVENT      : 'Event'
  },

  ENTITY_TYPE_NAME_PLURAL: {
    ENTITY_FILE_SERVER: 'File Servers',
    ENTITY_ALERT      : 'Alerts',
    ENTITY_EVENT      : 'Events'
  },

  // NOTIFICATION
  //-------------
  NOTIFY_SUCCESS : 'notifySuccess',
  NOTIFY_ERROR : 'notifyError',

  METHODS: {
    GET: 'GET',
    PUT: 'PUT'
  },

  MODAL_TYPE: {
    FILE_SERVER_DETAILS: 'file_server_details'
  },

  ENTITY_CATEGORY_SEPARATOR: ':',
  CATEGORY : {
    NET_SERVICE_PROVIDER: 'NetworkServiceProvider'
  },


  // Action Types
  ACTIONS: {
    FETCH_FS: 'fetch_fs'
  }
};

export default AppConstants;
