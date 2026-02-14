function showPage(pageId) {

  document.getElementById('landing').style.display = 'none';
  document.getElementById('form').style.display = 'none';
  document.getElementById('preview').style.display = 'none';

  document.getElementById(pageId).style.display = 'block';
}


function generatePortfolio() {

  document.getElementById('previewName').innerText =
  document.getElementById('name').value;

  document.getElementById('previewAbout').innerText =
  document.getElementById('about').value;

  document.getElementById('previewExperience').innerText =
  document.getElementById('experience').value;

 
  // Skills
  const skills =
  document.getElementById('skills').value.split(',');

  const projects =
  document.getElementById('projects').value.split(',');


  const skillsList =
  document.getElementById('previewSkills');

  const projectsList =
  document.getElementById('previewProjects');

  skillsList.innerHTML = '';
  projectsList.innerHTML = '';


  skills.forEach(skill => {

    if (skill.trim()) {

      const li = document.createElement('li');
      li.innerText = skill.trim();
      skillsList.appendChild(li);

    }
  });


  projects.forEach(project => {

    if (project.trim()) {

      const li = document.createElement('li');
      li.innerText = project.trim();
      projectsList.appendChild(li);

    }
  });


  // Photo
  const photoInput =
  document.getElementById('photo');

  const file = photoInput.files[0];

  

    const reader = new FileReader();

    reader.onload = function(e) {

      document.getElementById('previewPhoto').src =
      e.target.result;

    };
    if(file){

    reader.readAsDataURL(file); // FIXED

  } else{

    document.getElementById('previewPhoto').src = '';

  }


  showPage('preview');
}