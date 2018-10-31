import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Observable, of } from 'rxjs'
import { MessageService } from '../message/message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  private heroesUrl = 'http://localhost:3000/heroes';

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl+'/getHero')
      .pipe(
        tap(heroes => this.log('点击该英雄')),
        catchError(this.handleError('getHeroes', []))
      );
  }

  getHero(name: string): Observable<Hero> {
    const url = `${this.heroesUrl}/${name}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`该英雄id为：${name}`)),
      catchError(this.handleError<Hero>(`getHero id=${name}`))
    );
  }

  private log(message: string) {
    this.messageService.add(`获取到英雄：${message}`)
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    }
  }

  /** PUT: update the hero on the server */
  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
      tap(_ => this.log(`更新英雄的id为：${hero.name}`)),
      catchError(this.handleError<any>('更新英雄'))
    );
  }





  deleteHero(hero: Hero): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.name;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, httpOptions).pipe(
      tap(_ => this.log(`删除了英雄${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`搜索英雄 "${term}"`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }

  addHero(hero: Hero) {
    return this.http.post(this.heroesUrl + '/createHero', hero, httpOptions).pipe(
      tap(() => console.log('获取数据库数据成功')),

    );
  }

}
