import { IAnimal, IMutantAnimal } from '../types';
import { Animal } from './Animal';

export class MutantAnimal extends Animal implements IMutantAnimal {
  constructor(
    public name: string,
    public animal: string,
    public health: number,
    public attackPower: number,
    public defensePower: number
  ) {
    super(animal);
  }

  speak(words: string) {
    return `${this.name} said "${words}"`;
  }
}
