function changeSelectionHome() {
  document.getElementById("home-box").style.opacity = 1;
  document.getElementById("resume-box").style.opacity = 0;
  document.getElementById("skill-box").style.opacity = 0;
  document.getElementById("port-box").style.opacity = 0;
  document.getElementById("contact-box").style.opacity = 0;
}
function changeSelectionResume() {
  document.getElementById("home-box").style.opacity = 0;
  document.getElementById("resume-box").style.opacity = 1;
  document.getElementById("skill-box").style.opacity = 0;
  document.getElementById("port-box").style.opacity = 0;
  document.getElementById("contact-box").style.opacity = 0;
}
function changeSelectionSkill() {
  document.getElementById("home-box").style.opacity = 0;
  document.getElementById("resume-box").style.opacity = 0;
  document.getElementById("skill-box").style.opacity = 1;
  document.getElementById("port-box").style.opacity = 0;
  document.getElementById("contact-box").style.opacity = 0;
}
function changeSelectionPort() {
  document.getElementById("home-box").style.opacity = 0;
  document.getElementById("resume-box").style.opacity = 0;
  document.getElementById("skill-box").style.opacity = 0;
  document.getElementById("port-box").style.opacity = 1;
  document.getElementById("contact-box").style.opacity = 0;
}
function changeSelectionContact() {
  document.getElementById("home-box").style.opacity = 0;
  document.getElementById("resume-box").style.opacity = 0;
  document.getElementById("skill-box").style.opacity = 0;
  document.getElementById("port-box").style.opacity = 0;
  document.getElementById("contact-box").style.opacity = 1;
}
