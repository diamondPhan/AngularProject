import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { account } from '../models/account';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }
  // insertItem(item:ItemDescription): Observable<ItemDescription> {
  //   return this.http.post<ItemDescription>('http://localhost:8000/api/user/insert/', item);
  insertaccount(acc:account):Observable<account>{
    return this.http.post<account>('http://localhost:8000/api/insert',acc);
  }

}

