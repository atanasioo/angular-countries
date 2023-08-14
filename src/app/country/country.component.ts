import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  @Input() title: string = ""
  @Input() description: string = ""
  @Input() imgsrc = ''
  @Input() population :number = 0
  showpopulation(){
    alert(this.population)
  }
  constructor(){
    
  }
  ngOnInit(): void {
    //console.log(this.title)
  }
}
