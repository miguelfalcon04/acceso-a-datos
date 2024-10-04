import { Injectable } from '@angular/core';
import { DataService } from '../interfaces/data-service';
import { Person } from '../interfaces/person';
import { Observable, BehaviorSubject } from 'rxjs';
import { Model } from '../interfaces/model';


export abstract class generic<T>{
    public abstract method1<T>():void;
}
export class DataInMemoryService<T extends Model> extends DataService<T>{
    
    

    private generarCodigoAlfanumerico(): string {
        const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let codigo = "";
        for (let i = 0; i < 10; i++) {
          const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
          codigo += caracteres[indiceAleatorio];
        }
        return codigo;
      }

    constructor(){
        super();
        console.log("DataInMemoryService created");
    }

    public override create(value: T): Observable<T> {
        return new Observable((observer)=>{
            value.id = this.generarCodigoAlfanumerico();
            const _records = this._records.value;
            this._records.next([..._records, value]);
            observer.next(value);
            observer.complete();
        });
        
        
    }
    public override requestAll(): Observable<T[]> {
        throw new Error('Method not implemented.');
    }
    public override requestById(id: string): Observable<T | null> {
        throw new Error('Method not implemented.');
    }
    public override update(id: string, value: T): Observable<T | null> {
        throw new Error('Method not implemented.');
    }
    public override delete(id: string): Observable<T | null> {
        throw new Error('Method not implemented.');
    }
    

   

}
