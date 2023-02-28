import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { FormsModule } from '@angular/forms';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
 
 

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  constructor(private http:HttpClient) { }

  formdata : PaymentDetail = new PaymentDetail();
  list:PaymentDetail[];

  readonly baseURL1='https://localhost:7176/api/PaymentDetails';

    postPaymentetail(){
      return  this.http.post(this.baseURL1,this.formdata)
       }
 
      refreshlist():Observable<PaymentDetail[]>
   {
      let baseURL="https://localhost:7176/api/PaymentDetails";
      return this.http.get<PaymentDetail[]>(baseURL); 
   }
   putPaymentetail(){
    return  this.http.put(`${this.baseURL1}/${this.formdata.paymentId}`,this.formdata)
     }
     DeletePaymentetail(id:number){
      return  this.http.delete(`${this.baseURL1}/${id}`)
       }
   }
  

