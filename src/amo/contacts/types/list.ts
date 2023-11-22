import { AmoList } from 'src/amo/types/list';
import { ContactsRead } from './read';

export type ContactsList = AmoList<{ contacts: ContactsRead[] }>;
