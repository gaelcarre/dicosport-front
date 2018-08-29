import { Category } from './Category';
import { Membership } from './Membership';

export class Sport {
    constructor(public id: number, public name: String, public description: String,
        public categories: Membership[], public image: String) {}
}
