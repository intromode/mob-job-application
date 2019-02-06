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
    
    window.location = 'thanks.html';
    const serialize = JSON.stringify(applicant);
    window.localStorage.setItem('applicant', serialize);
});


