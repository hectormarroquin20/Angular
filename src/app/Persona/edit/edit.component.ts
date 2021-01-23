import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personas } from 'src/app/Model/personas';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  modelPersona = new Personas();

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
    this.editar();
  }

  editar(){
    let id=localStorage.getItem("id");
    this.service.getPerasonaID(+id)
    .subscribe(data=>{
      this.modelPersona=data;
    })
  }

  actualizar(persona:Personas){
    this.service.updatePersona(persona)
    .subscribe(data=>{
      this.modelPersona=data;
      alert("Se actualizao con Exito...!!!")
      this.router.navigate(["listar"]);
    })
  }

}
