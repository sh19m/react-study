"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("react");
function App() {
    // state取得
    var _a = react_2.useState(0), count = _a[0], setCount = _a[1];
    var _b = react_2.useState("10未満"), message = _b[0], setMessage = _b[1];
    // カウントを加算する
    var doCountUp = function () {
        // カウントを加算
        var nextCount = count + 1;
        setCount(nextCount);
        // メッセージ更新
        var nextMessage = "10未満";
        var isTenOver = nextCount >= 10;
        if (isTenOver) {
            nextMessage = "10を超えたね";
        }
        setMessage(nextMessage);
    };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h1", null, "\u30AB\u30A6\u30F3\u30BF\u30FC"),
        react_1.default.createElement("div", null, count),
        react_1.default.createElement("button", { onClick: doCountUp }, "\u30D7\u30E9\u30B9"),
        react_1.default.createElement("div", null, message)));
}
exports.default = App;
