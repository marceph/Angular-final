import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/services/porfolio.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  banner: string="";

  constructor(private porfolioService: PorfolioService) { }

  ngOnInit(): void {
    //Esto es almacenar en la variable de instancia los datos recuperados por el Servicio
    this.porfolioService.getDatos().subscribe(data => {
      //asignacion de variables
      this.banner = data.banner;
    });
  }

}
