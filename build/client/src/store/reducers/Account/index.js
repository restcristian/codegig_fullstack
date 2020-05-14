"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("../../types");
var init = {
    status: "",
    isValid: false,
};
exports.default = (function (state, action) {
    if (state === void 0) { state = init; }
    switch (action.type) {
        case types_1.SIGN_UP_SUCCESS:
            return __assign(__assign({}, state), { status: action.payload, isValid: true });
        case types_1.SIGN_UP_FAIL:
        default:
            return __assign(__assign({}, state), { status: action.payload, isValid: false });
    }
});
