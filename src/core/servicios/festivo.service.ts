import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Festivo } from '../../shared/entidades/festivo';


@Injectable({
  providedIn: 'root'
})
export class FestivoService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.urlBase}festivos/`;
  }

  public obtenerFestivosPorAño(anho: number): Observable<Festivo[]> {
    return this.http.get<Festivo[]>(`${this.url}listar/${anho}`);
  }
}
