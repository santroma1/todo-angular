/*export interface Todo {
    id:number;
    task:string;
    completed:boolean;
}*/


export class Todo{
    id?:string | number;
    title:string = "";
    completed:boolean = false;
    userId: string | number;

    constructor(values:any = {}){
        Object.assign(this, values);
    }
}
