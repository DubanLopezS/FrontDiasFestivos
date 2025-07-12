import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VerificarService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.urlBase}festivos/`;
  }

  public verificarFestivo(anho: number, mes: number, dia: number): Observable<string> {
    return this.http.get(`${this.url}verificar/${anho}/${mes}/${dia}`, { responseType: 'text'});
  }
}
