const anneeAcademiqueSelect = document.getElementById('anneeAcademique');
const filiereButtons = document.getElementById('filiereButtons');
const courseContainer = document.getElementById('courseContainer');
const titreCours = document.getElementById('titreCours');
const addFiliereBtn = document.getElementById('addFiliereBtn');
const nouvelleFiliereInput = document.getElementById('nouvelleFiliere');
const createFormContainer = document.getElementById('createFormContainer');
const manageFormContainer = document.getElementById('manageFormContainer');
const closeCreateFormBtn = document.getElementById('closeCreateFormBtn');
const closeManageFormBtn = document.getElementById('closeManageFormBtn');

// Afficher le formulaire de création lors du clic sur le bouton "Créer"
document.getElementById('createCourseBtn').addEventListener('click', () => {
    createFormContainer.style.display = 'block';
});

// Afficher le formulaire de gestion lors du clic sur le bouton "Gérer"
document.querySelectorAll('.course button[id="manageCourseBtn"]').forEach(button => {
    button.addEventListener('click', () => {
        manageFormContainer.style.display = 'block';
    });
});

// Fermer le formulaire de création
closeCreateFormBtn.addEventListener('click', () => {
    createFormContainer.style.display = 'none';
});

// Fermer le formulaire de gestion
closeManageFormBtn.addEventListener('click', () => {
    manageFormContainer.style.display = 'none';
});

// Gérer l'envoi du formulaire de création
document.getElementById('createCourseForm').addEventListener('submit', (event) => {
    event.preventDefault();
    // Ajouter la logique pour traiter le formulaire de création ici
    alert('Cours créé avec succès!');
    createFormContainer.style.display = 'none'; // Fermer le formulaire après soumission
});

// Gérer l'envoi du formulaire de gestion
document.getElementById('manageCourseForm').addEventListener('submit', (event) => {
    event.preventDefault();
    // Ajouter la logique pour traiter le formulaire de gestion ici
    alert('Cours mis à jour avec succès!');
    manageFormContainer.style.display = 'none'; // Fermer le formulaire après soumission
});

// Liste de filières existantes
const filieresExistants = [];
const filieres = []; // Stocke les filières ajoutées

// Fonction pour gérer la sélection de filière
function selectFiliere(filiere) {
    titreCours.textContent = `Cours pour la filière: ${filiere}`; // Correction de la syntaxe
    courseContainer.style.display = 'block'; // Afficher le conteneur des cours
    updateBrowserUrl(filiere); // Mettre à jour l'URL dans le navigateur
}

// Fonction pour ajouter une nouvelle filière
addFiliereBtn.addEventListener('click', function() {
    const nouvelleFiliere = nouvelleFiliereInput.value.trim();
    const selectedAnnee = anneeAcademiqueSelect.value;

    // Vérifier si une année académique est sélectionnée
    if (!selectedAnnee) {
        alert("Veuillez sélectionner une année académique avant d'ajouter une filière.");
        return; // Sortir de la fonction si aucune année académique n'est sélectionnée
    }

    if (nouvelleFiliere) {
        filieres.push(nouvelleFiliere);
        nouvelleFiliereInput.value = ""; // Réinitialiser le champ
        updateFiliereButtons(); // Met à jour l'affichage des filières
    }
});

// Fonction pour supprimer une filière
function deleteFiliere(filiere) {
    const index = filieres.indexOf(filiere);
    if (index > -1) {
        filieres.splice(index, 1); // Supprimer la filière
        updateFiliereButtons(); // Mettre à jour l'affichage
    }
}

// Mettre à jour l'affichage des boutons de filières
function updateFiliereButtons() {
    filiereButtons.innerHTML = ""; // Vider les boutons de filières précédents
    
    // Afficher les filières existantes
    filieresExistants.forEach(filiere => {
        const button = document.createElement('div');
        button.className = 'filiere-item';

        const filiereButton = document.createElement('button');
        filiereButton.textContent = filiere;
        filiereButton.onclick = () => selectFiliere(filiere); // Fonction pour sélectionner la filière

        const deleteIcon = document.createElement('span');
        deleteIcon.textContent = '❌'; // Icône de suppression
        deleteIcon.style.cursor = 'pointer';
        deleteIcon.onclick = (e) => {
            e.stopPropagation(); // Empêcher la propagation de l'événement
            deleteFiliere(filiere); // Appeler la fonction de suppression
        };

        button.appendChild(filiereButton);
        button.appendChild(deleteIcon);
        filiereButtons.appendChild(button);
    });

    // Afficher également les nouvelles filières ajoutées
    filieres.forEach(filiere => {
        const button = document.createElement('div');
        button.className = 'filiere-item';

        const filiereButton = document.createElement('button');
        filiereButton.textContent = filiere;
        filiereButton.onclick = () => selectFiliere(filiere); // Fonction pour sélectionner la filière

        const deleteIcon = document.createElement('span');
        deleteIcon.textContent = '❌'; // Icône de suppression
        deleteIcon.style.cursor = 'pointer';
        deleteIcon.onclick = (e) => {
            e.stopPropagation(); // Empêcher la propagation de l'événement
            deleteFiliere(filiere); // Appeler la fonction de suppression
        };

        button.appendChild(filiereButton);
        button.appendChild(deleteIcon);
        filiereButtons.appendChild(button);
    });
}

// Gérer le changement de l'année académique
anneeAcademiqueSelect.addEventListener('change', function() {
    if (this.value !== "") {
        updateFiliereButtons(); // Met à jour l'affichage des filières
    } else {
        courseContainer.style.display = 'none'; // Masquer les cours
        titreCours.textContent = ""; // Effacer le titre des cours
        filiereButtons.innerHTML = ""; // Vider les boutons de filières
    }
});

// Afficher les cours uniquement lorsque la filière est sélectionnée
filiereButtons.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        const selectedFiliere = event.target.textContent;
        if (anneeAcademiqueSelect.value !== "") {
            titreCours.textContent = `${selectedFiliere} ${anneeAcademiqueSelect.value}`; // Correction de la syntaxe
            courseContainer.style.display = 'flex'; // Afficher les cours
            updateBrowserUrl(selectedFiliere); // Mettre à jour l'URL dans le navigateur
        }
    }
});

// Fonction pour mettre à jour l'URL dans le navigateur
function updateBrowserUrl(filiere) {
    const selectedAnnee = anneeAcademiqueSelect.value;

    if (selectedAnnee && filiere) {
        // Construire l'URL avec les paramètres
        const newUrl = `?annee=${encodeURIComponent(selectedAnnee)}&filiere=${encodeURIComponent(filiere)}`; // Correction de la syntaxe

        // Mettre à jour l'URL dans le navigateur sans recharger la page
        history.pushState(null, '', newUrl);
    } else {
        // Réinitialiser l'URL si rien n'est sélectionné
        history.pushState(null, '', window.location.pathname);
    }
}

