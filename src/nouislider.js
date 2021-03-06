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
var noUiSlider = require('nouislider');
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
function toValue(value) {
    if (value.length == 1) {
        return parseFloat(value[0]);
    }
    else if (value.length > 1) {
        return value.map(parseFloat);
    }
    else {
        return 0;
    }
}
exports.toValue = toValue;
var NOUISLIDER_CONTROL_VALUE_ACCESSOR = new core_1.Provider(common_1.NG_VALUE_ACCESSOR, {
    useExisting: core_1.forwardRef(function () { return Nouislider; }),
    multi: true
});
var Nouislider = (function () {
    function Nouislider(el) {
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.config = {};
        this.ngModelChange = new core_1.EventEmitter(true);
        this.el = el;
    }
    Nouislider.prototype.ngOnInit = function () {
        var _this = this;
        var inputsConfig = JSON.parse(JSON.stringify({
            behaviour: this.behaviour,
            connect: this.connect,
            limit: this.limit,
            start: this.ngModel,
            step: this.step,
            range: this.config.range || { min: this.min, max: this.max }
        }));
        this.slider = noUiSlider.create(this.el.nativeElement, Object.assign(this.config, inputsConfig));
        this.slider.on('set', function (value) {
            _this.writeValue(toValue(value));
        });
    };
    Nouislider.prototype.writeValue = function (value) {
        if (this.value == value || String(this.value) == String(value)) {
            return;
        }
        this.ngModelChange.emit(value);
        this.value = value;
        if (this.slider) {
            this.slider.set(value);
        }
    };
    Nouislider.prototype.registerOnChange = function (fn) {
        this.onTouched = fn;
    };
    Nouislider.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], Nouislider.prototype, "behaviour", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], Nouislider.prototype, "connect", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], Nouislider.prototype, "limit", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], Nouislider.prototype, "min", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], Nouislider.prototype, "max", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], Nouislider.prototype, "step", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Nouislider.prototype, "config", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Nouislider.prototype, "ngModel", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], Nouislider.prototype, "ngModelChange", void 0);
    Nouislider = __decorate([
        core_1.Directive({
            selector: '[nouislider]',
            providers: [NOUISLIDER_CONTROL_VALUE_ACCESSOR]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], Nouislider);
    return Nouislider;
}());
exports.Nouislider = Nouislider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm91aXNsaWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5vdWlzbGlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLElBQVksVUFBVSxXQUFNLFlBQVksQ0FBQyxDQUFBO0FBQ3pDLHFCQVNPLGVBQWUsQ0FBQyxDQUFBO0FBQ3ZCLHVCQUdPLGlCQUFpQixDQUFDLENBQUE7QUFFekIsaUJBQXdCLEtBQWU7SUFDckMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUIsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ04sTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7QUFDSCxDQUFDO0FBUmUsZUFBTyxVQVF0QixDQUFBO0FBRUQsSUFBTSxpQ0FBaUMsR0FBRyxJQUFJLGVBQVEsQ0FDcEQsMEJBQWlCLEVBQUU7SUFDakIsV0FBVyxFQUFFLGlCQUFVLENBQUMsY0FBTSxPQUFBLFVBQVUsRUFBVixDQUFVLENBQUM7SUFDekMsS0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDLENBQUM7QUFNTDtJQWlCRSxvQkFBbUIsRUFBYztRQWIxQixhQUFRLEdBQVEsUUFBUSxDQUFDLFNBQVMsQ0FBQztRQUNuQyxjQUFTLEdBQVEsUUFBUSxDQUFDLFNBQVMsQ0FBQztRQVFsQyxXQUFNLEdBQVEsRUFBRSxDQUFDO1FBRWhCLGtCQUFhLEdBQXNCLElBQUksbUJBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUdsRSxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFFRCw2QkFBUSxHQUFSO1FBQUEsaUJBa0JDO1FBakJDLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUMzQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3JCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDbkIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLEVBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUM7U0FDM0QsQ0FBQyxDQUFDLENBQUM7UUFFSixJQUFJLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQzdCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUNyQixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsWUFBWSxDQUFDLENBQ3pDLENBQUM7UUFFRixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsVUFBQyxLQUFVO1lBQy9CLEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sK0JBQVUsR0FBakIsVUFBa0IsS0FBVTtRQUMxQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0QsTUFBTSxDQUFDO1FBQ1QsQ0FBQztRQUVELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pCLENBQUM7SUFDSCxDQUFDO0lBRU0scUNBQWdCLEdBQXZCLFVBQXdCLEVBQWtCO1FBQ3hDLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFTSxzQ0FBaUIsR0FBeEIsVUFBeUIsRUFBWTtRQUNuQyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBcEREO1FBQUMsWUFBSyxFQUFFOztpREFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOzsrQ0FBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOzs2Q0FBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOzsyQ0FBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOzsyQ0FBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOzs0Q0FBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOzs4Q0FBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOzsrQ0FBQTtJQUNSO1FBQUMsYUFBTSxFQUFFOztxREFBQTtJQW5CWDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsY0FBYztZQUN4QixTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQztTQUMvQyxDQUFDOztrQkFBQTtJQTZERixpQkFBQztBQUFELENBQUMsQUE1REQsSUE0REM7QUE1RFksa0JBQVUsYUE0RHRCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBub1VpU2xpZGVyIGZyb20gJ25vdWlzbGlkZXInO1xuaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUHJvdmlkZXJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDb250cm9sVmFsdWVBY2Nlc3NvcixcbiAgTkdfVkFMVUVfQUNDRVNTT1Jcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuZXhwb3J0IGZ1bmN0aW9uIHRvVmFsdWUodmFsdWU6IHN0cmluZ1tdKTogbnVtYmVyfG51bWJlcltdIHtcbiAgaWYgKHZhbHVlLmxlbmd0aCA9PSAxKSB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWVbMF0pO1xuICB9IGVsc2UgaWYgKHZhbHVlLmxlbmd0aCA+IDEpIHtcbiAgICByZXR1cm4gdmFsdWUubWFwKHBhcnNlRmxvYXQpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAwO1xuICB9XG59XG5cbmNvbnN0IE5PVUlTTElERVJfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUiA9IG5ldyBQcm92aWRlcihcbiAgTkdfVkFMVUVfQUNDRVNTT1IsIHtcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOb3Vpc2xpZGVyKSxcbiAgICBtdWx0aTogdHJ1ZVxuICB9KTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25vdWlzbGlkZXJdJyxcbiAgcHJvdmlkZXJzOiBbTk9VSVNMSURFUl9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SXVxufSlcbmV4cG9ydCBjbGFzcyBOb3Vpc2xpZGVyIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCB7XG4gIHB1YmxpYyBlbDogRWxlbWVudFJlZjtcbiAgcHVibGljIHNsaWRlcjogYW55O1xuICBwdWJsaWMgdmFsdWU6IGFueTtcbiAgcHVibGljIG9uQ2hhbmdlOiBhbnkgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIHB1YmxpYyBvblRvdWNoZWQ6IGFueSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcblxuICBASW5wdXQoKSBiZWhhdmlvdXI6IHN0cmluZztcbiAgQElucHV0KCkgY29ubmVjdDogYm9vbGVhbjtcbiAgQElucHV0KCkgbGltaXQ6IG51bWJlcjtcbiAgQElucHV0KCkgbWluOiBudW1iZXI7XG4gIEBJbnB1dCgpIG1heDogbnVtYmVyO1xuICBASW5wdXQoKSBzdGVwOiBudW1iZXI7XG4gIEBJbnB1dCgpIGNvbmZpZzogYW55ID0ge307XG4gIEBJbnB1dCgpIG5nTW9kZWw6IG51bWJlciB8IG51bWJlcltdO1xuICBAT3V0cHV0KCkgbmdNb2RlbENoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKHRydWUpO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihlbDogRWxlbWVudFJlZikge1xuICAgIHRoaXMuZWwgPSBlbDtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGxldCBpbnB1dHNDb25maWcgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGJlaGF2aW91cjogdGhpcy5iZWhhdmlvdXIsXG4gICAgICBjb25uZWN0OiB0aGlzLmNvbm5lY3QsXG4gICAgICBsaW1pdDogdGhpcy5saW1pdCxcbiAgICAgIHN0YXJ0OiB0aGlzLm5nTW9kZWwsXG4gICAgICBzdGVwOiB0aGlzLnN0ZXAsXG4gICAgICByYW5nZTogdGhpcy5jb25maWcucmFuZ2UgfHwge21pbjogdGhpcy5taW4sIG1heDogdGhpcy5tYXh9XG4gICAgfSkpO1xuXG4gICAgdGhpcy5zbGlkZXIgPSBub1VpU2xpZGVyLmNyZWF0ZShcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudCxcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5jb25maWcsIGlucHV0c0NvbmZpZylcbiAgICApO1xuXG4gICAgdGhpcy5zbGlkZXIub24oJ3NldCcsICh2YWx1ZTogYW55KSA9PiB7XG4gICAgICB0aGlzLndyaXRlVmFsdWUodG9WYWx1ZSh2YWx1ZSkpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIGlmICh0aGlzLnZhbHVlID09IHZhbHVlIHx8IFN0cmluZyh0aGlzLnZhbHVlKSA9PSBTdHJpbmcodmFsdWUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5uZ01vZGVsQ2hhbmdlLmVtaXQodmFsdWUpO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICBpZiAodGhpcy5zbGlkZXIpIHtcbiAgICAgIHRoaXMuc2xpZGVyLnNldCh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBhbnkpID0+IHt9KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHB1YmxpYyByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG59XG4iXX0=