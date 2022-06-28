import { Human } from './Human';
import { ISoldier } from '../types';

export class Soldier extends Human implements ISoldier {
  constructor(
    public name: string,
    public health: number,
    public attackPower: number,
    public defensePower: number
  ) {
    super(name);
  }
}
