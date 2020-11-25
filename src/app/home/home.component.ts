import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Router, ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  weatherResponse;
  myDate = Date.now();
  loading;
  errorMessage;
  array: string[] = ['trivandrum', 'aluva', 'delhi', 'chicago', 'norway', 'dubai', 'bombai', 'chennai', 'bengaluru'];
  copyData = [];
  http: any;
  constructor(private service: WeatherService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // to itearte each loaction and store response in to an array
    this.array.forEach(item => {
      this.service.getcityCard(item).subscribe((res) => {
        this.copyData.push(res)
      })
    })
  }
  //to navigate to the corresponding location
  getCity(city) {
    this.errorMessage = '';
    this.service.getDatacity(city).subscribe(
      (cityname) => {
        this.weatherResponse = cityname;
        this.router.navigate(['/location'], {
          queryParams: { cityname: this.weatherResponse.name },
        });
      },
      (error) => {
        //error callback
        console.error('error obtained in component');
        this.errorMessage = true;
        throw error;
      }
    );
  }
}
