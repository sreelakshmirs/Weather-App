import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  url = 'http://api.openweathermap.org/data/2.5/weather';
  apiKey = '837969b68f66d5e4ca09cc26d393e397';

  constructor(private http: HttpClient) { }

  getDatacity(city: string) {
    let params = new HttpParams()
      .set('q', city)
      .set('units', 'imperial')
      .set('appid', this.apiKey)
    return this.http.get(this.url, { params });
  }
  //for corresponding city
  getcityCard(city) {
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q='+ city +'&appid=837969b68f66d5e4ca09cc26d393e397');
  }
}
