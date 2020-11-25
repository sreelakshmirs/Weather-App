import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Router, ActivatedRoute } from '@angular/router'
import { HttpClient, HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  weatherResponse;
  dataResponse;
  locationData;
  constructor(
    private http: HttpClient,
    private service: WeatherService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.weatherResponse = {
      main: {},
      sys: {},
      coord: {},
      wind: {},
      weather: [{}]

    };
  }

  ngOnInit(): void {
    // to get lowest & highest temperature with respect to the city
    this.route.queryParams.subscribe((place) => {
      this.service.getDatacity(place.cityname).subscribe((city) => {
        this.weatherResponse = city;
        this.weatherResponse.temperature = (this.weatherResponse.main.temp - 273.15).toFixed(0);
        this.weatherResponse.temperature_min = (this.weatherResponse.main.temp_min - 273.15).toFixed(0);
        this.weatherResponse.temperature_max = (this.weatherResponse.main.temp_max - 273.15).toFixed(0);
      });
    });

  }
  // for back to home
  gotoHome() {
    this.router.navigate(['/']);
  }

}
