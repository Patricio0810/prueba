import { Component, OnInit } from '@angular/core';
import { Encuesta } from '../models/encuesta';
import { EncuestaServiceService } from '../services/encuesta-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-encuesta',
  templateUrl: './formulario-encuesta.component.html',
  styleUrls: ['./formulario-encuesta.component.css']
})
export class FormularioEncuestaComponent implements OnInit {

  encuesta: Encuesta = new Encuesta();
  mensajeServicio = '';

  constructor(private encuestaService: EncuestaServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  guardarEncuesta(){
    this.encuestaService.guardarEncuesta(this.encuesta).subscribe(data => {
      this.router.navigate(['/', 'resultados']);
    }, error => 
    this.mensajeServicio = 'Error al enviar encuesta');
  }

  onSubmit(){
    this.guardarEncuesta();
    this.mensajeServicio = 'Encuesta enviada correctamente!'
    this.encuesta = new Encuesta();
  }

}
