// import { Component ,OnInit,Output,EventEmitter } from '@angular/core';

// import { CountrySvc } from '../classes/CountryService';
// import { Country } from '../classes/Country';
// @Component({
//   selector: 'searchbar',
//   templateUrl: './searchbar.component.html',
//   styleUrls: ['./searchbar.component.css']
// })
// export class SearchbarComponent implements OnInit {
//   SearchedCountry:string = ''

//  @Output() SearchBtnByClcik = new EventEmitter<string>()
//  Countries: Country[] = []

//  constructor(private cs:CountrySvc){}
 
//  ngOnInit(): void {
//   this.cs.GetCountries((data: any)=>{this.Countries=data})
// }

//   SearchSpecificCountry(){
    
//     this.SearchBtnByClcik.emit(this.SearchedCountry)
//     //alert(this.SearchedCountry)
//   }

//   HandleSelectedCountry(){
//     this.SearchBtnByClcik.emit(this.SearchedCountry)
//   }
 
 
// }



 import { Component, OnInit ,Output ,EventEmitter  } from '@angular/core';
 import { Country } from '../classes/Country';
 import { CountrySvc } from '../classes/CountryService';
 import { AuthService } from '../auth/auth.service';
 @Component({
   selector: 'searchbar',
   templateUrl: './searchbar.component.html',
   styleUrls: ['./searchbar.component.css']
 })
 export class SearchbarComponent implements OnInit {
   SearchedCountry : string = ''
   @Output() SearchBtnByClcik = new EventEmitter<string>();
   Countries : Country[] = [];

   constructor( private cs: CountrySvc, private authsvc : AuthService) { }

   // ngOnInit(): void {
   //   this.cs.getData((data: any)=>{this.Countries= data});
   // }

   ngOnInit(): void {
      this.cs.GetCountries((data: any)=>{this.Countries= data});
   }

   SearchSpecificCountry(){
     this.SearchBtnByClcik.emit(this.SearchedCountry); // the child is calling anyone listening (mainly its parent)
     //alert(this.SearchedCountry)
   }

   HandleSelectedCountry(){
    this.SearchBtnByClcik.emit(this.SearchedCountry);
   }

     logout(){
      this.authsvc.logout()
     }

 }