import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Personas } from './Model/personas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejemplo01';

  personas:Personas[];
  constructor(private router: Router){}

  listar(){
    this.router.navigate(["listar"]);
  }

  nuevo(){
    this.router.navigate(["add"]);
  }

}
