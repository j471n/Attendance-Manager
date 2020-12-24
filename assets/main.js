const nameField = document.getElementById("name");
const submitButton = document.getElementById("submitButton");
const details = document.getElementById("details");
const attendenceRatio = document.getElementById("attendence");
const percentage = document.getElementById("percentage");
const presentButton = document.getElementById("present");
const absentButton = document.getElementById("absent");
const resetButton = document.getElementById("reset");
const ham = document.getElementById("ham");
const infoTable = document.getElementById("infoTable");
const totalAbsent = document.getElementById("totalAbsent");


let totalClasses = 0;
let attendClasses = 0;
let absentClasses = 0;

presentButton.style.display = 'none';
absentButton.style.display = 'none';
resetButton.style.display = 'none';

submitButton.style.display = 'none';


//Checking Input Field
nameField.addEventListener("keyup", ()=>{
    if(nameField.value == ""){
        submitButton.style.display = 'none';
    }
    else {
        submitButton.style.display = 'block';
    }
});


submitButton.addEventListener("click", ()=>{
    // let value = nameField.value;
    // console.log(nameField.value);
    presentButton.style.display = 'inline';
    absentButton.style.display = 'inline';
    resetButton.style.display = 'inline';
    submitButton.style.display = "none";
    nameField.style.display = "none";
    infoTable.style.visibility = 'visible';
    editDetails();


    
})

presentButton.addEventListener("click", ()=>{

    totalClasses++;
    attendClasses++;
    editDetails();
})


absentButton.addEventListener("click", ()=>{

    totalClasses++;
    absentClasses++;
    editDetails();
})


resetButton.addEventListener("click", ()=>{

    presentButton.style.display = 'none';
    absentButton.style.display = 'none';
    resetButton.style.display = 'none';
    nameField.style.display = "block";
    nameField.value = "";
    details.innerHTML = "";
    attendClasses.innerHTML = "";
    attendenceRatio.innerHTML = "";
    percentage.innerHTML = "";
    infoTable.style.visibility = 'hidden';
    totalClasses = 0;
    attendClasses = 0;
    absentClasses = 0;

})

function editDetails(){
    details.innerHTML = `${nameField.value.capitalize()}`;
    attendenceRatio.innerHTML = `${attendClasses}/${totalClasses}`;
    totalAbsent.innerHTML = `${absentClasses}`;
    if(totalClasses === 0){
        var Percentage = 0;
    } else{
        Percentage = parseFloat((attendClasses*100)/totalClasses).toFixed(2);
    }
    percentage.innerHTML = `${Percentage} %`;
}


let date = new Date;
document.getElementById("year").innerHTML = date.getFullYear();



// Hamburger Toggle Property
ham.addEventListener('click', ()=>{
    ham.classList.toggle("change");
})



// Make String Capatilize
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}