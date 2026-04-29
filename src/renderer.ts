import { resumeData, type ResumeData } from './resumeData';

// Helper function to format dates
function formatDate(dateString: string): string {
  if (!dateString) return '';
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long' };
  return date.toLocaleDateString('en-US', options);
}

// Helper function to get profile icon SVG
function getProfileIcon(network: string): string {
  const icons: Record<string, string> = {
    'LinkedIn': `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>`,
    'Github': `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>`
  };
  return icons[network] || '';
}

// Generate CSS styles
function generateStyles(): string {
  return `
    html {
      font-family: Georgia, serif;
      background: #fdfaf4;
      color: #333;
      font-size: 12pt;
      padding-bottom: 40vw;
    }

    h2 {
      font-size: 1.5rem;
    }

    p {
      padding: 0;
      margin: 0;
    }

    p,
    li {
      font-size: 1rem;
      line-height: 1.5;
    }

    .secondary {
      color: #555;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    .section-container {
      max-width: 700px;
      margin: 0 auto 16px;
    }

    .section-container h2 {
      margin: 0;
      padding: 0;
      margin-bottom: 3px;
      font-weight: 600;
    }

    .section-container hr {
      margin: 0;
      padding: 0;
      margin-top: 6px;
      margin-bottom: 3px;
    }

    .section-content {
      margin: 0 8px;
    }

    .bullet-list {
      padding-left: 20px;
      line-height: 16px;
    }

    .bullet-list li::before {
      content: '•';
      display: inline-block;
      width: 1em;
      margin-left: -1em;
      line-height: 10px;
    }

    .date-text {
      font-style: italic;
      font-size: 0.95rem;
    }

    .date-range {
      display: flex;
      font-style: italic;
      font-size: 0.95rem;
    }

    .item-header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 2px;
    }

    .job-title {
      font-weight: 600;
      font-size: 1.05rem;
      margin-bottom: 3px;
    }

    .company-name {
      font-style: italic;
      font-size: 1rem;
      margin-bottom: 3px;
    }

    .item-container {
      margin-bottom: 10px;
    }

    .main-name {
      font-size: 2.8rem;
      text-align: center;
      margin-top: 15px;
      margin-bottom: 15px;
    }

    .contact-grid {
      display: flex;
      gap: 10px 20px;
      justify-content: center;
      flex-wrap: wrap;
    }

    .contact-item {
      display: flex;
      align-items: center;
      font-size: 1rem;
    }

    .contact-item svg {
      color: #333;
      margin-right: 5px;
      width: 10px;
    }

    .contact-item a {
      color: inherit;
      text-decoration: none;
    }

    .contact-item a:hover {
      color: #000;
    }

    .skill-label {
      font-weight: 600;
      font-size: 1rem;
    }

    .skill-value {
      font-size: 1rem;
      margin-left: 5px;
    }

    .skill-row {
      margin-bottom: 5px;
      display: flex;
      align-items: baseline;
    }

    .resume-container {
      max-width: 660px;
      margin: 0 auto;
      line-height: calc(1ex / 0.32);
      margin-bottom: 40px;
    }

    .toast {
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(253, 250, 244, 0.2);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      color: #333;
      padding: 16px 20px;
      border: 1px solid #ddd;
      border-radius: 8px;
      display: none;
      align-items: center;
      gap: 12px;
      font-size: 1rem;
      z-index: 1000;
      max-width: 450px;
      animation: fadeIn 0.4s ease-in;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateX(-50%) translateY(10px); }
      to { opacity: 1; transform: translateX(-50%) translateY(0); }
    }

    .toast.show {
      display: flex;
    }

    .toast-text {
      white-space: nowrap;
      flex-shrink: 0;
    }

    .toast-buttons {
      display: flex;
      gap: 8px;
      flex-shrink: 0;
    }

    .toast-button {
      background: transparent;
      color: #333;
      border: 1px solid #ccc;
      padding: 6px 12px;
      border-radius: 4px;
      font-family: Georgia, serif;
      font-size: 1rem;
      cursor: pointer;
      text-decoration: none;
      display: inline-block;
      transition: border-color 0.2s;
      white-space: nowrap;
    }

    .toast-button:hover {
      border-color: #999;
    }

    @media print {
      .toast {
        display: none !important;
      }
      html {
        padding-bottom: 0;
        font-size: 9pt;
      }
      .section-container {
        max-width: 100%;
        margin: 0 auto 10px;
      }
      .resume-container {
        max-width: 100%;
        margin: 0 10px;
        margin-bottom: 0;
      }
      .education-section {
        display: none !important;
      }
      .main-name {
        font-size: 2rem;
        margin: 5px;
      }
    }

    /* Mobile responsive styles - Force bold/italic */
    @media (max-width: 768px) {
      html {
        font-size: 12px;
      }
      
      /* Force font loading */
      * {
        font-family: Georgia, serif !important;
      }
      
      .section-container {
        max-width: 100%;
        margin: 0 auto 15px;
      }
      
      .section-content {
        margin: 0 4px;
      }
      
      .resume-container {
        max-width: 100%;
        margin: 0 10px;
        margin-bottom: 20px;
      }
      
      .main-name {
        font-size: 2.5rem;
        margin-top: 15px;
        margin-bottom: 15px;
      }
      
      .contact-grid {
        gap: 0.2rem 1rem;
      }
      
      .contact-item {
        font-size: 1.3rem;
        justify-content: center;
      }
      
      .item-header {
        flex-direction: column !important;
        align-items: flex-start !important;
        margin-bottom: 5px;
      }
      
      .date-range {
        margin-top: 2px !important;
        font-size: 1.2rem;
      }
      
      .skill-row {
        flex-direction: column !important;
        align-items: flex-start !important;
        margin-bottom: 8px;
      }
      
      .skill-value {
        margin-left: 0 !important;
        margin-top: 3px !important;
      }
      
      .job-title {
        font-size: 1.3rem;
        margin-bottom: 2px;
        font-weight: bold !important;
        font-family: Georgia, serif !important;
      }
      
      .company-name {
        font-size: 1.2rem;
        margin-bottom: 2px;
        font-style: italic !important;
        font-family: Georgia, serif !important;
      }
      
      .bullet-list {
        padding-left: 15px;
        line-height: 14px;
      }
      
      .item-container {
        margin-bottom: 12px;
      }
      
      h2 {
        font-size: 1.5rem;
        font-weight: bold !important;
        font-family: Georgia, serif !important;
      }
      
      p, li {
        font-size: 1.2rem;
        line-height: 1.5rem;
      }
      
      .skill-label {
        font-size: 1.2rem;
        font-weight: bold !important;
        font-family: Georgia, serif !important;
      }
      
      .skill-value {
        font-size: 1.2rem;
      }
      
      .date-text {
        font-size: 1.2rem;
        font-style: italic !important;
        font-family: Georgia, serif !important;
      }
      
      .toast {
        bottom: 15px;
        left: 50%;
        transform: translateX(-50%);
        padding: 14px 18px;
        font-size: 1.1rem;
        flex-direction: column;
        gap: 12px;
        text-align: center;
        max-width: 70vw;
        width: calc(100vw - 60px);
      }

      .toast-text {
        white-space: normal;
      }

      .toast-buttons {
        gap: 10px;
        width: 100%;
        justify-content: center;
      }

      .toast-button {
        padding: 10px 16px;
        font-size: 1rem;
        flex: 1;
      }
    }
    
    @media (max-width: 480px) {
      html {
        font-size: 14px;
      }
      
      .resume-container {
        margin: 0 5px;
      }
      
      .section-content {
        margin: 0 2px;
      }
      
      .main-name {
        font-size: 2.2rem;
      }
      
      .contact-item {
        font-size: 1.1rem;
      }
      
      .job-title {
        font-size: 1.2rem;
        font-weight: bold !important;
        font-family: Georgia, serif !important;
      }
      
      .company-name {
        font-size: 1.1rem;
        font-style: italic !important;
        font-family: Georgia, serif !important;
      }
      
      h2 {
        font-size: 1.4rem;
        font-weight: bold !important;
        font-family: Georgia, serif !important;
      }
      
      p, li {
        font-size: 1.1rem;
        line-height: 1.4rem;
      }
      
      .toast {
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
        padding: 12px 16px;
        font-size: 1rem;
        max-width: calc(100vw - 20px);
        width: 80vw;
      }

      .toast-button {
        font-size: 0.9rem;
        padding: 8px 12px;
      }
    }
  `;
}

