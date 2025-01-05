function validateForm() {
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const id = document.getElementById('id').value;
    const tel = document.getElementById('tel').value;

    // Vérifier si les champs sont remplis
    if (nom === '' || prenom === '' || id === '' || tel === '') {
        alert('Veuillez remplir tous les champs.');
        return false;
    }

    // Vérifier si l'identifiant est valide
    const idPattern = /[A-Za-z]{3}[0-9]{3}/;
    if (!idPattern.test(id)) {
        alert('L\'identifiant doit être de la forme \'ABC123\'.');
        return false;
    }

    // Vérifier si le numéro de téléphone est valide
    const telPattern = /[0-9]{10}/;
    if (!telPattern.test(tel)) {
        alert('Le numéro de téléphone doit contenir 10 chiffres.');
        return false;
    }

    // Si tout est valide, afficher un message de succès
    alert('Formulaire d\'administrateur validé avec succès!');
    return true;
}



