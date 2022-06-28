import { IAnimal, ISoldier } from '../types';
import { MutantAnimal } from './MutantAnimal';

export class MutantTurtle extends MutantAnimal {
  constructor(
    public name: string,
    public health: number,
    public attackPower: number,
    public defensePower: number
  ) {
    super(name, 'Turtle', health, attackPower, defensePower);
  }
}
