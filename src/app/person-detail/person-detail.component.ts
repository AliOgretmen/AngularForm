import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators }   from '@angular/forms';
import { PersonService } from '../services/person.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss']
})
export class PersonDetailComponent implements OnInit {
  persnr: number;
  person: any;
  constructor(private fb: FormBuilder, 
    private personApi: PersonService, 
    private route: ActivatedRoute) { 
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.persnr = +params['persnr']; 
      this.personApi.findOne(this.persnr)
      .subscribe(data => {
        console.log('person', data);
        this.person = data.data.personal[0]; 
      });

      // In a real app: dispatch action to load the details here.
   });
  }
}
