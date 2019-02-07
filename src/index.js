const circusForm = document.getElementById('circus-app');
const userName = document.getElementById('name');
const jobPosition = document.getElementById('position');
const allergy = document.getElementById('allergy');
const allergySpan = document.getElementById('allergy-slider');
// const yesElephants = document.getElementById('yes');
// const noElephants = document.getElementById('no');



allergy.addEventListener('change', function() {
    allergySpan.textContent = allergy.value;
});

circusForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const tigerNames = [];
    for(let index = 0; index < circusForm.tiger.length; index++) {
        const name = circusForm.tiger[index];
        if(name.checked) {
            tigerNames[index] = name.value;
        }
    }
    const applicant = {
        name: userName.value,
        position: jobPosition.value,
        allergy: allergy.value,
        tigerName: tigerNames
    };

    //instead of saving an object to local storage, we are going to create an ARRAY of objects so that way we can save the data for more than 1 user. We can then also display all that data, some of that data, etc...

    let applicants = []; 
    const jsonString = window.localStorage.getItem('applicants');
    if(jsonString) { 
        applicants = JSON.parse(jsonString); //second round, this will equal an array with just one object. Then applicants.push will make the array have 2 objects. And so forth. 
    }

    //first round, this will push one object into []
    applicants.push(applicant);

    const serialize = JSON.stringify(applicants); //must stringify to then set it
    window.localStorage.setItem('applicants', serialize); //set it

    window.location = 'thanks.html';
});


