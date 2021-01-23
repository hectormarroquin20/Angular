import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personas } from 'src/app/Model/personas';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  personas:Personas[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getPersonas()
    .subscribe(data=> {
      this.personas=data;
    });
  }

  editar(persona:Personas){
    localStorage.setItem("id",persona.id.toString());
    this.router.navigate(["edit"]);
  }

  delete(persona:Personas){
    this.service.deletePersona(persona)
    .subscribe(data=>{
      this.personas=this.personas.filter(p=>p!==persona);
      alert("Usuario eliminado... ")
    })
  }

}
