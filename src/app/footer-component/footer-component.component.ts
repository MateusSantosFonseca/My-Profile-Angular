import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-component',
  templateUrl: './footer-component.component.html',
  styleUrls: ['./footer-component.component.css']
})
export class FooterComponentComponent implements OnInit {
  anoAtual: number;

  constructor() {
    this.anoAtual = new Date().getFullYear();

   }

  ngOnInit() {
  }

}
