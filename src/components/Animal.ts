import { IAnimal } from '../types';

export class Animal implements IAnimal {
  constructor(public animal: string) {}

  makeVoice(sound: string) {
    return `${this.animal} said ${sound}!`;
  }

  whatEat(meal: string) {
    return `${this.animal} eats ${meal}`;
  }
}
