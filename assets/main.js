const nameField = document.getElementById("name");
const submitButton = document.getElementById("submitButton");
const details = document.getElementById("details");
const attendanceRatio = document.getElementById("attendance");
const percentage = document.getElementById("percentage");
const presentButton = document.getElementById("present");
const absentButton = document.getElementById("absent");
const resetButton = document.getElementById("reset");
const ham = document.getElementById("ham");
const infoTable = document.getElementById("infoTable");
const totalAbsent = document.getElementById("totalAbsent");
const sideEdit = document.getElementById("sideEdit");
const sideAttendance = document.getElementById("sideAttendance");
const sideTotalAttendance = document.getElementById("sideTotalAttendance");
const sideSubmit = document.getElementById("sideSubmit");
const sideForm = document.getElementById("sideForm");
const stats = document.getElementById("stats");
const footer = document.getElementById("footer");
const statsGroup = document.getElementById("stats-group");
const middle = document.querySelector(".middle");

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
        // footer.style.marginTop = "120px";
    }
    else {
        submitButton.style.display = 'block';
        // footer.style.marginTop = "78.5px";
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
    ham.style.visibility = "visible";
    stats.style.marginTop = "0";
    editDetails();
    // footer.style.marginTop = "228.5px";
    statsGroup.style.marginTop = "150px";
    middle.style.marginTop = "0";

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
    attendanceRatio.innerHTML = "";
    percentage.innerHTML = "";
    infoTable.style.visibility = 'hidden';
    ham.style.visibility = "hidden";
    stats.style.marginTop = "100px";
    totalClasses = 0;
    attendClasses = 0;
    absentClasses = 0;
    middle.style.marginTop = "0";
    // footer.style.marginTop = "120px";
})

sideEdit.addEventListener("click", ()=>{
    if(sideForm.style.display != "none"){
        sideForm.style.display = "none";
    } else {
        sideForm.style.display = "inline";
    }
})

sideSubmit.addEventListener("click", ()=>{

    if(sideTotalAttendance.value < sideAttendance.value){
        alert("Developer : Abe Saale Theek Se daal Attendance.");
    } else {
        attendClasses = sideAttendance.value;
        totalClasses = sideTotalAttendance.value;
        absentClasses = totalClasses - attendClasses;
        console.log(sideAttendance.value, sideTotalAttendance.value, absentClasses);
        editDetails();
        sideForm.style.display = "none";
        sideAttendance.value = "";
        ham.classList.remove("change");
        closeNav();
        sideTotalAttendance.value = "";
    }
});

function editDetails(){
    details.innerHTML = `${nameField.value.capitalize()}`;
    attendanceRatio.innerHTML = `${attendClasses}/${totalClasses}`;
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
    if(ham.classList.contains("change")){
        closeNav()
    } else{
        openNav()
    }
    ham.classList.toggle("change");
})



// Make String Capatilize
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}


function openNav() {
    if (window.innerWidth <= 375){
        document.getElementById("mySidenav").style.width = "100%";
        document.getElementById("mySidenav").style.height= "100%";
        footer.style.display = "block";

    } else{

        document.getElementById("mySidenav").style.width= "250px";
    }
}

/* Set the width of the side navigation to 0 */
function closeNav() {

    if (window.innerWidth <= 375){
        document.getElementById("mySidenav").style.height= "0%";
        document.getElementById("mySidenav").style.width = "0%";
        footer.style.display = "none";
    } else{

        document.getElementById("mySidenav").style.width = "0";
        
    }
  if(sideForm.style.display != "none"){
      sideForm.style.display = "none";
  }

}
