import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { EmailModel } from './email.model';

import { Observable } from 'rxjs';

import { GlobalService } from '../global.service';

@Injectable({
  providedIn: 'root'
})

export class ContatoService {
  URL_API = `https://my-profile-angular-api-email.vercel.app/api/sendEmail`;

  constructor(private http: HttpClient,
              private globalService: GlobalService) { }

  enviarEmail(email: EmailModel): Observable<EmailModel> {
    this.globalService.openSnackBar('Enviando e-mail...', 10000); // Este snackbar é demorado pois ele será interrompido por outro snackbar
    return this.http.post<EmailModel>(this.URL_API, email);
  }
}
