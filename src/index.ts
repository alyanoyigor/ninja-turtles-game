import { Level } from './components/Level';
import { MutantTurtle } from './components/MutantTurtle';
import { Soldier } from './components/Soldier';

const enemy = new Soldier('Basic soldier 1', 10, 1, 0);
const leonardoTurtle = new MutantTurtle('Leonardo', 100, 10, 10);
const firstLevel = new Level();

console.log(firstLevel.fight(leonardoTurtle, enemy));
