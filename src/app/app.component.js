"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var note_service_1 = require("./service/note.service");
var customer_service_1 = require("./service/customer.service");
var AppComponent = (function () {
    function AppComponent(noteService, customerService) {
        this.noteService = noteService;
        this.customerService = customerService;
        this.customer_id = 1;
    }
    AppComponent.prototype.getNotes = function () {
        var _this = this;
        this.noteService.getNotes(this.customer_id).then(function (notes) { return _this.notes = notes; });
    };
    AppComponent.prototype.getCustomers = function () {
        var _this = this;
        this.customerService.getCustomers().then(function (customers) { return _this.customers = customers; });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getNotes();
        this.getCustomers();
    };
    AppComponent.prototype.onSelectNote = function (note) {
        this.selectedNote = note;
    };
    AppComponent.prototype.onSelectCustomer = function (customer) {
        this.selectedCustomer = customer;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <h1>{{title}}</h1>\n    <h2>My Customers</h2>\n    <ul class=\"heroes\">\n      <li class=\"li_header\">\n        <span class=\"badge\">Id</span>       Name           Status\n      </li>\n      <li *ngFor=\"let customer of customers\"\n        [class.selected]=\"customer === selectedCustomer\"\n        (click)=\"onSelectCustomer(customer)\">\n        <span class=\"badge\">{{customer.id}}</span>        {{customer.name}}         {{customer.status}}\n      </li>\n    </ul>\n    <customer-detail [customer]=\"selectedCustomer\"></customer-detail>\n    <br />\n    <br />\n    <h2>My Notes</h2>\n    <ul class=\"heroes\">\n      <li *ngFor=\"let note of notes\"\n        [class.selected]=\"note === selectedNote\"\n        (click)=\"onSelectNote(note)\">\n        <span class=\"badge\">{{note.id}}</span> {{note.comment}}\n      </li>\n    </ul>\n    <note-detail [note]=\"selectedNote\"></note-detail>\n  ",
        styles: ["\n    .selected {\n      background-color: #CFD8DC !important;\n      color: white;\n    }\n    .heroes {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 15em;\n    }\n    .heores li_header {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n    .heroes li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n    .heroes li.selected:hover {\n      background-color: #BBD8DC !important;\n      color: white;\n    }\n    .heroes li:hover {\n      color: #607D8B;\n      background-color: #DDD;\n      left: .1em;\n    }\n    .heroes .text {\n      position: relative;\n      top: -3px;\n    }\n    .heroes .badge {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0 0.7em;\n      background-color: #607D8B;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      height: 1.8em;\n      margin-right: .8em;\n      border-radius: 4px 0 0 4px;\n    }\n    .heroes .badge2 {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0 0.7em;\n      background-color: #92c3db;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      height: 1.8em;\n      margin-right: .8em;\n      border-radius: 4px 0 0 4px;\n    }\n  "],
        providers: [note_service_1.NoteService, customer_service_1.CustomerService]
    }),
    __metadata("design:paramtypes", [note_service_1.NoteService, customer_service_1.CustomerService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map