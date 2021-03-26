define(["require", "exports", "../module-framework"], function (require, exports, module_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    if (window.__component_defined)
        throw "component已经加载过一次";
    window.__component_defined = true;
    console.group("module-component.ts");
    console.log("正在载入[组件]模块，依赖module-framework:", module_framework_1.framework);
    exports.component = {
        id: new Date().valueOf(),
        name: "module-component",
        deps: {
            "framework": module_framework_1.framework
        }
    };
    console.groupEnd();
});
//# sourceMappingURL=module-component.js.map