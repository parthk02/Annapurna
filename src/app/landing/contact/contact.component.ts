// import { Component } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';
// import { CommonService } from 'src/app/myservices/common.service';

// @Component({
//   selector: 'app-contact',
//   templateUrl: './contact.component.html',
//   styleUrls: ['./contact.component.scss']
// })
// export class ContactComponent {
//   name:any;
//   email:any;
//   city:any;
//   address:any;
//   mobile:any;
//   message:any;

//   contactus(form:NgForm){
//     this.common.contactus(form.value).then((res)=>{
//       console.log.apply(res);

//     });
//   }
//   constructor(private common:CommonService,private http: HttpClient){

//   }

  
// }
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonService } from 'src/app/myservices/common.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  name: any;
  email: any;
  city: any;
  address: any;
  mobile: any;
  message: any;
  showAlert = false;
  alertMessage: string = ''; // Initialize with an empty string
  alertClass: string = ''; // Initialize with an empty string

  constructor(private common: CommonService, private http: HttpClient) {}

  contactus(form: NgForm) {
    this.common.contactus(form.value).then(
      (res) => {
        console.log(res);
        this.showAlertMessage('success', 'Form submitted successfully.');
        form.reset(); // Reset the form after successful submission
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
