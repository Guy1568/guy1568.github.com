// Gestion de l'envoi du formulaire de contact
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche l'envoi par défaut du formulaire
    alert("Merci, votre message a été envoyé !");
    this.reset(); // Réinitialise le formulaire
});
