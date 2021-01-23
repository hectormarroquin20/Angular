import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Personas } from '../Model/personas';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/personas';


  getPersonas(){
    return this.http.get<Personas[]>(this.Url+'/listar');
  }

  createPersona(persona:Personas){
    return this.http.post<Personas>(this.Url,persona);
  }

  getPerasonaID(id:number){
    return this.http.get<Personas>(this.Url+"/"+id);
  }

  updatePersona(persona:Personas){
    return this.http.put<Personas>(this.Url+"/"+persona.id,persona);
  }

  deletePersona(persona:Personas){
    return this.http.delete<Personas>(this.Url+"/"+persona.id);
  }
}
