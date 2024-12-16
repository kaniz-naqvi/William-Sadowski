// Function to dynamically add skill cards to the skills section
function renderSkills() {
  let skillsContainer = document.querySelector("#services .row");
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

// Function to dynamically add skills-related skills to the 'skills' section
function renderskillsSkills() {
  let skillsSkillsContainer = document.querySelector('#skills ul');
  let skillsSkillsData = [
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

  let skillsSkillsHTML = ''; 
  skillsSkillsData.forEach((skill) => {
    skillsSkillsHTML += `<li><i class="${skill.icon}"></i> ${skill.description}</li>`;
  });

  skillsSkillsContainer.innerHTML = skillsSkillsHTML; // Update the ul element's HTML
}

renderskillsSkills();
 
// Function to dynamically add education list items
function renderEducation() {
  let educationContainer = document.querySelector('#education-ul');
  let educationData = [
    {
      degree: 'BS in Mechanical Engineering (2024 – ongoing)',
      institution: 'Nazeer Hussain University',
    },
    {
      degree: 'Advanced Mechanical Level 4 Course (2021)',
      institution: 'The Hunar Foundation',
    },
    {
      degree: 'D.A.E. in Mechanical Engineering (2021)',
      institution: 'Sindh Board of Technical Education',
    },
    {
      degree: 'Matriculation in Computer Science (2018)',
      institution: 'Sindh Board of Karachi',
    }
  ];

  let educationHTML = '';
  educationData.forEach((item) => {
    educationHTML += `
      <li>
        ${item.degree} <br />
        ${item.institution}
      </li>`;
  });

  educationContainer.innerHTML = educationHTML; // Update the ul element's HTML
}

renderEducation();

let experience=document.querySelector('#Experience');
experience.innerHTML=` <div class="row py-2">
          <!-- First Column for Professional Experience -->
          <div class="col-lg-3 py-5 px-5">
            <h1 class="text-center py-5 bg-dark text-white rounded-circle">
              Professional Experience
            </h1>
          </div>
        
          <!-- Second Column with Three Sub-columns (Each 4 out of 12 columns) -->
          <div class="col-lg-8 m-1">
            <div class="row d-flex">
              <!-- First Sub-column for Brother Industries -->
              <div class="col-lg-6 bg-grey p-3">
                <ul>
                  <li>
                    <strong>Brother Industries (Dec 2023 – Ongoing)</strong><br />
                    <strong>Supervisor of CNC Department</strong>
                    <ul>
                      <li>CNC Programming and working in Moulds.</li>
                      <li>Reworking of Mould Jigs and Fixtures.</li>
                      <li>Ensuring precision and accuracy in all projects.</li>
                      <li>Collaborating with engineers and quality control teams to resolve issues.</li>
                    </ul>
                  </li>
                </ul>
              </div>
        
              <!-- Second Sub-column for Dawood Engineering Pvt. Ltd. -->
              <div class="col-lg-6 bg-grey p-3 b-left">
                <ul>
                  <li>
                    <strong>Dawood Engineering Pvt. Ltd. (Apr 2021 – Dec 2021)</strong><br />
                    <strong>CNC Operator</strong>
                    <ul>
                      <li>Handling CNC lathe and milling operations.</li>
                      <li>Performing job dialing and offsetting.</li>
                      <li>Managing manual programming and quality inspection.</li>
                    </ul>
                  </li>
                </ul>
              </div>
        
              <!-- Third Sub-column for Procon Engineering -->
              <div class="col-lg-12 mt-1 bg-grey">
                <ul>
                  <li>
                    <strong>Procon Engineering (Jan 2022 – Oct 2023)</strong><br />
                    <strong>CNC Shift Incharge</strong>
                    <ul>
                      <li>Cam Programming in Siemens NX 12.0.</li>
                      <li>Job dialing and offsetting.</li>
                      <li>Managing manual programming.</li>
                      <li>Supervising CNC operators for lathe and milling.</li>
                      <li>Ensuring job quality inspection.</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>`;