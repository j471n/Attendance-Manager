/* Importing HMTL Fields*/
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

/* Base Variables*/
let totalClasses = 0;
let attendClasses = 0;
let absentClasses = 0;

/* Setting DISPLAY property to NONE*/
presentButton.style.display = 'none';
absentButton.style.display = 'none';
resetButton.style.display = 'none';
submitButton.style.display = 'none';


/*  Checking Name Input Field isEmpty or Not on KeyPress
 !   if Empty: then hide the Submit Button
 !   esle: Show the Submit Button
*/
nameField.addEventListener("keyup", ()=>{

    if(nameField.value == ""){
        submitButton.style.display = 'none';
    }
    else {
        submitButton.style.display = 'block';
    }
});

/* This Function Shows the All property with the Name and the Other Details As well 
   Its Shows the Data Table
   It Shows the Ham and Navbar and etc
*/
submitButton.addEventListener("click", ()=>{

    presentButton.style.display = 'inline';
    absentButton.style.display = 'inline';
    resetButton.style.display = 'inline';
    submitButton.style.display = "none";
    nameField.style.display = "none";
    infoTable.style.visibility = 'visible';
    ham.style.visibility = "visible";
    stats.style.marginTop = "0";
    editDetails();
    statsGroup.style.marginTop = "150px";
    middle.style.marginTop = "0";

})

/* IF user click Present Button then Present will be noted Down and Details will be Updated */
presentButton.addEventListener("click", ()=>{
    
    totalClasses++;
    attendClasses++;
    editDetails();
})

/* IF user click Absent Button then Absent will be noted Down and Details will be Updated */
absentButton.addEventListener("click", ()=>{

    totalClasses++;
    absentClasses++;
    editDetails();
})

/* IF user click Reset Button then All the Things we've changed will be back to initial Stage  */
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
})

/* When Someone Click the Edit Attendance then Form will be displayed and if you click again then It'll be vanish */
sideEdit.addEventListener("click", ()=>{
    if(sideForm.style.display != "none"){
        sideForm.style.display = "none";
    } else {
        sideForm.style.display = "inline";
    }
})

/* When Edit Attendance Form Submitted It checks-
   That attendance < totoalClasses
   and if all things goes right it update the Attendance Table
   and Hide the Form and NavBar
*/
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

/* This is the main Function which update/edit the User Details 
   Thier Present, Absent, Total Classes, Percentage 
*/
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

/* It just Update the Year on Copyright Year by Year */
let date = new Date;
document.getElementById("year").innerHTML = date.getFullYear();

/* Hamburger Toggle Property */
ham.addEventListener('click', ()=>{
    if(ham.classList.contains("change")){
        closeNav()
    } else{
        openNav()
    }
    ham.classList.toggle("change");
})

// Make User's Name Capatilize
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

/* Function which Opens the SideNavBar*/
function openNav() {
    if (window.innerWidth <= 375){
        document.getElementById("mySidenav").style.width = "100%";
        document.getElementById("mySidenav").style.height= "100%";
        footer.style.display = "block";

    } else{

        document.getElementById("mySidenav").style.width= "250px";
    }
}

/* Function which Closes the SideNavBar and set the Sidebar to Default*/
function closeNav() {

    if (window.innerWidth <= 375){
        document.getElementById("mySidenav").style.height= "0%";
        document.getElementById("mySidenav").style.width = "0%";
        footer.style.display = "none";
    } else{

        document.getElementById("mySidenav").style.width = "0";
        
    }
    if (sideForm.style.display != "none"){
        sideForm.style.display = "none";
    }

}
