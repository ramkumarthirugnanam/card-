import { Component, OnInit, NgZone } from '@angular/core';
import { Card } from 'src/app/models/card.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css'],
})
export class AddCardComponent implements OnInit {
  submitted = false;
  maxLength = false;
  listData: any;

  cardForm = new FormGroup({
    BankName: new FormControl(null, [Validators.required]),
    AccountNo: new FormControl(null, [Validators.required]),
    creditcardnum: new FormGroup({
      cardnum1: new FormControl(null, [Validators.required]),
      cardnum2: new FormControl(null, [Validators.required]),
      cardnum3: new FormControl(null, [Validators.required]),
      cardnum4: new FormControl(null, [Validators.required]),
    }),
  });

  Card: any[] = [
    {
      BankName: 'INDIAN BANK',
      AccountNo: '45567899999999999',
      CreditCardNo: '1111 1111 1111 1111 ',
    },
    {
      BankName: 'CITY UNION BANK',
      AccountNo: '87654444444444444',
      CreditCardNo: '2222 2222 2222 2222 ',
    },
    {
      BankName: 'STATE BANK',
      AccountNo: '99976544442222245',
      CreditCardNo: '3333 3333 3333 3333',
    },
    {
      BankName: 'AXIS BANK',
      AccountNo: '56332222222222222',
      CreditCardNo: '4444 4444 4444 4444',
    },
    {
      BankName: 'INDIAN OVESEAS BANK',
      AccountNo: '35657677777877777',
      CreditCardNo: '5555 5555 5555 5555 ',
    },
    {
      BankName: 'KARUR VISIA BANK',
      AccountNo: '56980254444444444',
      CreditCardNo: '6666 6666 6666 6666 ',
    },
  ];

  constructor(private router: Router, private ngZone: NgZone) {
    this.listData = [];
  }
  dtOptions: any = {};

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 3,
      processing: true,
      dom: 'Bfrtip',
    };
  }

  get form() {
    return this.cardForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.cardForm.invalid) {
      return;
    } else {
      alert('Card Addded Sucessfully');
      this.listData.push(this.cardForm.value);
      //this.cardForm.reset();

      console.log('Form submission', JSON.stringify(this.cardForm.value));
      //localStorage.setItem('card', JSON.stringify(this.cardForm.value));
    }
  }

  Reset() {
    this.cardForm.reset();
  }

  numberOnly(event: any): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  Numbervalidation(event: any): boolean {
    let charcode = event.which ? event.which : event.keycode;

    if (
      charcode >= 33 &&
      (charcode <= 64 ||
        (charcode > 160 && charcode == 16) ||
        charcode == 50 ||
        charcode == 221 ||
        charcode == 54 ||
        charcode == 192 ||
        charcode == 189 ||
        charcode == 219 ||
        charcode == 94 ||
        charcode == 93 ||
        charcode == 95 ||
        charcode == 91 ||
        charcode == 92 ||
        charcode == 123 ||
        charcode == 124 ||
        charcode == 125 ||
        charcode == 96 ||
        charcode == 126)
    ) {
      // console.log("charcter Number & special character restrict", charcode);
      return false;
    }
    return true;
  }


  keytab(e: any) {
    var target = e.srcElement || e.target;
    var maxLength = parseInt(target.attributes['maxlength'].value, 10);

    var myLength = target.value.length;

    if (myLength >= maxLength) {
      var next = target;
      while ((next = next.nextElementSibling)) {
        if (next == null) break;
        if (next.tagName.toLowerCase() == 'input') {
          next.focus();
          break;
        }
      }
    }

    if (myLength === 0) {
      var previous = target;

      while ((previous = previous.previousElementSibling)) {
        if (previous == null) break;
        if (previous.tagName.toLowerCase() === 'input') {
          previous.focus();
          break;
        }
      }
    }
  }
}
