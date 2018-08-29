import { Sport } from './Sport';
import { Membership } from './Membership';

export class Category {
    constructor(public id: number, public name: String, public color: String, public sports: Membership[]) {}

    getOppositeColor(): String {

        const red: string = '' + this.color.charAt(1) + this.color.charAt(2);
        const green: string = '' + this.color.charAt(3) + this.color.charAt(4);
        const blue: string = '' + this.color.charAt(5) + this.color.charAt(6);

        console.log(this.color);

        if ((parseInt(red, 2) * 0.299 + parseInt(green, 2) * 0.587 + parseInt(blue, 2) * 0.114) > 186) {
          return '#000000';
        } else {
          return '#ffffff';
        }
      }

}
