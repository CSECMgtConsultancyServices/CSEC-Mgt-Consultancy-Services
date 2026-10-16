const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
if (menu) {
  menu.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menu.setAttribute("aria-expanded", String(open));
  });
}
document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menu?.setAttribute("aria-expanded", "false");
  });
});
document.getElementById("year").textContent = new Date().getFullYear();

// CV interest form: prepares a draft email; it does not upload files to a server.
const cvForm = document.getElementById("cv-form");
if (cvForm) {
  cvForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("cv-name").value.trim();
    const email = document.getElementById("cv-email").value.trim();
    const phone = document.getElementById("cv-phone").value.trim();
    const role = document.getElementById("cv-role").value.trim();
    const consent = document.getElementById("cv-consent").checked;
    if (!consent) return;
    const subject = encodeURIComponent("Future Career Opportunity - " + name);
    const body = encodeURIComponent(
      "Dear CSEC Team,\n\nI would like to submit my profile for future opportunities.\n\n" +
      "Full name: " + name + "\nEmail: " + email + "\nPhone: " + (phone || "Not provided") +
      "\nArea of interest / preferred position: " + role +
      "\n\nI consent to CSEC using the information provided to consider me for recruitment and future employment opportunities.\n\n" +
      "I will attach my CV to this email before sending.\n\nKind regards,\n" + name
    );
    window.location.href = "mailto:CSEC.MGT.CONSULTANCYSERVICES@GMAIL.COM?subject=" + subject + "&body=" + body;
  });
}
