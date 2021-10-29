import { Injectable } from '@angular/core';
import { HttpClient ,HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable ,throwError} from 'rxjs';
import { Card } from '../models/card.model';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CardService {

   localUrl = 'assets/data.json';

  SetData(data: any) {
    const jsonData = JSON.stringify(data)
    localStorage.setItem('card', jsonData)
 }
 
 getData() {
    return localStorage.getItem('card')
 }




  
}
