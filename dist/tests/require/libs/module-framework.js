define(["require", "exports", "../bas/module-lib"], function (require, exports, module_lib_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    if (window.__framework_defined)
        throw "framework已经加载过一次";
    window.__framework_defined = true;
    console.group("single-dep.ts");
    console.log("正在载入[框架]模块，依赖module-lib:", module_lib_1.lib);
    exports.framework = {
        id: new Date().valueOf(),
        name: "framework",
        deps: {
            "lib": module_lib_1.lib
        }
    };
    console.groupEnd();
});
//# sourceMappingURL=module-framework.js.map