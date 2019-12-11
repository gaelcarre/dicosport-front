import { Category } from './Category';
import { Membership } from './Membership';
import { SubSport } from './SubSport';

export class Sport {
    constructor(public id: number, public name: String, public description: String,
        public categories: Membership[], public image: String, public subSports: SubSport[]) {}
}
