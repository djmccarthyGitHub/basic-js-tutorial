// each person object in the people array should have these parameters:
// {firstName: "", lastName: "", age: 0, job: ""}

people = [];
elementIDs = ["firstNameInput", "lastNameInput", "ageInput", "jobInput"];
ascending = {
    firstName: false,
    lastName: false,
    age: false,
    job: false
}


function resetInput() {
    for(var i = 0; i < elementIDs.length; i++) {
        document.getElementById(elementIDs[i]).value = "";
        document.getElementById(elementIDs[i]).className = document.getElementById(elementIDs[i]).className.replace(" error", "");
    }
}


function checkInputData(input) {
    if(input.length > 0) {
        return true
    } else {
        return false
    }
}


function addPerson() {
    var validInput = true;

    for(var i = 0; i < elementIDs.length; i++) {
        if(!(checkInputData(document.getElementById(elementIDs[i]).value))) {
            document.getElementById(elementIDs[i]).className = document.getElementById(elementIDs[i]).className + " error";
            validInput = false;
        } else {
            document.getElementById(elementIDs[i]).className = document.getElementById(elementIDs[i]).className.replace(" error", "");
        }
    }

    if(validInput) {
        people.push({
            firstName: document.getElementById("firstNameInput").value,
            lastName: document.getElementById("lastNameInput").value,
            age: document.getElementById("ageInput").value,
            job: document.getElementById("jobInput").value
        });   
    
        resetInput();
        loadTableData();
    }
}


function swap(i, j) {
    var temp = people[i];
    people[i] = people[j];
    people[j]= temp;
}


function sort(type, isNumber) {
    for(var i = 0; i < people.length; i++) {
        for(var j = i; j < people.length; j++) {
            if(isNumber) {
                if(ascending[type]) {
                    if(Number(people[j][type]) > Number(people[i][type])) {
                        swap(i, j);
                    }
                } else {
                    if(Number(people[j][type]) < Number(people[i][type])) {
                        swap(i, j);
                    }
                }
            } else {
                if(ascending[type]){
                    if(people[j][type] > people[i][type]) {
                        swap(i, j);
                    }
                } else {
                    if(people[j][type] < people[i][type]) {
                        swap(i, j);
                    }
                }
                   
            }
        }
    }
}


function sortList(type, isNumber) {
    sort(type, isNumber);
    ascending[type] = !ascending[type];
    loadTableData();
}


function loadTableData() { 
    const table = document.getElementById("tableData");
    table.innerHTML = "";
    people.forEach( person => {
        let row = table.insertRow();

        let firstName = row.insertCell(0);
        firstName.innerHTML = person.firstName;
        let lastName = row.insertCell(1);
        lastName.innerHTML = person.lastName;
        let age = row.insertCell(2);
        age.innerHTML = person.age;
        let job = row.insertCell(3);
        job.innerHTML = person.job;
    });
}