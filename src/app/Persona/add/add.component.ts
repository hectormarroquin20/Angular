import { Component, OnInit } from '@angular/core';
import { Personas } from 'src/app/Model/personas';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  
  modelPersona = new Personas();

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
    
  }

  guardar(persona:Personas){
    this.service.createPersona(persona)
    .subscribe(data=>{
      alert("Se agrego con exito!!!");
      this.router.navigate(["listar"]);
    })
  }

}
