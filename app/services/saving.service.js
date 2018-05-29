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
var saveObject = require("application-settings");
var _ = require("lodash");
var checkbox_service_1 = require("./checkbox.service");
var SavingService = /** @class */ (function () {
    function SavingService(checkboxService) {
        this.checkboxService = checkboxService;
    }
    SavingService.prototype.saveHabbajetList = function (habbajetList) {
        var _this = this;
        _.each(habbajetList, function (habbajet, index) {
            if (habbajet !== undefined) {
                _this.saveHabbajet(habbajet.name, habbajet.info, habbajet.image, habbajet.checkboxes, index);
            }
        });
    };
    SavingService.prototype.saveHabbajet = function (name, info, image, checkboxes, index) {
        saveObject.setString("hName" + index, name);
        saveObject.setNumber("hState" + index, image.state);
        saveObject.setString("hColor" + index, image.color);
        this.saveHabbajetInfo(info, index);
        this.saveHabbajetCheckboxes(checkboxes, index);
    };
    SavingService.prototype.saveHabbajetInfo = function (info, index) {
        saveObject.setNumber("hStreak" + index, info.streak);
        saveObject.setNumber("hValue" + index, info.value);
        saveObject.setNumber("hFactor" + index, info.factor);
        saveObject.setNumber("hSlack" + index, info.slack);
    };
    SavingService.prototype.saveHabbajetCheckboxes = function (checkboxes, index) {
        _.each(checkboxes, function (c, i) {
            saveObject.setNumber("hCheckbox" + i + index, c.checkmark);
        });
    };
    SavingService.prototype.loadHabbajetList = function (habbajetService) {
        var index = 0;
        while (saveObject.hasKey("hName" + index)) {
            var name_1 = saveObject.getString("hName" + index);
            var state = saveObject.getNumber("hState" + index);
            var color = saveObject.getString("hColor" + index);
            var streak = saveObject.getNumber("hStreak" + index);
            var value = saveObject.getNumber("hValue" + index);
            var factor = saveObject.getNumber("hFactor" + index);
            var slack = saveObject.getNumber("hSlack" + index);
            var checkboxes = this.checkboxService.getCurrentWeek();
            _.each(checkboxes, function (c, i) {
                c.checkmark = saveObject.getNumber("hCheckbox" + i + index);
            });
            habbajetService.newHabbajet(name_1, state, value, factor, slack, color, streak, checkboxes);
            index++;
        }
    };
    SavingService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [checkbox_service_1.CheckboxService])
    ], SavingService);
    return SavingService;
}());
exports.SavingService = SavingService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2aW5nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzYXZpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEyQztBQUMzQyxpREFBbUQ7QUFFbkQsMEJBQTRCO0FBRTVCLHVEQUF1RTtBQUd2RTtJQUNJLHVCQUFvQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7SUFBRyxDQUFDO0lBRWpELHdDQUFnQixHQUF2QixVQUF3QixZQUFtQjtRQUEzQyxpQkFNQztRQUxHLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLFVBQUMsUUFBUSxFQUFFLEtBQUs7WUFDakMsRUFBRSxDQUFBLENBQUMsUUFBUSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hCLEtBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNoRyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sb0NBQVksR0FBbkIsVUFBb0IsSUFBWSxFQUFFLElBQWtCLEVBQUUsS0FBaUIsRUFBRSxVQUE4QixFQUFFLEtBQWE7UUFDbEgsVUFBVSxDQUFDLFNBQVMsQ0FBQyxVQUFRLEtBQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1QyxVQUFVLENBQUMsU0FBUyxDQUFDLFdBQVMsS0FBTyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwRCxVQUFVLENBQUMsU0FBUyxDQUFDLFdBQVMsS0FBTyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVPLHdDQUFnQixHQUF4QixVQUF5QixJQUFrQixFQUFFLEtBQWE7UUFDdEQsVUFBVSxDQUFDLFNBQVMsQ0FBQyxZQUFVLEtBQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckQsVUFBVSxDQUFDLFNBQVMsQ0FBQyxXQUFTLEtBQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkQsVUFBVSxDQUFDLFNBQVMsQ0FBQyxZQUFVLEtBQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckQsVUFBVSxDQUFDLFNBQVMsQ0FBQyxXQUFTLEtBQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVPLDhDQUFzQixHQUE5QixVQUErQixVQUE4QixFQUFFLEtBQWE7UUFDeEUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsVUFBQyxDQUFDLEVBQUUsQ0FBQztZQUNwQixVQUFVLENBQUMsU0FBUyxDQUFDLGNBQVksQ0FBQyxHQUFHLEtBQU8sRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDL0QsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sd0NBQWdCLEdBQXZCLFVBQXdCLGVBQWdDO1FBQ3BELElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNkLE9BQU0sVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFRLEtBQU8sQ0FBQyxFQUFFLENBQUM7WUFDdkMsSUFBTSxNQUFJLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxVQUFRLEtBQU8sQ0FBQyxDQUFDO1lBQ25ELElBQU0sS0FBSyxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsV0FBUyxLQUFPLENBQUMsQ0FBQztZQUNyRCxJQUFNLEtBQUssR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLFdBQVMsS0FBTyxDQUFDLENBQUM7WUFDckQsSUFBTSxNQUFNLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxZQUFVLEtBQU8sQ0FBQyxDQUFDO1lBQ3ZELElBQU0sS0FBSyxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsV0FBUyxLQUFPLENBQUMsQ0FBQztZQUNyRCxJQUFNLE1BQU0sR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLFlBQVUsS0FBTyxDQUFDLENBQUM7WUFDdkQsSUFBTSxLQUFLLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxXQUFTLEtBQU8sQ0FBQyxDQUFDO1lBRXJELElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDekQsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsVUFBQyxDQUFDLEVBQUUsQ0FBQztnQkFDcEIsQ0FBQyxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLGNBQVksQ0FBQyxHQUFHLEtBQU8sQ0FBQyxDQUFDO1lBQ2hFLENBQUMsQ0FBQyxDQUFDO1lBRUgsZUFBZSxDQUFDLFdBQVcsQ0FBQyxNQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFFMUYsS0FBSyxFQUFFLENBQUM7UUFDWixDQUFDO0lBQ0wsQ0FBQztJQXBEUSxhQUFhO1FBRHpCLGlCQUFVLEVBQUU7eUNBRTRCLGtDQUFlO09BRDNDLGFBQWEsQ0FzRHpCO0lBQUQsb0JBQUM7Q0FBQSxBQXRERCxJQXNEQztBQXREWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgKiBhcyBzYXZlT2JqZWN0IGZyb20gJ2FwcGxpY2F0aW9uLXNldHRpbmdzJztcclxuaW1wb3J0IHsgSGFiYmFqZXRTZXJ2aWNlLCBIYWJiYWpldEluZm8gfSBmcm9tIFwiLi9oYWJiYWpldC5zZXJ2aWNlXCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgSW1hZ2VTdGF0ZSB9IGZyb20gXCIuL2ltYWdlcy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEhhYmJhamV0Q2hlY2tib3gsIENoZWNrYm94U2VydmljZSB9IGZyb20gXCIuL2NoZWNrYm94LnNlcnZpY2VcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNhdmluZ1NlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjaGVja2JveFNlcnZpY2U6IENoZWNrYm94U2VydmljZSkge31cclxuXHJcbiAgICBwdWJsaWMgc2F2ZUhhYmJhamV0TGlzdChoYWJiYWpldExpc3Q6IGFueVtdKSB7XHJcbiAgICAgICAgXy5lYWNoKGhhYmJhamV0TGlzdCwgKGhhYmJhamV0LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBpZihoYWJiYWpldCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNhdmVIYWJiYWpldChoYWJiYWpldC5uYW1lLCBoYWJiYWpldC5pbmZvLCBoYWJiYWpldC5pbWFnZSwgaGFiYmFqZXQuY2hlY2tib3hlcywgaW5kZXgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNhdmVIYWJiYWpldChuYW1lOiBzdHJpbmcsIGluZm86IEhhYmJhamV0SW5mbywgaW1hZ2U6IEltYWdlU3RhdGUsIGNoZWNrYm94ZXM6IEhhYmJhamV0Q2hlY2tib3hbXSwgaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIHNhdmVPYmplY3Quc2V0U3RyaW5nKGBoTmFtZSR7aW5kZXh9YCwgbmFtZSk7XHJcbiAgICAgICAgc2F2ZU9iamVjdC5zZXROdW1iZXIoYGhTdGF0ZSR7aW5kZXh9YCwgaW1hZ2Uuc3RhdGUpO1xyXG4gICAgICAgIHNhdmVPYmplY3Quc2V0U3RyaW5nKGBoQ29sb3Ike2luZGV4fWAsIGltYWdlLmNvbG9yKTtcclxuICAgICAgICB0aGlzLnNhdmVIYWJiYWpldEluZm8oaW5mbywgaW5kZXgpO1xyXG4gICAgICAgIHRoaXMuc2F2ZUhhYmJhamV0Q2hlY2tib3hlcyhjaGVja2JveGVzLCBpbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzYXZlSGFiYmFqZXRJbmZvKGluZm86IEhhYmJhamV0SW5mbywgaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIHNhdmVPYmplY3Quc2V0TnVtYmVyKGBoU3RyZWFrJHtpbmRleH1gLCBpbmZvLnN0cmVhayk7XHJcbiAgICAgICAgc2F2ZU9iamVjdC5zZXROdW1iZXIoYGhWYWx1ZSR7aW5kZXh9YCwgaW5mby52YWx1ZSk7XHJcbiAgICAgICAgc2F2ZU9iamVjdC5zZXROdW1iZXIoYGhGYWN0b3Ike2luZGV4fWAsIGluZm8uZmFjdG9yKTtcclxuICAgICAgICBzYXZlT2JqZWN0LnNldE51bWJlcihgaFNsYWNrJHtpbmRleH1gLCBpbmZvLnNsYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNhdmVIYWJiYWpldENoZWNrYm94ZXMoY2hlY2tib3hlczogSGFiYmFqZXRDaGVja2JveFtdLCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgXy5lYWNoKGNoZWNrYm94ZXMsIChjLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIHNhdmVPYmplY3Quc2V0TnVtYmVyKGBoQ2hlY2tib3gke2l9JHtpbmRleH1gLCBjLmNoZWNrbWFyayk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvYWRIYWJiYWpldExpc3QoaGFiYmFqZXRTZXJ2aWNlOiBIYWJiYWpldFNlcnZpY2UpIHtcclxuICAgICAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgICAgIHdoaWxlKHNhdmVPYmplY3QuaGFzS2V5KGBoTmFtZSR7aW5kZXh9YCkpIHtcclxuICAgICAgICAgICAgY29uc3QgbmFtZSA9IHNhdmVPYmplY3QuZ2V0U3RyaW5nKGBoTmFtZSR7aW5kZXh9YCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gc2F2ZU9iamVjdC5nZXROdW1iZXIoYGhTdGF0ZSR7aW5kZXh9YCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gc2F2ZU9iamVjdC5nZXRTdHJpbmcoYGhDb2xvciR7aW5kZXh9YCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0cmVhayA9IHNhdmVPYmplY3QuZ2V0TnVtYmVyKGBoU3RyZWFrJHtpbmRleH1gKTtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBzYXZlT2JqZWN0LmdldE51bWJlcihgaFZhbHVlJHtpbmRleH1gKTtcclxuICAgICAgICAgICAgY29uc3QgZmFjdG9yID0gc2F2ZU9iamVjdC5nZXROdW1iZXIoYGhGYWN0b3Ike2luZGV4fWApO1xyXG4gICAgICAgICAgICBjb25zdCBzbGFjayA9IHNhdmVPYmplY3QuZ2V0TnVtYmVyKGBoU2xhY2ske2luZGV4fWApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY2hlY2tib3hlcyA9IHRoaXMuY2hlY2tib3hTZXJ2aWNlLmdldEN1cnJlbnRXZWVrKCk7XHJcbiAgICAgICAgICAgIF8uZWFjaChjaGVja2JveGVzLCAoYywgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYy5jaGVja21hcmsgPSBzYXZlT2JqZWN0LmdldE51bWJlcihgaENoZWNrYm94JHtpfSR7aW5kZXh9YCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaGFiYmFqZXRTZXJ2aWNlLm5ld0hhYmJhamV0KG5hbWUsIHN0YXRlLCB2YWx1ZSwgZmFjdG9yLCBzbGFjaywgY29sb3IsIHN0cmVhaywgY2hlY2tib3hlcyk7XHJcblxyXG4gICAgICAgICAgICBpbmRleCsrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iXX0=