function soumettreFormulaire() {
  const nom = document.getElementById('nom').value;
  const prenom = document.getElementById('prenom').value;
  const url = `https://monsite.com/traitement.php?nom=${nom}&prenom=${prenom}`;
  window.location.href = url;
}





  const xhr = new XMLHttpRequest();
  const nom = document.getElementById('preview').value;
  
  const url = `https://monsite.com/traitement.php?nom=${nom}`;

  xhr.open('GET', url, true);
  xhr.onload = function() {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
    } else {
      console.error('Une erreur est survenue');
    }
  };
  xhr.send();
