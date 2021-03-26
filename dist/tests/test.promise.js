function basic() {
    console.group('basic');
    var p1 = new PromiseA(function (resolve, reject) {
        setTimeout(function () {
            console.log('p1 is resolving');
            resolve('abc');
        }, 0);
    });
    p1.then(function (val) {
        console.log('p1.then`1 registered before resolve invoked', val);
    });
    p1.then(function (val) {
        console.log('p1.then`2 registered before resolve invoked', val);
    });
    setTimeout(function () {
        p1.then(function (val) {
            console.log('p1.then`3 registered after resolve invoked', val);
            console.groupEnd();
            clain0();
        });
    }, 50);
}
function clain0() {
    console.group('clain');
    var p0 = new PromiseA(function (resolve, reject) {
        setTimeout(function () {
            console.log('p0 is resolving,return Promise');
            var pr = new PromiseA(function (resolve) {
                console.log('p0(pr) is resolving');
                setTimeout(function () { return resolve('abc'); }, 0);
            });
            resolve(pr);
        }, 0);
    });
    p0.then(function (val) {
        console.log('p0.then`1 invoked', val);
        return "def";
    }).then(function (val) {
        console.log('p0.then`1->then invoked', val);
        return "ghi";
    }).then(function (val) {
        console.log('p0.then`1->then->then invoked', val);
        console.groupEnd();
        clain1(p0);
    });
}
function clain1(p0) {
    console.group('clain1');
    p0.then(function (val) {
        console.log('p0.then`2 invoked', val);
        return PromiseA(function (resolve) {
            console.log('p0.then`2\'s ret Promise resolving');
            setTimeout(function () { return resolve('def'); }, 0);
        });
    }).then(function (val) {
        console.log('p0.then`2->then invoked', val);
        return PromiseA(function (resolve) {
            console.log('p0.then`2->then\'s ret Promise resolving');
            setTimeout(function () { return resolve('ghi'); }, 0);
        });
    }).then(function (val) {
        console.log('p0.then`2->then->then invoked', val);
        console.groupEnd();
        rjct();
    });
}
function rjct() {
    console.group("reject");
    var p = new PromiseA(function (resolve, reject) {
        throw "abc";
    }).then(null, function (err) {
        console.log('p.then`0', err);
    });
    debugger;
    p.then(null, function (err) {
        console.log('p.then`0->then', err);
    });
}
basic();
//# sourceMappingURL=test.promise.js.map