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
var note_1 = require("./model/note");
var NoteDetailComponent = (function () {
    function NoteDetailComponent() {
    }
    return NoteDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", note_1.Note)
], NoteDetailComponent.prototype, "note", void 0);
NoteDetailComponent = __decorate([
    core_1.Component({
        selector: 'note-detail',
        template: "\n    <div *ngIf=\"note\">\n      <h2>{{note.comment}} details!</h2>\n      <div>\n        <label>id: </label>{{note.id}}\n      </div>\n      <div>\n        <label>name: </label>\n        <input [(ngModel)]=\"note.comment\" placeholder=\"comment\"/>\n      </div>\n    </div>\n  "
    })
], NoteDetailComponent);
exports.NoteDetailComponent = NoteDetailComponent;
//# sourceMappingURL=note-detail.component.js.map