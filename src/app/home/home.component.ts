import { Component, OnInit } from '@angular/core';
import { PersonService } from '../services/person.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  person:any = {
    persnr: "",
    name: "",
    tel: "",
    salaer: "",
    chef: "",
    abtnr: "",
    wohnort: "",
    eintrittsdatum: "",
    bonus: ""
  }
  persons:any[];
  constructor(private personService: PersonService) { }

  ngOnInit() {

    this.personService.findAll().subscribe(result=>{
      console.log(result);
      this.persons = result.data;
    })
    
  }

  newPerson(person) {
    
    this.personService.createPerson(person).subscribe(pers => {
      console.log(pers)
    })
  }

  deletePerson(persnr) {
    this.personService.deletePerson(persnr).subscribe(pers => {
      console.log(pers)
    })
  }
  
  getMember(persnr){
    this.personService.findOne(persnr).subscribe(result => {
      console.log(result);
      this.person=result.data.personal[0];

    })

  }
  updatePerson(persnr){
    this.personService.updatePerson(persnr).subscribe(result =>{
      console.log(result);
    })
  }
}

 
