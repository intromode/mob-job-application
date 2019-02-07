const name = document.getElementById('name');
const position = document.getElementById('position');
const allergy = document.getElementById('allergy');
const tiger = document.getElementById('tiger');

const jsonString = window.localStorage.getItem('applicants');

let applicant = null;
let applicants = [];

if(jsonString) {
    applicants = JSON.parse(jsonString);
}
else {
    window.location = '/';
}

const searchParam = new URLSearchParams(window.location.search);//allows us to use those methods on the query string
const nameToFind = searchParam.get('name');

if(nameToFind) {
    //needed applicants to be = [] instead of just a var because we need length
    for(let index = 0; index < applicants.length; index++) {
        let currentApplicant = applicants[index];
        if(currentApplicant.name === nameToFind) {
            applicant = currentApplicant;
            break; //otherwise once we find the name we want, we will keep looping  
        }
    }
}
else {
    applicant = applicants[applicants.length - 1];
}



name.textContent = applicant.name;
position.textContent = applicant.position;
allergy.textContent = applicant.allergy;
tiger.textContent = applicant.tigerName.join(' ');