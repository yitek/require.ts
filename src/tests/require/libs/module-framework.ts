
import {lib} from '../bas/module-lib'
if((window as any).__framework_defined) throw "framework已经加载过一次";
(window as any).__framework_defined = true

console.group("single-dep.ts");

console.log("正在载入[框架]模块，依赖module-lib:",lib)


export let framework = {
    id: new Date().valueOf(),
    name:"framework",
    deps:{
        "lib":lib
    }
};
console.groupEnd();  