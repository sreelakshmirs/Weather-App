import { Component, OnInit } from '@angular/core';
//import { ApiService } from './api.service';
import { WeatherService } from './weather.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  weatherResponse;
  myDate = Date.now();
  loading;

  constructor() { }

  ngOnInit(): void {


  }
}
