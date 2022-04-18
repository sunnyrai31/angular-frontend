import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';



export interface product {
  product: any;
}

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  getProductList(): Observable<any> {
    const headers = new HttpHeaders().set('accept', 'application/json, text/plain, */*');
    const endPoint= 'https://run.mocky.io/v3/46d46772-c6e1-4bd4-b0c9-bef916a29db8';
    return this.httpClient.get<product>(endPoint, { headers })
      .pipe(catchError(response => throwError(() => response.error)));
  }

  constructor(private httpClient:HttpClient,) { }
}
