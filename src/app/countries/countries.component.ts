import { Component , Input, OnChanges, OnInit } from '@angular/core';
import { Country } from '../classes/Country';
import { CountrySvc } from '../classes/CountryService';

@Component({
  selector: 'countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit, OnChanges {
  @Input() CountryToSearch = ''
  Countries: Country[] = []
  constructor( private cs : CountrySvc) {
     
  }
  
  ngOnInit(): void {

  }
  
  ngOnChanges(){
    this.cs.CountryToSearch = this.CountryToSearch
    this.cs.GetCountries((data: any)=>{this.Countries=data})
    
    
  }

  
}
