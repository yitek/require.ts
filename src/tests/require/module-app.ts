
import {framework} from "./libs/module-framework"
import {component} from './libs/plugins/module-component'
import {control} from './libs/plugins/module-control'
if((window as any).__app_defined) throw "app已经加载过一次";
(window as any).__app_defined = true

console.group("module-app.ts");

console.log("正在载入[应用]模块，依赖module-framework",framework,",component:",component,",control:",control);

export let app = {
    id: new Date().valueOf(),
    name:"module-app",
    deps:{
        "framework": framework
        ,"component": component
        ,"control":control
    }
};
console.groupEnd();