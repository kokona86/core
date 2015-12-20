var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var AssetEvent = require("awayjs-core/lib/events/AssetEvent");
var EventDispatcher = require("awayjs-core/lib/events/EventDispatcher");
var EDTest = (function (_super) {
    __extends(EDTest, _super);
    function EDTest() {
        var _this = this;
        _super.call(this);
        var onCompleteDelegate = function (event) { return _this.onComplete(event); };
        console.log('Before addEventListener: ', this.hasEventListener(AssetEvent.ASSET_COMPLETE));
        this.addEventListener(AssetEvent.ASSET_COMPLETE, onCompleteDelegate);
        console.log('After addEventListener: ', this.hasEventListener(AssetEvent.ASSET_COMPLETE));
        this.removeEventListener(AssetEvent.ASSET_COMPLETE, onCompleteDelegate);
        console.log('After removeEventListener: ', this.hasEventListener(AssetEvent.ASSET_COMPLETE));
    }
    EDTest.prototype.onComplete = function (event) {
    };
    return EDTest;
})(EventDispatcher);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50cy9FRFRlc3QudHMiXSwibmFtZXMiOlsiRURUZXN0IiwiRURUZXN0LmNvbnN0cnVjdG9yIiwiRURUZXN0Lm9uQ29tcGxldGUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQU8sVUFBVSxXQUFjLG1DQUFtQyxDQUFDLENBQUM7QUFDcEUsSUFBTyxlQUFlLFdBQWEsd0NBQXdDLENBQUMsQ0FBQztBQUU3RSxJQUFNLE1BQU07SUFBU0EsVUFBZkEsTUFBTUEsVUFBd0JBO0lBRW5DQSxTQUZLQSxNQUFNQTtRQUFaQyxpQkFtQkNBO1FBZkNBLGlCQUFPQSxDQUFDQTtRQUVSQSxJQUFJQSxrQkFBa0JBLEdBQThCQSxVQUFDQSxLQUFnQkEsSUFBS0EsT0FBQUEsS0FBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsRUFBdEJBLENBQXNCQSxDQUFDQTtRQUVqR0EsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsMkJBQTJCQSxFQUFFQSxJQUFJQSxDQUFDQSxnQkFBZ0JBLENBQUNBLFVBQVVBLENBQUNBLGNBQWNBLENBQUNBLENBQUNBLENBQUNBO1FBQzNGQSxJQUFJQSxDQUFDQSxnQkFBZ0JBLENBQUNBLFVBQVVBLENBQUNBLGNBQWNBLEVBQUVBLGtCQUFrQkEsQ0FBQ0EsQ0FBQ0E7UUFDckVBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLDBCQUEwQkEsRUFBRUEsSUFBSUEsQ0FBQ0EsZ0JBQWdCQSxDQUFDQSxVQUFVQSxDQUFDQSxjQUFjQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUMxRkEsSUFBSUEsQ0FBQ0EsbUJBQW1CQSxDQUFDQSxVQUFVQSxDQUFDQSxjQUFjQSxFQUFFQSxrQkFBa0JBLENBQUNBLENBQUNBO1FBQ3hFQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSw2QkFBNkJBLEVBQUVBLElBQUlBLENBQUNBLGdCQUFnQkEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDOUZBLENBQUNBO0lBRU1ELDJCQUFVQSxHQUFqQkEsVUFBa0JBLEtBQWdCQTtJQUdsQ0UsQ0FBQ0E7SUFDRkYsYUFBQ0E7QUFBREEsQ0FuQkEsQUFtQkNBLEVBbkJvQixlQUFlLEVBbUJuQyIsImZpbGUiOiJldmVudHMvRURUZXN0LmpzIiwic291cmNlUm9vdCI6Ii4vdGVzdHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXNzZXRFdmVudFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL2V2ZW50cy9Bc3NldEV2ZW50XCIpO1xuaW1wb3J0IEV2ZW50RGlzcGF0Y2hlclx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9ldmVudHMvRXZlbnREaXNwYXRjaGVyXCIpO1xuXG5jbGFzcyBFRFRlc3QgZXh0ZW5kcyBFdmVudERpc3BhdGNoZXJcbntcblx0Y29uc3RydWN0b3IoKVxuXHR7XG5cdFx0c3VwZXIoKTtcblxuXHRcdHZhciBvbkNvbXBsZXRlRGVsZWdhdGU6KGV2ZW50OkFzc2V0RXZlbnQpID0+IHZvaWQgPSAoZXZlbnQ6QXNzZXRFdmVudCkgPT4gdGhpcy5vbkNvbXBsZXRlKGV2ZW50KTtcblxuXHRcdGNvbnNvbGUubG9nKCdCZWZvcmUgYWRkRXZlbnRMaXN0ZW5lcjogJywgdGhpcy5oYXNFdmVudExpc3RlbmVyKEFzc2V0RXZlbnQuQVNTRVRfQ09NUExFVEUpKTtcblx0XHR0aGlzLmFkZEV2ZW50TGlzdGVuZXIoQXNzZXRFdmVudC5BU1NFVF9DT01QTEVURSwgb25Db21wbGV0ZURlbGVnYXRlKTtcblx0XHRjb25zb2xlLmxvZygnQWZ0ZXIgYWRkRXZlbnRMaXN0ZW5lcjogJywgdGhpcy5oYXNFdmVudExpc3RlbmVyKEFzc2V0RXZlbnQuQVNTRVRfQ09NUExFVEUpKTtcblx0XHR0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoQXNzZXRFdmVudC5BU1NFVF9DT01QTEVURSwgb25Db21wbGV0ZURlbGVnYXRlKTtcblx0XHRjb25zb2xlLmxvZygnQWZ0ZXIgcmVtb3ZlRXZlbnRMaXN0ZW5lcjogJywgdGhpcy5oYXNFdmVudExpc3RlbmVyKEFzc2V0RXZlbnQuQVNTRVRfQ09NUExFVEUpKTtcblx0fVxuXG5cdHB1YmxpYyBvbkNvbXBsZXRlKGV2ZW50OkFzc2V0RXZlbnQpXG5cdHtcblxuXHR9XG59Il19