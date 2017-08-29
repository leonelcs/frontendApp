import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Note } from '../model/note';

@Injectable()
export class NoteService {

    private baseURL = 'http://localhost:8080';
    private appCustomers = '/app/customers'
    private notesURL = '/notes';  // URL to web api
  
    constructor(private http: Http) { }

    getNotes(customer_id: number): Promise<Note[]> {
      return this.http.get(this.baseURL+this.appCustomers+'/'+customer_id+this.notesURL)
                .toPromise()
                .then(response => response.json() as Note[])
                .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
    }


}
