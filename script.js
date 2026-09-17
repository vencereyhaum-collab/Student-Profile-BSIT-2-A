document.addEventListener('DOMContentLoaded', () => {
  const profileData = {
    projectTitle: 'Student Profile',
    fullName: 'Vence Rey Haum',
    courseAndYear: 'Bachelor of Science in Information Technology 2-A',
    sectionBadge: 'BSIT 2-A',
    age: '20',
    address: 'Baybay-1 Poblacion Bislig City',
    motto: 'Success comes from hard work, perseverance, and faith in God.',
    biography: 'I am an Information Technology student who enjoys learning about programming, responsible, and always eager to improve my skills.',
    careerGoals: 'To become a successful IT professional and develop systems that help people and businesses.',
    education: [
      { label: 'Elementary School', school: 'Bislig Central Elementary School', icon: '🏫' },
      { label: 'High School', school: 'Bislig City National High School', icon: '🎒' },
      { label: 'Senior High School', school: 'Bislig City National High School', icon: '📚' },
      { label: 'College (Current)', school: 'De La Salle John Bosco College', icon: '🎓' }
    ],
    technicalSkills: ['Basic Programming', 'IT Infrastructure & Computing Basics'],
    programmingLanguages: ['Java'],
    softwareApplications: ['Canva'],
    softSkills: ['Communication', 'Teamwork', 'Time Management'],
    featuredProject: {
      title: 'Student Information System',
      description: 'A web-based system for managing student records efficiently.',
      language: 'Java',
      status: 'Completed',
      link: '#'
    },
    contact: {
      email: 'vencereyhaum@gmail.com',
      mobile: '09519693197',
      facebook: 'haum.rey',
      facebookUrl: 'https://www.facebook.com/haum.rey'
    }
  };

  const setText = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  };

  setText('student-name', profileData.fullName);
  setText('course-year', profileData.sectionBadge);
  setText('student-age', profileData.age);
  setText('student-address', profileData.address);
  setText('short-biography', profileData.biography);
  setText('student-motto', `"${profileData.motto}"`);
  setText('career-goals', profileData.careerGoals);

  const softSkillsContainer = document.getElementById('soft-skills');
  if (softSkillsContainer) {
    softSkillsContainer.innerHTML = profileData.softSkills
      .map(skill => `<span class="chip-item">✨ ${skill}</span>`)
      .join('');
  }

  const renderSkillList = (id, items) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = items
      .map(item => `<li class="skill-item"><span class="skill-bullet">&gt;</span> ${item}</li>`)
      .join('');
  };

  renderSkillList('technical-skills', profileData.technicalSkills);
  renderSkillList('programming-languages', profileData.programmingLanguages);
  renderSkillList('software-applications', profileData.softwareApplications);

  const eduContainer = document.getElementById('education-container');
  if (eduContainer) {
    eduContainer.innerHTML = profileData.education
      .map(item => `
        <div class="edu-card">
          <div class="edu-icon-wrap">${item.icon}</div>
          <div class="edu-details">
            <span class="edu-level">${item.label}</span>
            <div class="edu-school">${item.school}</div>
          </div>
        </div>
      `).join('');
  }

  setText('featured-project-title', profileData.featuredProject.title);
  setText('featured-project-description', profileData.featuredProject.description);
  setText('featured-project-language', profileData.featuredProject.language);
  setText('featured-project-status', profileData.featuredProject.status);

  const projectLink = document.getElementById('featured-project-link');
  if (projectLink) {
    projectLink.href = profileData.featuredProject.link;
  }

  setText('email-text', profileData.contact.email);
  const emailLink = document.getElementById('email-link');
  if (emailLink) {
    emailLink.href = `mailto:${profileData.contact.email}`;
  }

  setText('mobile-number', profileData.contact.mobile);

  setText('facebook-text', profileData.contact.facebook);
  const facebookLink = document.getElementById('facebook-link');
  if (facebookLink) {
    facebookLink.href = profileData.contact.facebookUrl;
  }

  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      navToggle.classList.toggle('open');
    });

    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        navToggle.classList.remove('open');
      });
    });
  }

  const sections = document.querySelectorAll('section[id], main[id]');
  const navLinks = document.querySelectorAll('.nav-menu .nav-link');

  const onScroll = () => {
    let currentId = '';
    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPosition >= top && scrollPosition < top + height) {
        currentId = section.getAttribute('id');
      }
    });

    if (currentId) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentId}`) {
          link.classList.add('active');
        }
      });
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
});
