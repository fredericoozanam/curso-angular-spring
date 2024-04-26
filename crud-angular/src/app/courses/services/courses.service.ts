import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, tap } from 'rxjs/operators';
import { first } from 'rxjs/operators';

import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/assets/courses.json';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Course[]>(this.API)
    .pipe(//permite manipular de modo reativo
      first(),//uma vez chamado, fecha a conexão http. Pode usar tbm o take(1), abre a con uma vez para executar a chamada
      delay(5000),
      tap(courses => console.log(courses))
    );
  }
}
