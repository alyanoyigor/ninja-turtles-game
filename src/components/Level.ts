import { MutantAnimal } from './MutantAnimal';
import { Soldier } from './Soldier';

export class Level {
  public getRandomNumber(max: number) {
    return Math.floor(Math.random() * max);
  }

  protected reducePlayerFields(firstPlayer: Soldier, secondPlayer: Soldier) {
    const firstPlayerHalfPower = firstPlayer.attackPower / 2;
    const diffDefenseCoefficient = 0.01;

    if (secondPlayer.defensePower > firstPlayerHalfPower) {
      secondPlayer.health -= firstPlayerHalfPower;
      secondPlayer.defensePower -=
        firstPlayer.attackPower * diffDefenseCoefficient;
    } else {
      secondPlayer.health -= firstPlayer.attackPower;
    }
  }

  public fight(mutant: MutantAnimal, enemy: Soldier) {
    while (enemy.health > 0 && mutant.health > 0) {
      const randomNumber = this.getRandomNumber(100);
      if (randomNumber < 50) {
        this.reducePlayerFields(mutant, enemy);
        console.log(
          `${enemy.name} (Enemy) health - ${enemy.health}\n${mutant.name} (Mutant) attack power - ${mutant.attackPower}\n`
        );
      } else {
        this.reducePlayerFields(enemy, mutant);
        console.log(
          `${mutant.name} (Mutant) health - ${mutant.health}\n${enemy.name} (Enemy) attack power - ${enemy.attackPower}\n`
        );
      }
    }

    return enemy.health > 0 ? `${enemy.name} win!` : `${mutant.name} win!`;
  }
}
