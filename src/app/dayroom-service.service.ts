import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DayroomServiceService {

  private dayroomUrl = 'http://localhost:3000/menus'
  private goodsUrl='http://localhost:3000/goods'

  constructor(
    private http: HttpClient
  ) { }

  getMenu():Observable<any[]>{
    return this.http.get<any[]>(this.dayroomUrl + '/getMenu').pipe()
  }

  getGoods():Observable<any[]>{
    return this.http.get<any[]>(this.goodsUrl + '/getGoods').pipe()
  }

}
