console.log('script sourced.');

function submitInfo(event) {
    // console.log('info inside')

    event.preventDefault();

    let fristnameVal = document.querySelector('#firstName');
    //console.log(fristnameVal);
    let lastnameVal = document.querySelector('#lastNameInput');
    let idVal = document.querySelector('#idInput');
    let titleVal = document.querySelector('#titleInput');
    let annualsalaryVal = document.querySelector('#annualSalaryInput');

    //console.log(lastnameVal, idVal, titleVal, annualsalaryVal);

    let employeeTable = document.querySelector('#employeeData')
    employeeTable.innerHTML += `
        <tr>
            <td>${fristnameVal.value}</td>
            <td>${lastnameVal.value}</td>
            <td>${idVal.value}</td>
            <td>${titleVal.value}</td>
            <td>${annualsalaryVal.value}</td>
            <td><button onclick="delElement(event)">Delete</button></td>
        </tr>

    `;
    fristnameVal.value='';
    lastnameVal.value='';
    idVal.value='';
    titleVal.value='';
    annualsalaryVal.value='';



    let annualSal = document.getElementById("employeeData")
    sumVal = 0;

    for (let x = 0; x < annualSal.rows.length; x++) {

        sumVal = Math.round(sumVal + parseInt(annualSal.rows[x].cells[4].innerHTML) / 12);



    }
    console.log(sumVal)
    let monCost = document.querySelector('#totalMonthly');
     monCost.innerHTML = `${sumVal}`;

   
        if (sumVal >= 20000) {
         let overmonCost = document.getElementById("totalMonthly").classList.add('over-budget')
            return overmonCost
        } else  {
            let undermonCost = document.getElementById("totalMonthly").classList.remove('over-budget')
            return undermonCost
        }
    
 
}



function delElement(event) {
    // event.preventDefault();
    event.target.parentElement.parentElement.remove()
    // document.querySelector('#totalMonthly').textContent = 0
   
}
