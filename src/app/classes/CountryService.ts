import { Country } from "./Country";
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";


@Injectable({
  providedIn: 'root'
})

export class CountrySvc{
  Countries : Country [] = []
  CountryToSearch: string = ''
  
  
  constructor(private apicaller : HttpClient){
    this.apicaller.get('https://restcountries.com/v3.1/all')
    .subscribe((data)=>{console.log(data)})
  }
  GetCountries(filldata :any){
    this.Countries = []
    var _URL = '' 
    if (this.CountryToSearch == ''){
      _URL = 'https://restcountries.com/v3.1/all'
    }
    else {
      _URL = 'https://restcountries.com/v3.1/name/'+this.CountryToSearch
    }
   
   
    this.apicaller.get(_URL)
         .subscribe((json:any)=>{
      json.forEach((country: any) => {
        let c = new Country();
        c.name = country.name.common
        c.desc = country.region
        c.imgsrc = country.flags.png
        c.population= country.population
        this.Countries.push(c)
        if(filldata != null){filldata(this.Countries)}
      })
    })
    
  }



}