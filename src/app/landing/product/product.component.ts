import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommonService } from 'src/app/myservices/common.service';


@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent {
    reason: any;
    feedback: any;
    message: any;
    showAlert = false;
    alertMessage: string = '';
    alertClass: string = '';
    constructor(private common: CommonService){}
    remove(del: NgForm) {
      this.common.remove(del.value).then(
        (res) => {
          console.log(res);
          this.showAlertMessage('success', 'We are processing your request Thank You!!.');
          del.reset();
        },
        (error) => {
          console.error(error);
          this.showAlertMessage('error', 'Failed to submit the form.');
        }
      );
    }
  
    showAlertMessage(alertClass: string, message: string) {
      this.alertClass = alertClass;
      this.alertMessage = message;
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false;
      }, 5000); // Hide the alert after 5 seconds
    }
   }
