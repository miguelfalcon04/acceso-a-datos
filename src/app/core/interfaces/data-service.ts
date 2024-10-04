import { BehaviorSubject, Observable } from "rxjs";
import { Model } from "./model";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export abstract class DataService<T extends Model>{
    protected _records:BehaviorSubject<T[]> = new BehaviorSubject<T[]>([]);
    public records$:Observable<T[]> = this._records.asObservable();
    public abstract create(value:T):Observable<T>;
    public abstract requestAll():Observable<T[]>;
    public abstract requestById(id:string):Observable<T|null>;
    public abstract update(id:string, value:T):Observable<T|null>;
    public abstract delete(id:string):Observable<T|null>;
}