var products =[
    {id:1,name:'samsung s7',price:1200},
    {id:2,name:'samsung s20',price:1200},
    {id:3,name:'samsung s9',price:1200}

    
    
]

function addProduct(prd,callback){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            products.push(prd);
            let added=false;
            if(added){
                resolve();
            }else{
                reject('hata:500')
            }
        },2000);
    })
 


}
function getProducts(){
setTimeout(() => {
    products.forEach(p=>{
     console.log(p.name);
    });
},(1000));
}
addProduct({id:4,name:"samsun s5",price:500}).then(getProducts).catch(function(err){
    console.log(err);
});
