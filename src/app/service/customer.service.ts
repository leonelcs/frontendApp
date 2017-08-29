import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Customer } from '../model/customer';

@Injectable()
export class CustomerService {

    private baseURL = 'http://localhost:8080';
    private appCustomers = '/app/customers'

  
    constructor(private http: Http) { }

    getCustomers(): Promise<Customer[]> {
      return this.http.get(this.baseURL+this.appCustomers)
                .toPromise()
                .then(response => response.json() as Customer[])
                .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
    }


}
