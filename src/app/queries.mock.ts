import { Query } from './Query.class';

export const QUERIES: Query[] = [
  {
    id: 1,
    query: 'select * from something where everything is ok',
    title: 'select everything',
    created_by: 'vajahath',
    created_at: '31/12/2017 11:50pm',
    finished: true,

    editable: true,

    ready_for_local: false,
    local_status: 'pending',

    ready_for_staging: false,
    staging_status: 'pending',

    ready_for_production: false,
    production_status: 'failed'
  },
  {
    id: 2,
    query: 'select * from something where everything is ok',
    title: 'select everything',
    created_by: 'vajahath',
    created_at: '31/12/2017 11:50pm',
    finished: true,

    editable: false,

    ready_for_local: false,
    local_status: 'pending',

    ready_for_staging: false,
    staging_status: 'pending',

    ready_for_production: false,
    production_status: 'failed'
  },
  {
    id: 3,
    query: 'select * from something where everything is ok',
    title: 'select everything',
    created_at: '31/12/2017 11:50pm',
    created_by: 'vajahath',
    finished: true,

    editable: true,

    ready_for_local: false,
    local_status: 'pending',

    ready_for_staging: false,
    staging_status: 'pending',

    ready_for_production: false,
    production_status: 'failed'
  },
  {
    id: 4,
    query: 'select * from something where everything is ok',
    title: 'select everything',
    created_at: '31/12/2017 11:50pm',
    created_by: 'vajahath',
    finished: true,

    editable: true,

    ready_for_local: false,
    local_status: 'pending',

    ready_for_staging: false,
    staging_status: 'pending',

    ready_for_production: false,
    production_status: 'failed'
  },
  {
    id: 5,
    query: 'select * from something where everything is ok',
    title: 'select everything',
    created_at: '31/12/2017 11:50pm',
    created_by: 'vajahath',
    finished: true,

    editable: true,

    ready_for_local: false,
    local_status: 'pending',

    ready_for_staging: false,
    staging_status: 'pending',

    ready_for_production: false,
    production_status: 'failed'
  }
];
