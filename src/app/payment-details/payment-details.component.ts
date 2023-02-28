import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetail } from '../shared/payment-detail.model';
import { PaymentDetailService } from '../shared/payment-detail.service';

@Component({
  selector: 'app-payment-details',
   templateUrl: './payment-details.component.html',
  template: `
  <app-payment-detail-form (parentFunction)="onRefreshParent()"></app-payment-detail-form>
  <p>Parent component</p>
// `,
//   styles: [
//   ]
})
export class PaymentDetailsComponent implements OnInit {
 
  public ListPayment:PaymentDetail[];
  constructor(public service :PaymentDetailService,public toastr:ToastrService) { }

  ngOnInit(): void {
   
      this.service.refreshlist().subscribe(data=>
              {
                 this.ListPayment=data;
                  console.log(data);
              })
    
     
    }
    onRefreshParent()
    {
      this.service.refreshlist().subscribe(data=>
        {
          this.ListPayment=data;
          console.log(data);
        })
    }
    populateForm(selectedRecord:PaymentDetail)
    {
      this.service.formdata=Object.assign({},selectedRecord);
    }

    onDelete(id:number)
    {
      if(confirm('Are you sure to delete this Record'))
      {
      this.service.DeletePaymentetail(id).subscribe(
        res=>{
               this.onRefreshParent();
                this.toastr.error('Deleted successfully','Payment Detail Register');
        },
        err =>{
          console.log(err);
        }
      )
      }
    }
  }


 
