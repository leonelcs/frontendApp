import { Component, OnInit } from '@angular/core';
import { NgTableComponent, NgTableFilteringDirective, NgTablePagingDirective, NgTableSortingDirective } from 'ng2-table/ng2-table';

import { Note } from './model/note';
import { Customer } from './model/customer';
import { NoteService } from './service/note.service';
import { CustomerService } from './service/customer.service';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>My Customers</h2>
    <ul class="heroes">
      <li class="li_header">
        <span class="badge">Id</span>       Name           Status
      </li>
      <li *ngFor="let customer of customers"
        [class.selected]="customer === selectedCustomer"
        (click)="onSelectCustomer(customer)">
        <span class="badge">{{customer.id}}</span>        {{customer.name}}         {{customer.status}}
      </li>
    </ul>
    <customer-detail [customer]="selectedCustomer"></customer-detail>
    <br />
    <br />
    <h2>My Notes</h2>
    <ul class="heroes">
      <li *ngFor="let note of notes"
        [class.selected]="note === selectedNote"
        (click)="onSelectNote(note)">
        <span class="badge">{{note.id}}</span> {{note.comment}}
      </li>
    </ul>
    <note-detail [note]="selectedNote"></note-detail>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heores li_header {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
    .heroes .badge2 {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #92c3db;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `],
  providers: [NoteService, CustomerService]
})
export class AppComponent implements OnInit {
  title: "Teste Note";
  notes: Note[];
  customers: Customer[];
  selectedCustomer: Customer;
  selectedNote: Note;
  customer_id = 1;


  constructor(private noteService: NoteService, private customerService: CustomerService) {
  }

  getNotes(): void {
    this.noteService.getNotes(this.customer_id).then(notes => this.notes = notes );
    
  }

  getCustomers(): void {
    this.customerService.getCustomers().then(customers => this.customers = customers );
    
  }

  ngOnInit(): void {
    this.getNotes();
    this.getCustomers();
  }

  onSelectNote(note: Note): void {
    this.selectedNote = note;
  }

  onSelectCustomer(customer: Customer): void {
    this.selectedCustomer = customer;
  }

}
