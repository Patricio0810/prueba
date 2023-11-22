import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Encuesta } from '../models/encuesta';

@Injectable({
  providedIn: 'root'
})
export class EncuestaServiceService {

  private baseURL = "http://localhost:8080/encuestas"

  constructor(private httpClient: HttpClient) { }

  obtenerResultadosEncuestas():Observable<Encuesta[]>{
    return this.httpClient.get<Encuesta[]>(this.baseURL);
  }

  guardarEncuesta(encuesta: Encuesta) : Observable<Object>{
    return this.httpClient.post(this.baseURL,encuesta);
  }

}
