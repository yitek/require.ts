
import {framework} from "../module-framework";
if((window as any).__component_defined) throw "component已经加载过一次";
(window as any).__component_defined = true

console.group("module-component.ts");
console.log("正在载入[组件]模块，依赖module-framework:",framework);
export let component = {
    id: new Date().valueOf(),
    name:"module-component",
    deps:{
        "framework":framework
    }
};
console.groupEnd();