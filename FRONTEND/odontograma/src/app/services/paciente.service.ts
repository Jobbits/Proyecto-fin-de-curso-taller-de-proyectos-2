import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PacienteService {
  constructor(private http: HttpClient) {}

  getPacienteAleatorio(): Observable<any> {
    return this.http.get<any[]>('http://localhost:3000/historiaClinica').pipe(
      map((data: any[]) => {
        const randomIndex = Math.floor(Math.random() * data.length);
        return data[randomIndex];
      })
    );
  }
}