// Generate header section with name and contact info
function generateHeader(data: ResumeData): string {
  return `
    <div class="section-container">
      <div class="section-content">
        <div class="main-name">${data.basics.name}</div>
        <div class="secondary">
          <div class="contact-grid">
            <div class="contact-item">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 288 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M112 316.94v156.69l22.02 33.02c4.75 7.12 15.22 7.12 19.97 0L176 473.63V316.94c-10.39 1.92-21.06 3.06-32 3.06s-21.61-1.14-32-3.06zM144 0C64.47 0 0 64.47 0 144s64.47 144 144 144 144-64.47 144-144S223.53 0 144 0zm0 76c-37.5 0-68 30.5-68 68 0 6.62-5.38 12-12 12s-12-5.38-12-12c0-50.73 41.28-92 92-92 6.62 0 12 5.38 12 12s-5.38 12-12 12z"></path>
              </svg>${data.basics.location.city}, ${data.basics.location.countryCode}
            </div>
            <div class="contact-item">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
              </svg><a href="mailto:${data.basics.email}">${data.basics.email}</a>
            </div>
            <div class="contact-item">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
              </svg><a href="tel:${data.basics.phone}">${data.basics.phone}</a>
            </div>
            <div class="contact-item">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M257.981 272.971L63.638 467.314c-9.373 9.373-24.569 9.373-33.941 0L7.029 444.647c-9.357-9.357-9.375-24.522-.04-33.901L161.011 256 6.99 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L257.981 239.03c9.373 9.372 9.373 24.568 0 33.941zM640 456v-32c0-13.255-10.745-24-24-24H312c-13.255 0-24 10.745-24 24v32c0 13.255 10.745 24 24 24h304c13.255 0 24-10.745 24-24z"></path>
              </svg><a href="${data.basics.ssh}">${data.basics.ssh}</a>
            </div>
            <div class="contact-item">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"></path>
              </svg><a target="_blank" href="${data.basics.url}">${data.basics.url}</a>
            </div>
            ${data.basics.profiles.map(profile => `
              <div class="contact-item">
                ${getProfileIcon(profile.network)}
                <a href="${profile.url}">${profile.username}</a>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
    <div class="section-container">
      <div class="section-content">
        <div class="secondary">
          <p>${data.basics.summary}</p>
        </div>
      </div>
    </div>
  `;
}

// Generate Experience section
function generateExperienceSection(data: ResumeData): string {
  return `
    <div class="section-container">
      <h2>Experience</h2>
      <hr>
      <div class="section-content">
        ${data.work.map(job => `
          <div class="item-container">
            <div class="item-header">
              <div class="job-title">${job.position}</div>
              <div class="secondary">
                <div class="date-range">
                  <div class="date-text">${formatDate(job.startDate)}</div>&nbsp;—&nbsp;<div class="date-text">${job.endDate ? formatDate(job.endDate) : 'Present'}</div>
                </div>
              </div>
            </div>
            <div class="company-name">${job.name}</div>
            <div class="secondary">
              <ul class="bullet-list">
                ${job.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
              </ul>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// Generate Projects section
function generateProjectsSection(data: ResumeData): string {
  return `
    <div class="section-container">
      <h2>Projects</h2>
      <hr>
      <div class="section-content">
        ${data.projects.map(project => `
          <div class="item-container">
            <div class="item-header">
              <div class="job-title">${project.name}</div>
            </div>
            <div class="secondary">
              <ul class="bullet-list">
                ${project.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
              </ul>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// Generate Leadership Experience section
function generateLeadershipSection(data: ResumeData): string {
  if(!data.volunteer) {
    return '';
  }
  return `
  
    <div class="section-container">
      <h2>Leadership Experience</h2>
      <hr>
      <div class="section-content">
        ${data.volunteer.map(role => `
          <div class="item-container">
            <div class="item-header">
              <div class="job-title">${role.position}</div>
              <div class="secondary">
                <div class="date-range">
                  <div class="date-text">${formatDate(role.startDate)}</div>&nbsp;—&nbsp;<div class="date-text">${role.endDate ? formatDate(role.endDate) : 'Present'}</div>
                </div>
              </div>
            </div>
            <div class="company-name">${role.organization}</div>
            <div class="secondary">
              <ul class="bullet-list">
                ${role.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
              </ul>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// Generate Education section
function generateEducationSection(data: ResumeData): string {
  return `
    <div class="section-container education-section">
      <h2>Education</h2>
      <hr>
      <div class="section-content">
        ${data.education.map(edu => `
          <div class="item-container">
            <div class="item-header">
              <div class="job-title">${edu.institution}</div>
              <div class="secondary">
                <div class="date-range">
                  <div class="date-text">${formatDate(edu.startDate)}</div>&nbsp;—&nbsp;<div class="date-text">${edu.endDate ? formatDate(edu.endDate) : 'Present'}</div>
                </div>
              </div>
            </div>
            <div class="company-name">${edu.studyType}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// Generate Awards and Certificates section
function generateAwardsAndCertificatesSection(data: ResumeData): string {
  if(!data.awards) {
    return '';
  }
  const sortedAwards = [...data.awards].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const sortedCertificates = [...data.certificates].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const awardsText = sortedAwards.map(award => `${award.title} - ${award.date.split('-')[0]}`).join('&nbsp;<br>');
  const certificatesText = sortedCertificates.map(cert => cert.name).join('&nbsp;<br>');

  return `
    <div class="section-container">
      <h2>Awards & Certifications</h2>
      <hr>
      <div class="section-content">
        <div class="skill-row">
          <div class="skill-label">Awards:</div>
          <div class="skill-value">
            <div class="secondary">${awardsText}</div>
          </div>
        </div>
        <div class="skill-row">
          <div class="skill-label">Certifications:</div>
          <div class="skill-value">
            <div class="secondary">${certificatesText}</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Generate Skills section
function generateSkillsSection(data: ResumeData): string {
  return `
    <div class="section-container">
      <h2>Skills</h2>
      <hr>
      <div class="section-content">
        ${data.skills.map(skill => `
          <div class="skill-row">
            <div class="skill-label">${skill.name}:</div>
            <div class="skill-value">
              <div class="secondary">${skill.keywords.join(', ')}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// Generate toast component
function generateToast(data: ResumeData): string {
  const linkedinProfile = data.basics.profiles.find(profile => profile.network === 'LinkedIn');
  const linkedinUrl = linkedinProfile?.url || '#';
  
  return `
    <div class="toast" id="toast">
      <div class="toast-text">Like what you see?</div>
      <div class="toast-buttons">
        <a href="${linkedinUrl}" target="_blank" class="toast-button">LinkedIn</a>
        <a href="#" class="toast-button">Download Resume</a>
      </div>
    </div>
    <script>
      setTimeout(function() {
        document.getElementById('toast').classList.add('show');
      }, 3000);
    </script>
  `;
}

// Main function to render complete HTML
export function renderResume(data: ResumeData = resumeData): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <title>${data.basics.name} - Resume</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    ${generateStyles()}
  </style>
</head>
<body>
  <div class="resume-container">
    ${generateHeader(data)}
    ${generateExperienceSection(data)}
    ${generateProjectsSection(data)}
    ${generateLeadershipSection(data)}
    ${generateEducationSection(data)}
    ${generateAwardsAndCertificatesSection(data)}
    ${generateSkillsSection(data)}
  </div>
  ${generateToast(data)}
</body>
</html>
  `.trim();
}

// Export individual section generators for flexibility
export {
  generateHeader,
  generateExperienceSection,
  generateProjectsSection,
  generateLeadershipSection,
  generateEducationSection,
  generateAwardsAndCertificatesSection,
  generateSkillsSection,
  generateToast,
  formatDate
};