import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../shared/baseurl';

@Injectable()
export class PersonService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<any> {
    return this.http.get<any>(baseUrl);
  }

  findOne(persnr): Observable<any> {
    return this.http.get<any>(`${baseUrl}/${persnr}`)
  }

  createPerson(person: any): Observable<any> {
    return this.http.post(baseUrl, person);
  }

  deletePerson(persnr): Observable<any> {
    return this.http.delete(`${baseUrl}/${persnr}`);
  }
  
  updatePerson(member: any): Observable<any> {
    return this.http.put(`${baseUrl}/${member.persnr}`, member);
  }
}
