const name = document.getElementById('name');
const position = document.getElementById('position');
const allergy = document.getElementById('allergy');
const tiger = document.getElementById('tiger');

const jsonString = window.localStorage.getItem('applicants');

let applicant = null;
if(jsonString) {
    const applicants = JSON.parse(jsonString);
    applicant = applicants[0];
}
else {
    window.location = '/';
}

name.textContent = applicant.name;
position.textContent = applicant.position;
allergy.textContent = applicant.allergy;
tiger.textContent = applicant.tigerName.join(' ');