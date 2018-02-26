import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
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
  heroForm: FormGroup;
  feedbackForm: FormGroup;
  feedbackErrMess: string;
  //contactType = ContactType;
  //submitResult: ;
  submission: boolean = false;
  showSubmission: boolean = false;
  
  formErrors = {
    'persnr': '',
    'name': '',
    'tel': '',
    'salaer': '',
    'abtnr': '',
    'wohnort':''
  };

  validationMessages = {
    'persnr': {
      'required':      'Personal Number is required.',
      'pattern':       'Tel. number must contain only numbers.'
    },
    'name': {
      'required':      'Name is required.',
      'minlength':     'Name must be at least 2 characters long.',
      'maxlength':     'Name cannot be more than 25 characters long.'
    },
    'tel': {
      'required':      'Tel. number is required.',
      'pattern':       'Tel. number must contain only numbers.'
    },
    'salaer': {
      'required':      'Sälar is required.',
      'pattern':       'Sälar must contain only numbers.'
    },
    'abtnr': {
      'required':      'Abteilungsnumber is required.',
      'pattern':       'Abteilungsnumber must contain only numbers.'
    },
    'wohnort': {
      'required':      'Wohnort is required.',
      'minlength':     'Wohnort must be at least 2 characters long.',
      'maxlength':     'Wohnort cannot be more than 25 characters long.'
    },
  };

  constructor(private fb: FormBuilder, private personService: PersonService) { }

  ngOnInit() {
    this.personService.findAll().subscribe(result=>{
      console.log(result);
      this.persons = result.data;
    })
    this.createForm();
  }

  getMember(persnr){
    this.personService.findOne(persnr).subscribe(result => {
      console.log(result);
      this.person=result.data.personal[0];

    })
  }

  createForm() {
    this.heroForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      persnr: ['', [Validators.required, Validators.pattern] ],
      tel: ['', [Validators.required, Validators.pattern] ],
      salaer: ['', [Validators.required, Validators.pattern] ],
      abtnr: ['', [Validators.required, Validators.pattern] ],
      wohnort:  ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],


    });
  }

}
