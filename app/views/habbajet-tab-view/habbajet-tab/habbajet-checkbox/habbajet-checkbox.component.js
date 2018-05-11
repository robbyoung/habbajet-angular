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
var habbajet_service_1 = require("../../../../services/habbajet.service");
var HabbajetCheckboxComponent = /** @class */ (function () {
    function HabbajetCheckboxComponent(habbajetService) {
        this.habbajetService = habbajetService;
    }
    HabbajetCheckboxComponent.prototype.ngOnInit = function () {
        this.checkboxes = this.habbajetService.getHabbajetCheckboxes(this.habbajetIndex);
        this.setCurrentDay();
    };
    HabbajetCheckboxComponent.prototype.onCheckboxTap = function (day) {
        console.log(day);
    };
    HabbajetCheckboxComponent.prototype.setCurrentDay = function () {
        this.currentDay = "Current Day";
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], HabbajetCheckboxComponent.prototype, "habbajetIndex", void 0);
    HabbajetCheckboxComponent = __decorate([
        core_1.Component({
            selector: "habbajet-checkbox",
            templateUrl: "views/habbajet-tab-view/habbajet-tab/habbajet-checkbox/habbajet-checkbox.html",
            styleUrls: ["views/habbajet-tab-view/habbajet-tab/habbajet-checkbox/habbajet-checkbox.css"]
        }),
        __metadata("design:paramtypes", [habbajet_service_1.HabbajetService])
    ], HabbajetCheckboxComponent);
    return HabbajetCheckboxComponent;
}());
exports.HabbajetCheckboxComponent = HabbajetCheckboxComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFiYmFqZXQtY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGFiYmFqZXQtY2hlY2tib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQWlEO0FBRWpELDBFQUF3RTtBQVN4RTtJQUtJLG1DQUFvQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7SUFBRyxDQUFDO0lBRXhELDRDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2pGLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsaURBQWEsR0FBYixVQUFjLEdBQVc7UUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBRUQsaURBQWEsR0FBYjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsYUFBYSxDQUFDO0lBQ3BDLENBQUM7SUFqQlE7UUFBUixZQUFLLEVBQUU7O29FQUF1QjtJQUR0Qix5QkFBeUI7UUFOckMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsV0FBVyxFQUFFLCtFQUErRTtZQUM1RixTQUFTLEVBQUUsQ0FBQyw4RUFBOEUsQ0FBQztTQUM5RixDQUFDO3lDQU91QyxrQ0FBZTtPQUwzQyx5QkFBeUIsQ0FtQnJDO0lBQUQsZ0NBQUM7Q0FBQSxBQW5CRCxJQW1CQztBQW5CWSw4REFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBIYWJiYWpldFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2VydmljZXMvaGFiYmFqZXQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBIYWJiYWpldENoZWNrYm94LCBEYXkgfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2VydmljZXMvY2hlY2tib3guc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJoYWJiYWpldC1jaGVja2JveFwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwidmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvaGFiYmFqZXQtdGFiL2hhYmJhamV0LWNoZWNrYm94L2hhYmJhamV0LWNoZWNrYm94Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1widmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvaGFiYmFqZXQtdGFiL2hhYmJhamV0LWNoZWNrYm94L2hhYmJhamV0LWNoZWNrYm94LmNzc1wiXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEhhYmJhamV0Q2hlY2tib3hDb21wb25lbnQge1xyXG4gICAgQElucHV0KCkgaGFiYmFqZXRJbmRleDogbnVtYmVyO1xyXG4gICAgcHVibGljIGNoZWNrYm94ZXM6IEhhYmJhamV0Q2hlY2tib3hbXTtcclxuICAgIHB1YmxpYyBjdXJyZW50RGF5OiBzdHJpbmc7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaGFiYmFqZXRTZXJ2aWNlOiBIYWJiYWpldFNlcnZpY2UpIHt9XHJcblxyXG4gICAgbmdPbkluaXQoKXtcclxuICAgICAgICB0aGlzLmNoZWNrYm94ZXMgPSB0aGlzLmhhYmJhamV0U2VydmljZS5nZXRIYWJiYWpldENoZWNrYm94ZXModGhpcy5oYWJiYWpldEluZGV4KTtcclxuICAgICAgICB0aGlzLnNldEN1cnJlbnREYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNoZWNrYm94VGFwKGRheTogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF5KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRDdXJyZW50RGF5KCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudERheSA9IFwiQ3VycmVudCBEYXlcIjtcclxuICAgIH1cclxufSJdfQ==