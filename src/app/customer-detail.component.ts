import { Component, Input } from '@angular/core';
import { Customer } from './model/customer';

@Component({
  selector: 'customer-detail',
  template: `
    <div *ngIf="customer">
      <h2>{{customer.name}} details!</h2>
      <div>
        <label>Id: </label>{{customer.id}}
      </div>
      <div>
        <label>Name: </label>
        <input [(ngModel)]="customer.name" placeholder="name"/>
      </div>
      <div>
        <label>Status: </label>
        <input [(ngModel)]="customer.status" placeholder="status"/>
      </div>
      <div>
        <label>Phone number: </label>
        <input [(ngModel)]="customer.phone" placeholder="phone"/>
      </div>
      <div>
        <label>e-mail: </label>
        <input [(ngModel)]="customer.email" placeholder="email"/>
      </div>
    </div>
  `
})
export class CustomerDetailComponent {
  @Input() customer: Customer;
}
