import { AmoLink } from 'src/amo/types/link';

export type ContactsRead = {
  id: number;
  name: string;
  first_name: string;
  last_name: string;
  responsible_user_id: number;
  group_id: number;
  created_by: number;
  updated_by: number;
  created_at: number;
  updated_at: number;
  closest_task_at: any;
  custom_fields_values: any;
  account_id: number;
  _links: {
    self: AmoLink;
  };
  _embedded: {
    tags: any[];
    companies: any[];
  };
};
