// Smooth scrolling for navbar links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Dark mode toggle
  const toggleBtn = document.createElement('button');
  toggleBtn.innerText = "🌙 Dark Mode";
  toggleBtn.style.position = "fixed";
  toggleBtn.style.bottom = "20px";
  toggleBtn.style.right = "20px";
  toggleBtn.style.padding = "10px 15px";
  toggleBtn.style.border = "none";
  toggleBtn.style.borderRadius = "5px";
  toggleBtn.style.background = "#4CAF50";
  toggleBtn.style.color = "#fff";
  toggleBtn.style.cursor = "pointer";
  document.body.appendChild(toggleBtn);
  
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
      toggleBtn.innerText = "☀️ Light Mode";
    } else {
      toggleBtn.innerText = "🌙 Dark Mode";
    }
  });
  