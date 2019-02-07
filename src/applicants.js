const jsonString = window.localStorage.getItem('applicants');

let applicants = [];
if(jsonString) {
    applicants = JSON.parse(jsonString);
}

const tbody = document.getElementById('applicants');

for(let index = 0; index < applicants.length; index++) {
    const applicant = applicants[index];
    const tr = document.createElement('tr');
    tbody.appendChild(tr);

    const tdName = document.createElement('td');
    tr.appendChild(tdName);
    const nameLink = document.createElement('a');
    tdName.appendChild(nameLink);
    nameLink.textContent = applicant.name;
    nameLink.href = 'applicant-detail.html?name=' + encodeURIComponent(applicant.name);


    const tdPosition = document.createElement('td');
    tr.appendChild(tdPosition);
    tdPosition.textContent = applicant.position;

    const tdAllergy = document.createElement('td');
    tr.appendChild(tdAllergy);
    tdAllergy.textContent = applicant.allergy;

    const tdTiger = document.createElement('td');
    tr.appendChild(tdTiger);
    tdTiger.textContent = applicant.tigerName;
}
