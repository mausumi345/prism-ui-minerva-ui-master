//
// Copyright (c) 2020 Nutanix Inc. All rights reserved.
//
// The EB configuration for Minerva Files view
//
import i18n from '../utils/i18n';

// Helper to translate strings from this module
const i18nT = (key, defaultValue) => i18n.getInstance().t(
  'EntityConfigs', key, defaultValue);

const entity_configs = {
  file_server_service: {
    schema: {
      idAttribute: 'entity_id',
      nameAttribute: 'name',
      attributes: {
        name: {
          type: 'string',
          displayName: i18nT('schema.file_server.name', 'Name')
        },
        nvm_uuid_list: {
          type: 'string',
          displayName: i18nT('schema.file_server.file_server_vms', 'File Server Vms')
        },
        cluster: {
          type: 'string',
          displayName: i18nT('schema.file_server.cluster', 'Cluster')
        },
        afs_version : {
          type: 'string',
          displayName: i18nT('schema.file_server.versions', 'Versions')
        },
        cluster_uuid : {
          type: 'string',
          displayName: i18nT('schema.file_server.actions', 'Actions')
        }
      }
    },
    perspectives: [
      {
        name: '_common_',
        entityAttributes: {
          idAttribute: 'entity_id',
          primaryAttribute: 'name',
          customRenders: {
            name : {
              columnWidth: '25%',
              formatter: 'fs_name'
            },
            cluster : {
              columnWidth: '15%'
            },
            nvm_uuid_list: {
              columnWidth: '20%',
              formatter: 'number_of_vms'
            },
            afs_version : {
              columnWidth: '15%',
              formatter: 'version'
            },
            cluster_uuid: {
              columnWidth: '15%',
              formatter: 'actions'
            }
          },
          groupByAttributes: [
            'name', 'afs_version'
          ],
          helperAttributes: [
            'nvm_uuid_list'
          ],
          virtualAttributes: [
            'network_function_type',
            'network_function_categories'
          ],
          filterByAttributes: [
            'name'
          ]
        },
        visualizations: [
          {
            name: 'grid',
            entityAttributes: {}
          }
        ]
      },
      {
        name: 'General',
        entityAttributes: {
          idAttribute: 'entity_id',
          primaryAttribute: 'name',
          displayAttributes: [
            'name',
            'cluster',
            'nvm_uuid_list',
            'afs_version',
            'cluster_uuid'
          ],
          sortByAttributes: [
            'name'
          ],
          groupByAttributes: [],
          colorByAttributes: [],
          helperAttributes: [],
          summaries: {}
        }
      }
    ],
    actions: {},
    details: [],
    filters: {}
    // Temporary Comment out. UmComment it when PC add FS workflow is
    // supported
    // gettingStarted: {
    //   createActionId: 'create_sc',
    //   gettingStartedPrompt: i18nT('noFiles',
    //     'Minerva files have not been defined. Start by defining one.')
    // }
  },
  event: {
    schema: {
      idAttribute: 'entity_id',
      nameAttribute: 'title',
      attributes: {
        title: {
          type: 'string',
          select: true,
          displayName: i18nT('schema.event.description', 'Description')
        },
        source_entity_name: {
          type: 'string',
          displayName: i18nT('schema.event.sourceEntity', 'Source Entity')
        },
        classification: {
          type: 'string',
          isList: true,
          displayName: i18nT('schema.event.classification', 'Event Type')
        },
        // Virtual Attribute
        cluster : {
          type: 'string',
          displayName: i18nT('schema.event.cluster', 'Cluster')
        },
        _created_timestamp_usecs_ : {
          type: 'integer',
          displayName: i18nT('schema.event.createdTime', 'Create Time')
        }
      }
    },
    perspectives: [
      {
        name: '_common_',
        entityAttributes: {
          idAttribute: 'entity_id',
          primaryAttribute: '_created_timestamp_usecs_',
          customRenders: {
            title : {
              columnWidth: '30%'
            },
            source_entity_name: {
              columnWidth: '20%'
            },
            classification: {
              columnWidth: '10%'
            },
            cluster : {
              columnWidth: '20%'
            },
            _created_timestamp_usecs_: {
              formatter: 'timestampformatterUSec',
              columnWidth: '20%'
            }
          },
          groupByAttributes: [
          ],
          helperAttributes: [
          ],
          virtualAttributes: [
          ],
          filterByAttributes: [
          ],
          defaultSortingAttribute: '_created_timestamp_usecs_'
        },
        visualizations: [
          {
            name: 'grid',
            entityAttributes: {}
          }
        ]
      },
      {
        name: 'General',
        entityAttributes: {
          idAttribute: 'entity_id',
          primaryAttribute: '_created_timestamp_usecs_',
          displayAttributes: [
            'title',
            'source_entity_name',
            'classification',
            'cluster',
            '_created_timestamp_usecs_'
          ],
          sortByAttributes: [
            '_created_timestamp_usecs_'
          ],
          groupByAttributes: [
            'title'
          ],
          colorByAttributes: [],
          helperAttributes: [],
          summaries: {}
        }
      }
    ],
    actions: {},
    details: [],
    filters: {
      local: {
        // Local filters are specific to entity
        type: 'simple',
        value: {
          1: '{"isChecked":true,"attribute":"file_server","op":"ne","value1":"[no_val]","value2":""}'
        }
      }
    },
    gettingStarted: {
    }
  },
  alert: {
    schema: {
      idAttribute: 'entity_id',
      nameAttribute: 'title',
      attributes: {
        title: {
          type: 'string',
          select: true,
          displayName: i18nT('schema.alert.description', 'Description')
        },
        source_entity_name: {
          type: 'string',
          displayName: i18nT('schema.alert.sourceEntity', 'Source Entity')
        },
        impact_type: {
          type: 'string',
          displayName: i18nT('schema.alert.impactType', 'Impact Type')
        },
        severity : {
          type: 'string',
          displayName: i18nT('schema.alert.severity', 'Severity')
        },
        resolved: {
          type: 'boolean',
          displayName: i18nT('schema.alert.resolved', 'Resolved')
        },
        acknowledged: {
          type: 'boolean',
          displayName: i18nT('schema.alert.acknowledged', 'Acknowledged')
        },
        _created_timestamp_usecs_ : {
          type: 'integer',
          displayName: i18nT('schema.alert.createdTime', 'Create Time')
        },
        cluster: {
          type: 'string',
          displayName: i18nT('schema.alert.cluster', 'Cluster')
        }
      }
    },
    perspectives: [
      {
        name: '_common_',
        entityAttributes: {
          idAttribute: 'entity_id',
          primaryAttribute: '_created_timestamp_usecs_',
          customRenders: {
            title : {
              columnWidth: '20%'
            },
            source_entity_name: {
              columnWidth: '15%'
            },
            impact_type: {
              columnWidth: '15%'
            },
            severity: {
              columnWidth: '10%'
            },
            _created_timestamp_usecs_: {
              formatter: 'timestampformatterUSec',
              columnWidth: '10%'
            },
            cluster : {
              columnWidth: '10%'
            }
          },
          groupByAttributes: [
          ],
          helperAttributes: [
          ],
          virtualAttributes: [
          ],
          filterByAttributes: [
            'cluster',
            'source_entity_name'
          ],
          defaultSortingAttribute: '_created_timestamp_usecs_'
        },
        visualizations: [
          {
            name: 'grid',
            entityAttributes: {}
          }
        ]
      },
      {
        name: 'General',
        entityAttributes: {
          idAttribute: 'entity_id',
          primaryAttribute: '_created_timestamp_usecs_',
          displayAttributes: [
            'title',
            'source_entity_name',
            'impact_type',
            'severity',
            '_created_timestamp_usecs_',
            'cluster'
          ],
          sortByAttributes: [
            '_created_timestamp_usecs_'
          ],
          sortByOrder: 'DESCENDING',
          groupByAttributes: ['title'],
          colorByAttributes: [],
          helperAttributes: [],
          summaries: {}
        }
      }
    ],
    actions: [],
    details: [],
    filters: {
      local: {
        // Local filters are specific to entity
        type: 'simple',
        value: {
          1: '{"isChecked":true,"attribute":"file_server","op":"ne","value1":"[no_val]","value2":""}'
        }
      }
    },
    gettingStarted: {
    }
  }
};

export default entity_configs;
