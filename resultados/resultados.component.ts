import { Component, OnInit } from '@angular/core';
import { EncuestaServiceService } from '../services/encuesta-service.service';
import { Encuesta } from '../models/encuesta';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  chart: any = []
  resultados: Encuesta[];
  constructor(private encuestaService: EncuestaServiceService) { }

  ngOnInit(): void {
    this.obtenerResultados();
  }

  private obtenerResultados(){
    this.encuestaService.obtenerResultadosEncuestas().subscribe(data =>{
      this.resultados = data;
      this.generarDatasets(data);
      console.log(data);
    });
  }

  private generarDatasets(resultados: Encuesta[]){
    var labels = [{label: 'Rock', value:0}
    , {label: 'Pop', value:0},
    {label: 'Latino', value:0},
    {label: 'Salsa', value:0},
    {label: 'Bachata', value:0}];

    for (let i = 0; i < resultados.length; i++) {
      for (let j = 0; j < labels.length; j++) {
        if (resultados[i].estiloMusical === labels[j].label) {
          labels[j].value = labels[j].value + 1;
        }
      }
    }

    var labelsinfo = [];
    var data = [];
    for (let i = 0; i < labels.length; i++) {
      labelsinfo.push(labels[i].label);
      data.push(labels[i].value);
    }

    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: labelsinfo,
        datasets: [
          {
            label: 'Numero de Votos',
            data: data,
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return;
  }

}
