import { Partner } from './partner';

export class PartnerGroup {
  type: string;
  items: Partner[];

  constructor(type: string, items: Partner[]) {
    this.type = type;
    this.items = items;
  }
}