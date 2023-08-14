import { Component } from '@angular/core';
import { Country } from '../classes/Country';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addcountry',
  templateUrl: './addcountry.component.html',
  styleUrls: ['./addcountry.component.css']
})
export class AddcountryComponent {
CountryToBeAdded : Country = new Country

  SaveCountry(){
  this.khaled.navigate([''])
  }

  constructor(private khaled : Router){

  }
}
