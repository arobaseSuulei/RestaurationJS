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



/*function searchMenu() {
            // Code pour rechercher le plat à modifier
            // Une fois le plat trouvé, afficher les détails et le formulaire de modification
            document.getElementById('menuDetails').style.display = 'block';
        }

        const editMenuForm = document.getElementById('editMenuForm');

        editMenuForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const nomMenu = document.getElementById('nomMenu').value;
            const description = document.getElementById('description').value;
            const prix = document.getElementById('prix').value;

            // Envoi de la requête à l'API pour enregistrer les modifications du menu
            // Assurez-vous de remplacer l'URL de l'API et les détails de l'API par les vôtres
            fetch('https://api-restauration.com/menus/id', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nom: nomMenu, description: description, prix: prix }),
            })
            .then(response => response.json())
            .then(data => {
                alert('Modifications enregistrées avec succès !');
                // Rediriger vers la page Afficher Menu
                window.location.href = 'afficherMenu.html';
            })
            .catch(error => {
                console.error('Erreur lors de l\'enregistrement des modifications :', error);
            });
        });
        */