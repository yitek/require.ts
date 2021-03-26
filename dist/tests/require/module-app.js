define(["require", "exports", "./libs/module-framework", "./libs/plugins/module-component", "./libs/plugins/module-control"], function (require, exports, module_framework_1, module_component_1, module_control_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    if (window.__app_defined)
        throw "app已经加载过一次";
    window.__app_defined = true;
    console.group("module-app.ts");
    console.log("正在载入[应用]模块，依赖module-framework", module_framework_1.framework, ",component:", module_component_1.component, ",control:", module_control_1.control);
    exports.app = {
        id: new Date().valueOf(),
        name: "module-app",
        deps: {
            "framework": module_framework_1.framework,
            "component": module_component_1.component,
            "control": module_control_1.control
        }
    };
    console.groupEnd();
});
//# sourceMappingURL=module-app.js.map