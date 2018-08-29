import { Sport } from './Sport';
import { Category } from './Category';

export class Membership {
    constructor (public id: number, public sport: Sport, public category: Category) {}
}
