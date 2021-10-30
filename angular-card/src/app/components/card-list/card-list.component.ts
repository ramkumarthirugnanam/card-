import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card.model';

@Component({
  selector: 'app-tutorials-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  Card: any[] = [
    { "BankName": "INDIAN BANK", "AccountNo": "45567899999999999", "creditcardnum":"1111 1111 1111 1111 "},
    { "BankName": "CITY UNION BANK", "AccountNo": "87654444444444444", "creditcardnum":"2222 2222 2222 2222 "},
    { "BankName": "STATE BANK", "AccountNo": "99976544442222245", "creditcardnum":"3333 3333 3333 3333"},
    { "BankName": "AXIS BANK", "AccountNo": "56332222222222222", "creditcardnum":"4444 4444 4444 4444"},
    { "BankName": "INDIAN OVESEAS BANK", "AccountNo": "35657677777877777", "creditcardnum":"5555 5555 5555 5555 "},
    { "BankName": "KARUR VISIA BANK", "AccountNo": "56980254444444444", "creditcardnum":"6666 6666 6666 6666 "},

];

cardList: any = []

  constructor() { }
  dtOptions: any = {};

  ngOnInit(): void {

    this.cardList = localStorage.getItem('card');

  

  }

  
    
  

 
}
