import { Injectable } from '@angular/core';
import { DataService } from '../interfaces/data-service';
import { Person } from '../interfaces/person';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(
    private dataSvc:DataService<Person>
  ) { 
    console.log("PeopleService created");
    this.dataSvc.create({name:"Juan", surname:"García",age:47}).subscribe({
      next:(value)=>{
        console.log("Persona añadida corréctamente");
        console.log(value);
      },
      error:(err)=>{},
      complete:()=>{}
    });

    this.dataSvc.create({name:"Juan", surname:"García",age:47}).subscribe({
      next:(value)=>{
        console.log("Persona añadida corréctamente");
        console.log(value);
      },
      error:(err)=>{},
      complete:()=>{}
    });

    this.dataSvc.create({name:"Juan", surname:"García",age:47}).subscribe({
      next:(value)=>{
        console.log("Persona añadida corréctamente");
        console.log(value);
      },
      error:(err)=>{},
      complete:()=>{}
    });

    this.dataSvc.create({name:"Juan", surname:"García",age:47}).subscribe({
      next:(value)=>{
        console.log("Persona añadida corréctamente");
        console.log(value);
      },
      error:(err)=>{},
      complete:()=>{}
    });
  }

  addPerson(person:Person):Observable<Person>{
    return this.dataSvc.create(person);
  }

  updatePerson(id:string, person:Person):Observable<Person|null>{
    return this.dataSvc.update(id, person);
  }

  deletePerson(id:string):Observable<Person|null>{
    return this.dataSvc.delete(id);
  }

  getAll():Observable<Person[]>{
    return this.dataSvc.records$;
  }

  getPerson(id:string):Observable<Person|null>{
    return this.dataSvc.requestById(id);
  }

  
  
}
