let f1 = (a,b,callback) => {
callback(a,b);
console.log(callback(a,b));
};
let f2 = (a,b) => a+b ;
f1(1,2,f2);

((a,b)=>{
    console.log(a*b); 
    })(1,2)