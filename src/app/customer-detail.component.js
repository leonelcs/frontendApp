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
var customer_1 = require("./model/customer");
var CustomerDetailComponent = (function () {
    function CustomerDetailComponent() {
    }
    return CustomerDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", customer_1.Customer)
], CustomerDetailComponent.prototype, "customer", void 0);
CustomerDetailComponent = __decorate([
    core_1.Component({
        selector: 'customer-detail',
        template: "\n    <div *ngIf=\"customer\">\n      <h2>{{customer.name}} details!</h2>\n      <div>\n        <label>Id: </label>{{customer.id}}\n      </div>\n      <div>\n        <label>Name: </label>\n        <input [(ngModel)]=\"customer.name\" placeholder=\"name\"/>\n      </div>\n      <div>\n        <label>Status: </label>\n        <input [(ngModel)]=\"customer.status\" placeholder=\"status\"/>\n      </div>\n      <div>\n        <label>Phone number: </label>\n        <input [(ngModel)]=\"customer.phone\" placeholder=\"phone\"/>\n      </div>\n      <div>\n        <label>e-mail: </label>\n        <input [(ngModel)]=\"customer.email\" placeholder=\"email\"/>\n      </div>\n    </div>\n  "
    })
], CustomerDetailComponent);
exports.CustomerDetailComponent = CustomerDetailComponent;
//# sourceMappingURL=customer-detail.component.js.map