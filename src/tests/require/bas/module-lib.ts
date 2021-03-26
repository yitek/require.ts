
if((window as any).__lib_defined) throw "lib 已经加载过一次";
(window as any).__lib_defined = true
console.group("module-lib.ts");
console.log("正在定义[基础类库]模块。该模块没有依赖项目");
export let lib = {
    id: new Date().valueOf(),
    name:"module-lib"
};
console.groupEnd();  