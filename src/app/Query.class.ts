export class Query {
  id: number;
  query: string;
  title: string;
  created_by: string;
  created_at: string;

  finished: boolean;
  finishedInProgress?: boolean;

  ready_for_vajahath: boolean;
  vajahath_status: 'passed' | 'pending' | 'failed' | 'inactive';
  ready_for_vajahathInProgress?: boolean;

  ready_for_nithin: boolean;
  nithin_status: 'passed' | 'pending' | 'failed' | 'inactive';
  ready_for_nithinInProgress?: boolean;

  ready_for_local: boolean;
  local_status: 'passed' | 'pending' | 'failed' | 'inactive';
  ready_for_localInProgress?: boolean;

  ready_for_staging: boolean;
  staging_status: 'passed' | 'pending' | 'failed' | 'inactive';
  ready_for_stagingInProgress?: boolean;

  ready_for_production: boolean;
  production_status: 'passed' | 'pending' | 'failed' | 'inactive';
  ready_for_productionInProgress?: boolean;
}
