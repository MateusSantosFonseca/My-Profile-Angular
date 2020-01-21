import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { EmailModel } from './email.model';

import { ContatoService } from './contato.service';

import { GlobalService } from '../global.service';


@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})


export class ContatoComponent implements OnInit {

  contadorCaracteres: string;
  mensagemErro = '* O campo foi preenchido incorretamente';
  emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  emailModelObject: EmailModel;

  contactForm = new FormGroup({});

  nome = new FormControl('', Validators.compose([
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(120)
  ]));

  assunto = new FormControl('', Validators.compose([
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(60)
  ]));

  email = new FormControl('', Validators.compose([
    Validators.required,
    Validators.pattern(this.emailRegex),
    Validators.minLength(5)
  ]));

  telefone = new FormControl('', Validators.compose([
    Validators.required,
    Validators.minLength(8)
  ]));


  mensagem = new FormControl('', Validators.compose([
    Validators.required,
    Validators.maxLength(500)
  ]));


  constructor(private contatoService: ContatoService,
              private globalService: GlobalService) {

    this.contadorCaracteres = '';
    this.contactForm.addControl('nome', this.nome);
    this.contactForm.addControl('assunto', this.assunto);
    this.contactForm.addControl('email', this.email);
    this.contactForm.addControl('telefone', this.telefone);
    this.contactForm.addControl('mensagem', this.mensagem);

  }

  ngOnInit() {
  }

  onSubmit() {
    this.emailModelObject = new EmailModel();
    this.emailModelObject.nomeRemetente = this.nome.value;
    this.emailModelObject.assunto = this.assunto.value;
    this.emailModelObject.emailRemetente = this.email.value;
    this.emailModelObject.telefone = this.telefone.value;
    this.emailModelObject.mensagem = this.mensagem.value;

    this.contatoService
      .enviarEmail(this.emailModelObject)
      .subscribe(
        (success) => {
          this.globalService.openSnackBar('E-mail enviado com sucesso!', 3500, 'Ok');
          // console.log(success);
        },
        (error) => {
          this.globalService.openSnackBar('Erro. O e-mail não foi enviado, desculpe.', 3500, 'Ok');
          // console.log(error);
        }
      );

    this.nome.reset();
    this.assunto.reset();
    this.email.reset();
    this.telefone.reset();
    this.mensagem.reset();
  }
}
