import { Injectable } from '@angular/core';
import { DataService } from '../interfaces/data-service';
import { Person } from '../interfaces/person';
import { Observable, BehaviorSubject } from 'rxjs';
import { Model } from '../interfaces/model';

export class FirebaseDataService<T> extends DataService<Model>{

    records:BehaviorSubject<T[]> = new BehaviorSubject<T[]>([]);
    constructor(){
        super();
        console.log("DataInMemoryService created");
    }
    public override create<T extends Model>(value: T): Observable<T> {
        throw new Error('Method not implemented.');
    }
    public override requestAll<T extends Model>(): Observable<T[]> {
        throw new Error('Method not implemented.');
    }
    public override requestById<T extends Model>(id: string): Observable<T | null> {
        throw new Error('Method not implemented.');
    }
    public override update<T extends Model>(id: string, value: T): Observable<T | null> {
        throw new Error('Method not implemented.');
    }
    public override delete<T extends Model>(id: string): Observable<T | null> {
        throw new Error('Method not implemented.');
    }

   

}
