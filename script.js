document.addEventListener("DOMContentLoaded", () => {
  const navCollapse = document.getElementById("mainNav");
  const navLinks = document.querySelectorAll("#mainNav .nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navCollapse.classList.contains("show")) {
        bootstrap.Collapse.getOrCreateInstance(navCollapse).hide();
      }
    });
  });

  const form = document.getElementById("contactForm");
  const feedback = document.getElementById("formFeedback");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const messaggio = document.getElementById("messaggio").value.trim();

    if (!nome || !email.includes("@") || messaggio.length < 20) {
      feedback.className = "alert alert-danger small";
      feedback.textContent = "Inserisci nome, un'email valida e un messaggio di almeno 20 caratteri.";
      return;
    }

    feedback.className = "alert alert-success small";
    feedback.textContent = "Richiesta inviata. Ti risponderemo entro 48 ore.";
    form.reset();
  });
});
