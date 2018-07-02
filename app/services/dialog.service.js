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
var frame = require("ui/frame");
var stack_layout_1 = require("ui/layouts/stack-layout");
var DialogService = /** @class */ (function () {
    function DialogService() {
        var _this = this;
        setTimeout(function () {
            _this.rootView = frame.topmost().currentPage.getViewById('RootView');
            console.log(_this.rootView);
        }, 1000);
    }
    DialogService.prototype.newPurchaseDialog = function () {
        var purchaseDialog = new stack_layout_1.StackLayout();
        purchaseDialog.width = 100;
        purchaseDialog.height = 100;
        purchaseDialog.backgroundColor = '#999999';
        purchaseDialog.className = 'modal';
        // purchaseDialog.
        this.rootView.addChild(purchaseDialog);
        this.rootView.eachChild(function (c) {
            console.log(c);
            return true;
        });
    };
    DialogService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], DialogService);
    return DialogService;
}());
exports.DialogService = DialogService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWFsb2cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEyQztBQUMzQyxnQ0FBa0M7QUFFbEMsd0RBQXNEO0FBSXREO0lBR0k7UUFBQSxpQkFLQztRQUpHLFVBQVUsQ0FBQztZQUNQLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDcEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0IsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUVNLHlDQUFpQixHQUF4QjtRQUNJLElBQU0sY0FBYyxHQUFHLElBQUksMEJBQVcsRUFBRSxDQUFDO1FBQ3pDLGNBQWMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQzNCLGNBQWMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQzVCLGNBQWMsQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO1FBQzNDLGNBQWMsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO1FBQ25DLGtCQUFrQjtRQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFDLENBQUM7WUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBdEJRLGFBQWE7UUFEekIsaUJBQVUsRUFBRTs7T0FDQSxhQUFhLENBdUJ6QjtJQUFELG9CQUFDO0NBQUEsQUF2QkQsSUF1QkM7QUF2Qlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgZnJhbWUgZnJvbSAndWkvZnJhbWUnO1xyXG5pbXBvcnQgeyBOZXdQdXJjaGFzZU1vZGFsQ29tcG9uZW50IH0gZnJvbSBcIi4uL3ZpZXdzL21vZGFscy9uZXctcHVyY2hhc2UtbW9kYWwvbmV3LXB1cmNoYXNlLW1vZGFsLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gXCJ1aS9sYXlvdXRzL3N0YWNrLWxheW91dFwiO1xyXG5pbXBvcnQgeyBUZXh0QmFzZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RleHQtYmFzZS90ZXh0LWJhc2VcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIERpYWxvZ1NlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSByb290VmlldzogU3RhY2tMYXlvdXQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucm9vdFZpZXcgPSBmcmFtZS50b3Btb3N0KCkuY3VycmVudFBhZ2UuZ2V0Vmlld0J5SWQoJ1Jvb3RWaWV3Jyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucm9vdFZpZXcpO1xyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZXdQdXJjaGFzZURpYWxvZygpIHtcclxuICAgICAgICBjb25zdCBwdXJjaGFzZURpYWxvZyA9IG5ldyBTdGFja0xheW91dCgpO1xyXG4gICAgICAgIHB1cmNoYXNlRGlhbG9nLndpZHRoID0gMTAwO1xyXG4gICAgICAgIHB1cmNoYXNlRGlhbG9nLmhlaWdodCA9IDEwMDtcclxuICAgICAgICBwdXJjaGFzZURpYWxvZy5iYWNrZ3JvdW5kQ29sb3IgPSAnIzk5OTk5OSc7XHJcbiAgICAgICAgcHVyY2hhc2VEaWFsb2cuY2xhc3NOYW1lID0gJ21vZGFsJztcclxuICAgICAgICAvLyBwdXJjaGFzZURpYWxvZy5cclxuICAgICAgICB0aGlzLnJvb3RWaWV3LmFkZENoaWxkKHB1cmNoYXNlRGlhbG9nKTtcclxuICAgICAgICB0aGlzLnJvb3RWaWV3LmVhY2hDaGlsZCgoYykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl19