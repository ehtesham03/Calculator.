// console.log("Start"); 

// setTimeout(()=>{
//     console.log("Timeout 1");
//     setTimeout(()=>{
//         console.log("Timeout 2");
//     }, 1000);
// }, 2000);
// console.log("End")
function PromiseHandler(){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            console.log("Promise 3");
            resolve();
        }, 2000);
    })
}
PromiseHandler().then(() =>{
    console.log("Promise Resolved");
}
)