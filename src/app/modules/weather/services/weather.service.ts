import { HttpClient } from '@Angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiKey = 'a7d6c4e75bc2cc5648acc1becffbbecd'
  constructor(private http: HttpClient) { }


  getWeatherDatas(citiName: String): Observable<any> {
      return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${citiName}&units=metric&mode=json&appid=${this.apiKey}`, {})
  }
 }
