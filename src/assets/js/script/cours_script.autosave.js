window.addEventListener('DOMContentLoaded', function() {

    const cours = document.getElementById("cours_div");

    cours.addEventListener("click", () => { //quand l'utilisateur click cours

        const fluid = document.getElementById('container-fluid-div_first');

        const cours = document.getElementById("cours_div");
        const  ge_asbs = document.getElementById("abs");
        cours.style.background = '#b6d1f794'; //ajout background couleur 
  

        const edt_cours = document.getElementById("edt");

        if (edt_cours.style.background = "rgba(182, 209, 247, 0.58) none repeat scroll 0% 0%")

        {
            edt_cours.style.background = "none";


        }

        var gt_abs_none = document.getElementById("abs_none");

        var abcv = gt_abs_none




        if (gt_abs_none === "Cours") {

            ge_asbs.background = "none";

            alert('hi');
        }


    
        
        //fluid.style.display = 'none';
        fluid.innerHTML = `
            <div class="d-grid gap-3" style="grid-template-columns: 1fr 2fr;">
                <div class="bg-body-tertiary border rounded-3">
                    <div class="container mt-4" id="container-mt4_div_2">
                        <div class="row" id="tertiary_id">
                            <center>
                                <div class="col-md-6">
                                    <center>
                                        <p id = "abs_none" >Cours</p>
                                        <div class="card">
                                            <div class="card-header text-center">
                                                Niveau académique
                                            </div>
                                            <div class="card-body">
                                                <ul class="list-group">
                                                    <li class="list-group-item"><a class="btn btn-outline-secondary " id="L1">
                                                            L1</a></li>
                                                    <li class="list-group-item"><a class="btn btn-outline-secondary " id="l2_fi" href="#">L2</a></li>
                                                    <li class="list-group-item"><a class="btn btn-outline-secondary " id="l3_fi" href="#">L3</a></li>
                                                    <li class="list-group-item"><a class="btn btn-outline-secondary " id="m1_fi" href="#">M1</a></li>
                                                    <li class="list-group-item"><a class="btn btn-outline-secondary " id="m2_fi" href="#">M2</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </center>
                                </div>
                            </center>
                        </div>
                    </div>
                </div>
                <div class="bg-body-tertiary border rounded-3" id="tertiary_id">
         
                   
                </div>
            </div>
            `;

        


        const create_cours = document.createElement("div");


    });
});



function print_aff() {
    let aff = document.getElementById("inner_page");
    aff.innerHTML = `

             <div class="modal fade" id="firefoxModal" tabindex="1" aria-labelledby="firefoxModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-4" id="firefoxModalLabel"> L1 Ecologie</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div id="modal_div_id_en" class="modal-body">
                    <div class="bg-body-tertiary border rounded-3 p-3">
                        <div class="card">
                            <div class="card-header text-center">
                                Deposer l'emplois du temps L1 
                            </div>
                            <div class="card-body">
                                <div class="list-group ">
                                    <textarea id="abs_rmq" class="" placeholder="Ajouter Un commentaire..."></textarea>
                                    <br><br><br>
                                    <input type="date" name="" id="input" class="" value="" required="required" title="Date">
                                </div />
                                <br><br><br><br><br><br><br><br><br>
                                <ul class="list-group">
                                    <input type="file" id="abs_file" value="Rejoindre ficher" class="form-control">
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>

    `;
};

function print_aff_sg() {
    let aff = document.getElementById("inner_page");
    aff.innerHTML = `

             <div class="modal fade show" id="firefoxModal" tabindex="1" aria-labelledby="firefoxModalLabel" style="display: block;" aria-modal="true" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-4" id="firefoxModalLabel"> L1</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div id="modal_div_id_en" class="modal-body">
                    <div class="bg-body-tertiary border rounded-3 p-3">
                        <div class="card">
                            <div class="card-header text-center">
                                Deposer la ficher de presence L1
                            </div>
                            <div class="card-body">
                                <div class="list-group ">
                                    <textarea id="abs_rmq" class="" placeholder="Ajouter Un commentaire..."></textarea>
                                    <br><br><br>
                                    <input type="date" name="" id="input" class="" value="" required="required" title="Date">
                                </div>
                                <br><br><br><br><br><br><br><br><br>
                                <ul class="list-group">
                                    <input type="file" id="abs_file" value="Rejoindre ficher" class="form-control">
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>

    `;
};


