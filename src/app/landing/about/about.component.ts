import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  cardNumber:any;
  constructor( private router: Router) {}

  handleClick(cardNumber: number) {
    switch (cardNumber) {
      case 1:
        this.router.navigate(['/shop']);
        break;
      case 2:
        this.router.navigate(['/faqs']);
        break;
      case 3:
        this.router.navigate(['/product']);
        break;
      case 4:
          this.router.navigate(['/home']);
          break;
      default:
        break;
    }
  }
}