import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators }   from '@angular/forms';
import { PersonService } from '../services/person.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editperson',
  templateUrl: './editperson.component.html',
  styleUrls: ['./editperson.component.scss']
})
export class EditpersonComponent implements OnInit {
  editForm: FormGroup;
  persnr: number;
  person: any = {
    persnr: "",
    name: "",
    tel: "",
    salaer: "",
    chef: "",
    abtnr: "",
    wohnort: "",
    eintrittsdatum: "",
    bonus: ""
  };
  constructor(private fb: FormBuilder, 
    private personApi: PersonService, 
    private route: ActivatedRoute) { 
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.persnr = +params['persnr']; 
      if(this.persnr) {
        this.personApi.findOne(this.persnr)
        .subscribe(data => {
          console.log('person', data);
          this.person = data.data.personal[0];
          this.createForm();
        });
      } else {
        this.createForm();
      }
      // In a real app: dispatch action to load the details here.
   });
  }

  createForm() {
    this.editForm = this.fb.group({
      name: [this.person.name, [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      persnr: [this.person.persnr, [Validators.required, Validators.pattern] ],
      tel: [this.person.tel, [Validators.required, Validators.pattern] ],
      salaer: [this.person.salaer, [Validators.required, Validators.pattern] ],
      abtnr: [this.person.abtnr, [Validators.required, Validators.pattern] ],
      wohnort: [this.person.wohnort, [Validators.required, Validators.pattern] ],
    });
  }

}
