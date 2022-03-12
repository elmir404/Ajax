document.querySelector('#getemploye').addEventListener('click', loadEmployee);
function loadEmployee() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'employes.json', true);
  setTimeout(()=>{
    xhr.onload = function () {
      if (this.status === 200) {
        let employees = JSON.parse(this.responseText);
        let html="";
        employees.forEach(employee => {
             html += `
              <tr>
              <td>${employee.Firstname}</td>
                <td>${employee.Lastname}</td>
               <td>${employee.age}</td>
               <td>${employee.retired}</td>
              </tr>
            `;
        });
         
       
  
        document.querySelector('#employes').innerHTML = html;
      }
    }
    xhr.send();
  },1500)
}