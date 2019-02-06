const name = document.getElementById('name');
const position = document.getElementById('position');
const allergy = document.getElementById('allergy');
const tiger = document.getElementById('tiger');

const json = window.localStorage.getItem('applicant');
const hydratedApplicant = JSON.parse(json);
console.log(hydratedApplicant);

name.textContent = hydratedApplicant.name;
position.textContent = hydratedApplicant.position;
allergy.textContent = hydratedApplicant.allergy;
tiger.textContent = hydratedApplicant.tigerName.join(' ');