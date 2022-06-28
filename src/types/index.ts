export interface IHuman {
  name: string;
  speak: (words: string) => string;
}

export interface IAnimal {
  animal: string;
  makeVoice: (sound: string) => string;
  whatEat: (food: string) => string;
}

export interface ISoldier extends IHuman {
  health: number;
  defensePower: number;
  attackPower: number;
}

export interface IMutantAnimal extends IAnimal, ISoldier {}
