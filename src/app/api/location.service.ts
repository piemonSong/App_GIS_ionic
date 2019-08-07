import { Injectable } from '@angular/core';
import {HttpClient,  HttpHeaders , HttpParams } from '@angular/common/http';
import {LocationUrl} from './config-url';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LocationService {

  constructor(
      private http: HttpClient
  ) { }
  getAddress(lon: number, lat: number): Observable<any> {
      const options = { params: new HttpParams().set('postStr',
              JSON.stringify({lon, lat, ver : 1})
              ).set('type', 'geocode')
              .set('tk', 'a10b5d58603d9a7abfe4731e8360fa91')
      };
      return this.http.get(LocationUrl, options);
  }
}
