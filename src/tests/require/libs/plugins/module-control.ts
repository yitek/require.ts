
import {lib} from "../../bas/module-lib";
if((window as any).__control_defined) throw "control已经加载过一次";
(window as any).__control_defined = true
console.group("module-control.ts");

console.log("正在载入[控件]模块，依赖moudle-lib:",lib);
console.log("lib",lib)

export let control = {
    id: new Date().valueOf(),
    name:"module-control",
    deps:{
        "lib":lib
    }
};
console.groupEnd();