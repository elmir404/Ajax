/*function fn(){
    return Promise.resolve("hello");
}
fn().then(res=>console.log(res));*/
function getCategory(){
    return new Promise(resolve=>{
          setTimeout(()=>{
              resolve('phone');
          },1000)
    });
}
function getProducc(category){
    return new Promise(resolve=>{
       setTimeout(()=>{
              resolve(`5 product in ${categroy}`);
       },1000)
    })
}
getCategory().then(getProducc).then(res=>console.log(res));
async function getProducc(){
    let category= await getCategory();
    let result = await getProducc(category);
    console.log(result);
}
getProducc();
       