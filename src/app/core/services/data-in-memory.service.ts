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

    // Observable<T> es una estructura que "emite" datos a quienes se suscriban a ella, en este caso emite un objeto de tipo T.
    public override create(value: T): Observable<T> {
        return new Observable((observer)=>{
            value.id = this.generarCodigoAlfanumerico();

            const _records = this._records.value; // Toma todos los registros almacenados en _records
            this._records.next([..._records, value]); // Actualiza el estado de _records con next y le agrega value al fnal
            observer.next(value); // Quien este suscrito al observable recibirá el nuevo objeto creado

            observer.complete(); // Cierra el proceso de observación, asegurando que el flujo de datos esta completo
        });
    }

    public override requestAll(): Observable<T[]> {
        return new Observable((observer)=>{
            const _records = this._records.value;
            observer.next(_records);
            observer.complete();
        });
    }

    public override requestById(id: string): Observable<T | null> {
        return new Observable((observer)=>{
            const _records = this._records.value;

            // Busca en en _records un objeto que tenga el mismo id que el que se nos pasa por el argumento
            const foundRecord = _records.find(record => record.id === id) || null;
            observer.next(foundRecord);
            observer.complete();
        })
    }

    public override update(id: string, value: T): Observable<T | null> {
        return new Observable((observer)=>{
          const _records = this._records.value;
          const index = _records.findIndex(record => record.id === id);

          if (index === -1) {
              observer.next(null);
          } else {
              _records[index] = { ..._records[index], ...value };
              this._records.next([..._records]);
              observer.next(_records[index]);
          }

          observer.complete();
        })
    }

    public override delete(id: string): Observable<T | null> {
        return new Observable((observer)=>{
          const _records = this._records.value;
          const index = _records.findIndex(record => record.id === id);

          if(index === -1){
            observer.next(null);
          }else{
            const deletedRecord = _records[index];
            _records.splice(index,1);
            this._records.next([..._records]);
            observer.next(deletedRecord);
          }

          observer.complete();
        })
    }

}
