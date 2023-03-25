const Home = {
    template: `
    <div clas = "main-container">
        <h1>Welcome to My Portfolio</h1>
        <p>Hi, I'm Luis, a Full Stack Developer based in Dallas.</p>
          <div class="nav-buttons">
            <router-link to="/projects" class="nav-button">Projects</router-link>
            <router-link to="/skills" class="nav-button">Skills</router-link>
            <router-link to="/contact" class="nav-button">Contact</router-link>
        </div>
    </div>
    `
};

const Projects = {
    template: `
    <div class="main-container">
        <h1>Projects</h1>
        <div class="projects">
            <a href="https://www.godcodenabled.com" target = "blank" rel= "noopener noreferrer" class = "project">
                <img src="/static/inv-man.png" alt="Project 1" class="project-image">
                <p class="project-title">Inventory Budget Manager</p>
            </a>    
          
            <a href="https://sample-site.godcodeenabled.repl.co" target = "blank" rel= "noopener noreferrer" class = "project">
                <img src="/static/funathon.png" alt="Project 2" class="project-image">
                <p class="project-title">Registration Sample Site</p>  
            </a>    

            <a href="https://simple-pokemon-table.godcodeenabled.repl.co" target = "blank" rel= "noopener noreferrer" class = "project">
                <img src="/static/poketable.png" alt="Project 3" class="project-image">
                <p class="project-title">Pokemon Type Table</p>  
            </a>    

            <a href="https://replit.com/@GodCodeEnabled" target = "blank" rel= "noopener noreferrer" class = "project">
                <img src="/static/replit.png" alt="Project 3" class="project-image">
                <p class="project-title">More Projects on Replit</p>  
            </a> 

        </div>
    </div>
    `
};

const Skills = {
  template: `
    <div>
      <h1>Skills</h1>
      <div class="skills-container">
        <div class="skill-card">
          <h2>Frontend</h2>
          <ul>
            <li>
              <strong>HTML</strong>
              <progress value="90" max="100"></progress>
            </li>
            <li>
              <strong>CSS</strong>
              <progress value="85" max="100"></progress>
            </li>
            <li>
              <strong>JavaScript</strong>
              <progress value="80" max="100"></progress>
            </li>
            <li>
              <strong>Vue.js</strong>
              <progress value="70" max="100"></progress>
            </li>
          </ul>
        </div>
        <div class="skill-card">
          <h2>Backend</h2>
          <ul>
            <li>
              <strong>Python</strong>
              <progress value="80" max="100"></progress>
            </li>
            <li>
              <strong>Flask</strong>
              <progress value="75" max="100"></progress>
            </li>
            <li>
              <strong>Django</strong>
              <progress value="50" max="100"></progress>
            </li>
            <li>
              <strong>Java</strong>
              <progress value="45" max="100"></progress>
            </li>
          </ul>
        </div>
        <div class="skill-card">
          <h2>DevOps & Tools</h2>
          <ul>
            <li>
              <strong>AWS</strong>
              <progress value="70" max="100"></progress>
            </li>
            <li>
              <strong>Docker</strong>
              <progress value="75" max="100"></progress>
            </li>
            <li>
              <strong>Linux</strong>
              <progress value="80" max="100"></progress>
            </li>
          </ul>
        </div>
      </div>
    </div>
  `
};


const Contact = {
  template: `
    <div>
      <h1>Contact</h1>
      <p>If you'd like to get in touch, feel free to contact me through any of the following methods:</p>
      <ul class="contact-list">
        <li>
          <a href="mailto:lu.tor324@gmail.com" class="contact-button">
            <i class="fas fa-envelope"></i><span> Email: lu.tor324@gmail.com</span>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/lu-tor/" target="_blank" rel="noopener noreferrer" class="contact-button">
            <i class="fab fa-linkedin"></i><span> LinkedIn: Luis Torres</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/god-code-enabled" target="_blank" rel="noopener noreferrer" class="contact-button">
            <i class="fab fa-github"></i><span> GitHub: god-code-enabled</span>
          </a>
        </li>
      </ul>
    </div>
  `
};




// app.js
const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/projects', component: Projects },
    { path: '/skills', component: Skills },
    { path: '/contact', component: Contact },
  ],
});

new Vue({
  router,
}).$mount('#app');