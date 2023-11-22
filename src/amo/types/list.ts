import { AmoLink } from './link';

export type AmoList<T> = {
  _page: number;
  _links: { self: AmoLink; next: AmoLink };
  _embedded: T;
};
