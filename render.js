// Function to dynamically add skill cards to the skills section
function renderSkills() {
  let skillsContainer = document.querySelector("#Skills .row");
  let skillsData = [
    {
      icon: `ri-briefcase-line`, // Icon for "Career/Experience"
      description: `Mechanical Engineering student at Nazeer Hussain University, actively learning CNC Milling and UG NX12.0. Passionate about applying theoretical knowledge into practical skills.`,
    },
    {
      icon: `ri-macbook-line`, // Icon for "Technical Skills"
      description: `Proficient in CNC programming, tool setup, job quality inspection, and using Siemens NX software. Hands-on experience with precision machining and quality control.`,
    },
    {
      icon: `ri-mail-line`, // Icon for "Contact Information"
      description: `Feel free to reach out to discuss potential opportunities or collaborations. I can be contacted via email: 795hassanlatif@gmail.com <br/> phone: +92-3033812795.`,
    },
  ];

  let skillCardsHTML = "";

  // Loop through each skill in the skillsData array
  skillsData.forEach((skill) => {
    skillCardsHTML += `
      <div class="col-lg-4 col-md-6 mb-3">
        <div class="card border-0 bg-none py-5">
          <div class="card-body">
            <h5 class="card-title text-center"><i class="${skill.icon}"></i></h5>
            <p class="card-text text-center px-4">
              ${skill.description}
            </p>
          </div>
        </div>
      </div>`;
  });

  // Append the new skill cards to the existing content
  skillsContainer.innerHTML += skillCardsHTML; 
}

renderSkills();

// Function to dynamically add competency skills to the 'comp-skills' section
function renderCompetencySkills() {
  let competencySkillsContainer = document.querySelector("#comp-skills");
  let competencySkillsData = [
    {
      imgSrc: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSUoRIrL6Tmov8Thj0cra7SG7-kiJEoLDLMQ&s`,
      title: `Microsoft Office Suite`,
      description: `MS Word, MS Excel, MS PowerPoint`,
    },
    {
      imgSrc: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTp8_bdblzHqvri-w8XSeHQ9URtQcH3Kh-1A&s`,
      title: "UG NX12.0",
      description: "CAD & CAM Programming",
    },
  ];

  let competencySkillsHTML = "";
  competencySkillsData.forEach(
    (skill) =>
      (competencySkillsHTML += `
        <div class="col-lg-6 col-md-6 mb-3">
          <div class="card m-4">
            <div class="card-body">
              <span class="card-title d-flex justify-content-center">
                <img src="${skill.imgSrc}" alt="">
              </span>
              <p class="card-text text-center px-4">
                <strong>${skill.title}</strong>
                <br>
                ${skill.description}
              </p>
            </div>
          </div>
        </div>`)
  );

  competencySkillsContainer.innerHTML = competencySkillsHTML;
}

renderCompetencySkills();

// Function to dynamically add project-related skills to the 'project' section
function renderProjectSkills() {
  let projectSkillsContainer = document.querySelector('#project ul');
  let projectSkillsData = [
    {
      icon: `ri-settings-2-line`,
      description: `Extensive experience in a Tool Room environment.`,
    },
    {
      icon: `ri-tools-line`,
      description: `Proficient in CNC Milling and CNC Lathe operations.`,
    },
    {
      icon: `ri-compasses-2-line`,
      description: `Knowledgeable in machining methods and precision instruments.`,
    },
    {
      icon: `ri-settings-6-line`,
      description: `Proficient in UG NX12.0 and CAM programming.`,
    },
    {
      icon: `ri-clockwise-line`,
      description: `Ability to work under pressure and meet tight deadlines.`,
    },
    {
      icon: `ri-tools-line`,
      description: `Skilled in tool setup, CNC programming, and quality control.`,
    },
    {
      icon: `ri-code-s-slash-line`,
      description: `Hands-on experience with manual programming and CAM software (Siemens NX 12.0).`,
    },
    {
      icon: `ri-check-line`,
      description: `Experience in job quality inspection and ensuring high precision.`,
    },
  ];

  let projectSkillsHTML = ''; 
  projectSkillsData.forEach((skill) => {
    projectSkillsHTML += `<li><i class="${skill.icon}"></i> ${skill.description}</li>`;
  });

  projectSkillsContainer.innerHTML = projectSkillsHTML; // Update the ul element's HTML
}

renderProjectSkills();
