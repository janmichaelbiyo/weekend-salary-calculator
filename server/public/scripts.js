console.log('script sourced.');

function submitInfo(event) {
    // console.log('info inside')

    event.preventDefault();

    let fristnameVal = document.querySelector('#firstName').value;
    //console.log(fristnameVal);
    let lastnameVal = document.querySelector('#lastNameInput').value;
    let idVal = document.querySelector('#idInput').value;
    let titleVal = document.querySelector('#titleInput').value;
    let annualsalaryVal = document.querySelector('#annualSalaryInput').value;

    //console.log(lastnameVal, idVal, titleVal, annualsalaryVal);

    let employeeTable = document.querySelector('#employeeData')
    employeeTable.innerHTML += `
        <tr>
            <td>${fristnameVal}</td>
            <td>${lastnameVal}</td>
            <td>${idVal}</td>
            <td>${titleVal}</td>
            <td>${annualsalaryVal}</td>
            <td><button onclick="delElement(event)">Delete</button></td>
        </tr>

    `;

    let annualSal = document.getElementById("employeeData")
    sumVal = 0;
    totalVal = 0;

    for (let x = 0; x < annualSal.rows.length; x++) {

        sumVal = sumVal + parseInt(annualSal.rows[x].cells[4].innerHTML) / 12;



    }
    console.log(sumVal)
    let monCost = document.querySelector('#totalMonthly');
     monCost.innerHTML = `${sumVal}`;

   
        if (sumVal >= 20000) {
         let overmonCost = document.getElementById("totalMonthly").classList.add('over-budget')
            return overmonCost
}
   


function delElement(event) {
    event.target.parentElement.parentElement.remove()

}
}