function displayDetails(){
    var name = document.getElementById("name").value;
    var age= document.getElementById("age").value;
    var grade = document.getElementById("grade").value;
    var row=1;
    if (!name || !age || !grade){
        alert("Please fill all the boxes");
        return;
    }
    if (grade=="Enter Grade"){
        alert("Please fill the Grade");
        return;
    }
    
    var display = document.getElementById("display");
    var newrow = display.insertRow(row);
    var cell1 = newrow.insertCell(0);
    var cell2 = newrow.insertCell(1);
    var cell3 = newrow.insertCell(2);
    cell1.innerHTML= name;
    cell2.innerHTML=age;
    cell3.innerHTML=grade;
    row++;

}
function clearDetails(){
    document.getElementById("name").value="";
    document.getElementById("age").value="";
    document.getElementById("grade").value="Enter Grade"; 
}