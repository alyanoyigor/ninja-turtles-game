import { Soldier } from './Soldier';

export class SuperSoldier extends Soldier {
  constructor(
    public name: string,
    public health: number,
    public attackPower: number,
    public defensePower: number
  ) {
    super(name, health, attackPower, defensePower);
  }
}
