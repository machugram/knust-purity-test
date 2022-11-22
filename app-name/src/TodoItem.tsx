import { type } from "@testing-library/user-event/dist/type";

export class TodoItem {
    text: string; 
    checked: boolean;
    score : number;
    constructor(text: string,checked: boolean,score:number) {
      this.text = text;
      this.checked = checked
      this.score = score
    }
  }


  export type PurityModel = {
    text: string; 
    score : number;
  }