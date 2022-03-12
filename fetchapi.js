//text
function getText() {
    fetch('msg.txt').then(response => {
        return response.text()
    }).then(data => {
        console.log(data);
    }).catch(error => {
        console.log(error);
    })
}
getText();
//json
function GetJson() {
    fetch('productfetch.json').then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
    }).catch(error => {
        console.log(error);
    })
}
GetJson();
//external api
function getExternalapi() {
    fetch('https://randomuser.me/api/?results=5').then(data => {
        return data.json();
    }).then(users => {
        var html = "";
        users.results.forEach(user => {
            html += `<div><img src="${user.picture.medium}"> <div>
            ${user.name.title}
          ${user.name.first}
         ${user.name.last}
         </div>
         </div>`;
    
    
        });
        
     document.querySelector('#users').innerHTML = html;
    }).catch(error => {
        console.log(error);
    })
}
getExternalapi();
function postExternalapi(){
    const url="https://jsonplaceholder.typicode.com/posts";
    var data={
        method:"POST",
        body:JSON.stringify({
           userId:1,
           title:'sample title',
           body:'sample body'
        }),
        header:new Headers({
             "content-type":"application/json"
        })


    }
    fetch (url,data).then(res=>{
        console.log(res);
    })
}
postExternalapi();