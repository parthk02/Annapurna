// import { Component } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { CommonService } from 'src/app/myservices/common.service';

// @Component({
//   selector: 'app-qualityassurance',
//   templateUrl: './qualityassurance.component.html',
//   styleUrls: ['./qualityassurance.component.scss']
// })
// export class QualityassuranceComponent {
//   name:any;
//   email:any;
//   city:any;
//   address:any;
//   pickup:any;
//   quantity:any;

//   FormData(form:NgForm){
//     this.common.Formdata(form.value).then((res)=>{
//       console.log.apply(res);

//     });
//   }
//   constructor(private common:CommonService){

//   }

// }

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommonService } from 'src/app/myservices/common.service';

@Component({
  selector: 'app-qualityassurance',
  templateUrl: './qualityassurance.component.html',
  styleUrls: ['./qualityassurance.component.scss']
})
export class QualityassuranceComponent {
  name: any;
  email: any;
  city: any;
  address: any;
  pickup: any;
  quantity: any;
  showAlert = false;
  alertMessage: string = '';
  alertClass: string = '';

  constructor(private common: CommonService) {}

  FormData(form: NgForm) {
    this.common.Formdata(form.value).then(
      (res) => {
        console.log(res);
        this.showAlertMessage('success', 'Form submitted successfully.');
        form.reset();
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
  }
}
