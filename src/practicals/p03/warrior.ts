import { Character } from "./character";

export class Warrior extends Character {
    private weapon: string;

    constructor(name: string, weapon: string, health: number) {
    super(name, health);
    this.weapon = weapon;
    }
    getWeapon(): string {
    return this.weapon;
    }
    override receiveDamage(damage: number): void {
    const reducedDamage = damage * 10/100
    this.health -= reducedDamage;
    }
}
