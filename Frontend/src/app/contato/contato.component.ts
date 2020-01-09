import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})


export class ContatoComponent implements OnInit {

  contadorCaracteres: string;
  mensagemErro = '* O campo foi preenchido incorretamente';
  emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  contactForm = new FormGroup({});

  nome = new FormControl('', Validators.compose([
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(15)
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


  constructor() {
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
    console.log(this.contactForm.value);
    alert(this.nome.value + ', sua mensagem foi enviada com sucesso. Obrigado pelo contato!');
    // Abrir popup ou modal, ver algum servico aque faz isso para alertar que foi concluir com sucesso
    this.nome.reset();
    this.assunto.reset();
    this.email.reset();
    this.telefone.reset();
    this.mensagem.reset();
  }

}
