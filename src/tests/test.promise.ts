declare var PromiseA
function basic(){
	console.group('basic')
	let p1 = new PromiseA((resolve,reject)=>{
		setTimeout(()=>{
			console.log('p1 is resolving')
			resolve('abc')
		},0)
	})
	p1.then((val)=>{
		console.log('p1.then`1 registered before resolve invoked',val)
	})
	p1.then((val)=>{ 
		console.log('p1.then`2 registered before resolve invoked',val)
	})
	setTimeout(()=>{
		p1.then((val)=>{
			console.log('p1.then`3 registered after resolve invoked',val)
			console.groupEnd()
			clain0()
		})
	},50)
}

function clain0(){
	console.group('clain')
	let p0 = new PromiseA((resolve,reject)=>{
		setTimeout(()=>{
			console.log('p0 is resolving,return Promise')
			let pr = new PromiseA((resolve)=>{
				console.log('p0(pr) is resolving')
				setTimeout(()=>resolve('abc'),0)
			})
			resolve(pr)
		},0)
	})
	p0.then((val)=>{
		console.log('p0.then`1 invoked',val)
		return "def"
	}).then((val)=>{
		console.log('p0.then`1->then invoked',val)
		return "ghi"
	}).then((val)=>{
		console.log('p0.then`1->then->then invoked',val)
		console.groupEnd()
		clain1(p0)
	})

	
}

function clain1(p0){
	console.group('clain1')	

	p0.then((val)=>{
		console.log('p0.then`2 invoked',val)
		return PromiseA((resolve)=>{
			console.log('p0.then`2\'s ret Promise resolving')
			setTimeout(()=>resolve('def'),0)
		})
	}).then((val)=>{
		console.log('p0.then`2->then invoked',val)
		return PromiseA((resolve)=>{
			console.log('p0.then`2->then\'s ret Promise resolving')
			setTimeout(()=>resolve('ghi'),0)
		})
	}).then((val)=>{
		console.log('p0.then`2->then->then invoked',val)
		console.groupEnd()
		rjct()
	})

	
}

function rjct(){
	console.group("reject")
	let p = new PromiseA((resolve,reject)=>{
		throw "abc"
	}).then(null,(err)=>{
		console.log('p.then`0',err)
	})
	debugger
	p.then(null,(err)=>{
		console.log('p.then`0->then',err)
	})
}

basic()