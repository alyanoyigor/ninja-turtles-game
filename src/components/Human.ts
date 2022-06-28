import { IHuman } from '../types';

export class Human implements IHuman {
  constructor(public name: string) {}

  speak(words: string) {
    return `${this.name} said "${words}"`;
  }
}
