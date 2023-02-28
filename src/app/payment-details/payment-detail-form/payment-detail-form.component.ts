import { Component, OnInit ,EventEmitter, Output} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';


@Component({
  selector: 'app-payment-detail-form',
  templateUrl: './payment-detail-form.component.html',
  
  styles: [
  ]
})
export class PaymentDetailFormComponent implements OnInit {
  public ListPayment:PaymentDetail[];
  @Output() parentFunction=new EventEmitter();
  constructor(public service:PaymentDetailService,private tostr:ToastrService) { }

   ngOnInit(): void {
    
                  }
   onSubmit(form:NgForm)
    {
      if(this.service.formdata.paymentId==0)
      {
          this.insertRecord(form);
      }
      else{
           this.updateOperation(form);
           this.resetForm(form);
        }
   
        
    }
    insertRecord(form:NgForm)
    {
      this.service.postPaymentetail().subscribe(
        res=>{
                 this.parentFunction.emit();
                this.tostr.success('submitted successfully');
        },
        err =>{
          console.log(err);
        }
      )
    }
    updateOperation(form:NgForm)
    {
      this.service.putPaymentetail().subscribe(
        res=>{
                 this.parentFunction.emit();
                this.tostr.info('updated successfully');
        },
        err =>{
          console.log(err);
        }
      )
    }
    resetForm(form:NgForm)
    {
      form.form.reset();
      this.service.formdata=new PaymentDetail();
    }

}
