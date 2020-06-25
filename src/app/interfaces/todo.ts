/*export interface Todo {
    id:number;
    task:string;
    completed:boolean;
}*/


export class Todo{
    id:string | number;
    task:string = "";
    completed:boolean = false;

    constructor(values:any = {}){
        Object.assign(this, values);
    }
}
