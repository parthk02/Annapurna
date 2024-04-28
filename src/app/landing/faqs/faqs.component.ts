import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommonService } from 'src/app/myservices/common.service';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent {
  time: any;
  showAlert = false;
  alertMessage: string = '';
  alertClass: string = '';
  constructor(private common: CommonService){}
  pickup(pick: NgForm) {
    this.common.pickup(pick.value).then(
      (res) => {
        console.log(res);
        this.showAlertMessage('success', 'will on time.');
        pick.reset();
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
