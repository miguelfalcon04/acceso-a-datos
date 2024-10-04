import { Model } from "./model";

export interface Person extends Model{
    name:string,
    surname:string,
    age:number
}