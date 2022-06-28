import { IAnimal, ISoldier } from '../types';
import { MutantAnimal } from './MutantAnimal';

export class MutantRat extends MutantAnimal {
  constructor(
    public name: string,
    public health: number,
    public attackPower: number,
    public defensePower: number
  ) {
    super(name, 'Rat', health, attackPower, defensePower);
  }
}
