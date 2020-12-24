const nameField = document.getElementById("name");
const submitButton = document.getElementById("submitButton");
const details = document.getElementById("details");
const attendenceRatio = document.getElementById("attendence");
const percentage = document.getElementById("percentage");
const presentButton = document.getElementById("present");
const absentButton = document.getElementById("absent");
const resetButton = document.getElementById("reset");
const ham = document.getElementById("ham");

let totalClasses = 0;
let attendClasses = 0;

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
    editDetails();
    presentButton.style.display = 'inline';
    absentButton.style.display = 'inline';
    resetButton.style.display = 'inline';
    submitButton.style.display = "none";
    nameField.style.display = "none";
    
})

presentButton.addEventListener("click", ()=>{

    totalClasses++;
    attendClasses++;
    editDetails();
})


absentButton.addEventListener("click", ()=>{

    totalClasses++;
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
    totalClasses = 0;
    attendClasses = 0;

})
function editDetails(){
    details.innerHTML = `Name : ${nameField.value}`;
    attendenceRatio.innerHTML = `Attendence : ${attendClasses}/${totalClasses}`;
    // let Percentage = parseFloat((attendClasses*100)/totalClasses).toFixed(2);
    if(totalClasses === 0){
        var Percentage = 0;
    } else{
        Percentage = parseFloat((attendClasses*100)/totalClasses).toFixed(2);
    }
    percentage.innerHTML = `Attendence Percentage : ${Percentage} %`;
}


let date = new Date;
document.getElementById("year").innerHTML = date.getFullYear();



// Hamburger
ham.addEventListener('click', ()=>{
    ham.classList.toggle("change");
})

