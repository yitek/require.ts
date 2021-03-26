define(["require", "exports", "../../bas/module-lib"], function (require, exports, module_lib_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    if (window.__control_defined)
        throw "control已经加载过一次";
    window.__control_defined = true;
    console.group("module-control.ts");
    console.log("正在载入[控件]模块，依赖moudle-lib:", module_lib_1.lib);
    console.log("lib", module_lib_1.lib);
    exports.control = {
        id: new Date().valueOf(),
        name: "module-control",
        deps: {
            "lib": module_lib_1.lib
        }
    };
    console.groupEnd();
});
//# sourceMappingURL=module-control.js.map