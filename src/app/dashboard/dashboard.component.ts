import { Component } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  SpecificCountryToSearch : string = ''
  
  DadyToChild(_countrysearchvalue : string){
    //alert("hello " + _countrysearchvalue)
    this.SpecificCountryToSearch = _countrysearchvalue
    
  }
}
