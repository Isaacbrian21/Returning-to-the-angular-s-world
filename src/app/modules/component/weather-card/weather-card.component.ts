import { faDroplet, faTemperatureHigh, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons';
import { WeatherDatas } from './../../../models/interfaces/WeatherDatas';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent {

  //Fazendo a entrada de dados no componente dumb
  @Input() WeatherDatas!: WeatherDatas;

  //Icones da previsão do tempo
  minTemperatureIcon =faTemperatureLow;
  maxTemperatureIcon = faTemperatureHigh;
  humiditIcon = faDroplet;
  windIcon = faWind;
}
