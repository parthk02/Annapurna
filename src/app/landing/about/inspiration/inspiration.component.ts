// import { Component } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { CommonService } from 'src/app/myservices/common.service';

// @Component({
//   selector: 'app-inspiration',
//   templateUrl: './inspiration.component.html',
//   styleUrls: ['./inspiration.component.scss']
// })
// export class InspirationComponent {
//   name:any;
//   email:any;
//   city:any;
//   address:any;
//   event_end_at:any;
//   food:any;

//   getformData(form:NgForm){
//     this.common.PostFormData(form.value).then((res)=>{
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
  selector: 'app-inspiration',
  templateUrl: './inspiration.component.html',
  styleUrls: ['./inspiration.component.scss']
})
export class InspirationComponent {
  name: any;
  email: any;
  city: any;
  address: any;
  event_end_at: any;
  food: any;
  showAlert = false;
  alertMessage: string = '';
  alertClass: string = '';

  constructor(private common: CommonService) {}

  getformData(formData: NgForm) {
    this.common.PostFormData(formData.value).then(
      (res) => {
        console.log(res);
        this.showAlertMessage('success', 'Form submitted successfully.');
        formData.reset();
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
