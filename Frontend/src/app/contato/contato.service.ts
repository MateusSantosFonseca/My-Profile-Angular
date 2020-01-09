import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EmailModel } from './email.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  URL_API = `https://localhost:44330/myprofile/email/`;



  constructor( private http: HttpClient ) { }

  enviarEmail(email: EmailModel): Observable<EmailModel> {

    console.log(email);
    return this.http.post<EmailModel>(this.URL_API, email);
  }

}
