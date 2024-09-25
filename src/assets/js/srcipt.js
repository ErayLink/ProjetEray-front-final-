window.addEventListener('DOMContentLoaded', function() {

    // Obtenir les éléments HTML
    const modal = document.getElementById("card-none");
    const btn = document.getElementById("L1");

    const creat = document.getElementById('creat');

    const create = document.getElementById("creat");
    const inser = document.getElementById("testz");
    const inputfile = document.getElementById('inputfile');

    //const l2 = document.getElementById('l2');
    //const L3 = document.getElementById('L3');
    //const M1 = document.getElementById('M1');
    //const M2 = document.getElementById('M2');


    // Lorsque le bouton est cliqué
    btn.addEventListener('mouseover', () => {

        const card_none1 = document.getElementById("row2-id1");
        card_none1.innerHTML = `
<div class="col">
    <div class="col ">
        <div class="btn btn-sm btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#firefoxModal"id="filiere_">
            <p class="card" id="t_filiere" >Ecologie</p> <img src="image/SVT.jpeg" class="devvv" id='img_cours'onclick="print_aff()">
            <center>
        </div>
        <div class="btn btn-sm btn-outline-secondary" id="filiere_">
            <p class="card" id="t_filiere" >Sciences de l'ingénieur</p> <img src="image/SVT.jpeg" class="" id='img_cours' onclick="print_aff_sg()">
            <center>
        </div>
        <div class="btn btn-sm btn-outline-secondary" id="filiere_">
            <p class="card" id="t_filiere" >Sciences humaines et sociales</p> <img src="image/SVT.jpeg" class="" id='img_cours'>
            <center>
        </div>
        <div class="btn btn-sm btn-outline-secondary" id="filiere_">
            <p class="card" id="t_filiere">Ecologie</p> <img src="image/SVT.jpeg" class="" id='img_cours'>
            <center>
        </div>
        <div class="btn btn-sm btn-outline-secondary" id="filiere_">
            <p class="card" id="t_filiere">Ecologie</p> <img src="image/SVT.jpeg" class="" id='img_cours'>
            <center>
        </div>
        <div class="btn btn-sm btn-outline-secondary" id="filiere_">
            <p class="card" id="t_filiere">Ecologie</p> <img src="image/SVT.jpeg" class="" id='img_cours'>
            <center>
        </div>
    </div>
<button type="button" id="filiee_r" class="btn btn-primary">Voirs plus</button>


        
        

        

        `

        modal.style.display = "block";
        const time = document.getElementById("L1");


        if (true) {

            const assist = document.getElementById("container-mt4_div");
            assist.style.display = "none";
            if (creat.style.display = "none") {


                creat.style.display = "unset";

                if (inputfile.style.display = 'unset') {

                    inser.innerHTML = `<p><span></p>`;
                    inputfile.style.display = 'none';

                }

                create.innerHTML = `


                    <p>
                    
                    Filière  L1:<br>Filiere =L1-1<br><span></span> Filiere = L1-2
                                        
                    </p>`;

                create.style.background = '#41556740';

                const change_colmd6_fi = document.getElementById("card-none");

                if (change_colmd6_fi) {

                    change_colmd6_fi.style.background = "#008b8b30";

                }





            }

        }
        //alert('hellp');
    });

    // Lorsque l'utilisateur clique en dehors de la fenêtre modale ou sur le bouton de fermeture




    window.onclick =
        function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

    const itemfiliere = document.getElementById("itemfiliere");

    itemfiliere.addEventListener("click", () => {
        const testzz = document.getElementById("testz");
        //const cdiv = document.createElement("div");
        const cp = document.createElement("p");
        const inputfile = document.getElementById("inputfile");

        if (creat.style.display = "unset") {

            creat.style.display = "none";


        }

        if (inputfile.style.display = "none") {

            inputfile.style.display = "unset";
        }


        const in_ptes = document.getElementById('test');
        const in_ptes_file = document.createElement("input");
        //in_ptes_file

        // in_ptes.innerHTML = "<p id = 'testz'>Inserer le document L1<p><input type ='file' id='inputfile'></p></p>";



        testzz.textContent = "Inserer le document L1";
        const a = document.createElement('<label for="input-id" class="col-sm-2"></label>');
        testzz.appendChild(a);




    });

    const colmd6_filiere = document.getElementById("col-md-6_filiere")



    const imageInput = document.getElementById('inputfile');
    const imagePreview = document.getElementById('preview');

    imageInput.addEventListener('change', () => {
        const file = imageInput.files[0];

        colmd6_filiere.style.display = "none";

        if (file) {
            const reader = new FileReader();

            reader.onload = (e) => {
                imagePreview.src = e.target.result;
            };

            reader.readAsDataURL(file);
        }

        const abc = document.getElementById("testz");
        abc.innerHTML = `<button type="button"  id = "send" class="btn btn-default">Envoyer</button>`
        const sender = document.getElementById('send');
        sender.addEventListener('change', () => {

            const xhr = new XMLHttpRequest();
            const nom = document.getElementById('preview').value;

            const url = `#=${nom}`;

            xhr.open('GET', url, true);
            xhr.onload = function() {
                if (xhr.status === 200) {
                    console.log(xhr.responseText);
                } else {
                    console.error('Une erreur est survenue');
                }
            };
            xhr.send();


        });


    });


});





/*<div class="card" id="card-none" style="display: block;">
                                    <div class="card-header text-center"> Filière
                                        <a href="#" id="close">X</a>
                                    </div>
                                    <div class="card-body">
                                        <ul class="list-group">
                                            <li class="list-group-item"><a id="itemfiliere" href="#">Economie<br> </a></li>
                                            <li class="list-group-item"> <a id="itemfiliere2">Commerce<br></a></li>
                                      
                                        </ul>
                                        
                                    </div>
                                    <div class="card-body">
                                        <ul class="list-group">
                                            <li class="list-group-item"><a id="itemfiliere" href="#">Informatique<br> </a></li>
                                            <li class="list-group-item"> <a href=""></a> Gestion<br></li>
                                  
                                        </ul>
                                        
                                    </div>
                                </div>


                                */