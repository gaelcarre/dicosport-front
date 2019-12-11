import { Category } from './Category';

export class SubCategory {
    constructor(public id: number, public start: Category, public end: Category) {}
}
