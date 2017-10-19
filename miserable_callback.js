const [a,b,c] = [5,6,7];

console.time('S');void setTimeout(()=>void setTimeout( ()=>void setTimeout( ()=>console.timeEnd('S'), c*1000), b*1000), a*1000);
