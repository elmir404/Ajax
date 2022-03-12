/*var p= new Promise(function(resolve,reject){
    if(true){
        resolve('succes');
    }else{
        reject('hata:400');
    }
});
p.then(function(data){
    console.log(data)
}).catch(function(err){
console.log(err);
})*/
new Promise(function(resolve,reject){
setTimeout(() => {
    resolve(5);
}, 1000);   
}).then(function (number) {
    console.log(number);
    return number*number;
}).then(function (number) {
    console.log(number);
})
    
const isMomHappy=false;
const WillGetNewPhone =new Promise((resolve,reject)=>{
    if(isMomHappy){
        const phone={
            name:'iphone 8',
            price:4000,
            color:'silver'
        }
        resolve(phone)
    }else{
        const error =new Error('mom is not happy');
        reject(error);
    }
    
});
const showTheFriends=function (phone) {
    const message="hi friends this is my new phone "+phone.name;
    return  Promise.resolve(message)
}
const askMom= function () {
    WillGetNewPhone.then(showTheFriends)
    .then(message=>console.log(message))
    .catch(error=>{
        console.log(error)
    });
}
askMom();

    
