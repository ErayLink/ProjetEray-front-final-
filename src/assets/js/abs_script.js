window.addEventListener('DOMContentLoaded', function() {
const abs = document.getElementById("abs_");
const bd_inner = document.getElementById("container-fluid-div_first")
abs.addEventListener("click", () => {
abs.style.background = '#b6d1f794';
const get_cour = document.getElementById("cours_div");
const get_edt = document.getElementById("edt");
if (cours_div.style.background == "rgba(182, 209, 247, 0.58) none repeat scroll 0% 0%") {
cours_div.style.background = "none";
}
if (edt.style.background == "rgba(182, 209, 247, 0.58) none repeat scroll 0% 0%") {
edt.style.background = "none";
}
bd_inner.style.display = "none";
const new_abs = document.getElementById("main_");
new_abs.innerHTML = `<div class="container-fluid pb-3" id="container-fluid-div_first">
    <div class="d-grid gap-3" style="grid-template-columns: 1fr 2fr;">
        <div class="bg-body-tertiary border rounded-3">
            <div class="container mt-4" id="container-mt4_div_2">
                <div class="row" id="tertiary_id">
                    <center>
                        <div class="col-md-6">
                            <center>
                            <p id = "abs_none" >Absence</p>
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
        <div class="bg-body-tertiary border rounded-3 p-3">
            <div class="card">
                <div class="card-header text-center">
                    Deposer la ficher de presence L1
                </div>
                <div class="card-body">
                    <div class="list-group ">
                        <textarea id = "abs_rmq" class = "" placeholder="Ajouter Un commentaire..."></textarea>
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
        <div id="divd">
            <p></p>
        </div>
    </div>`;
    //new_abs.style.background = '';
    const card_div = document.getElementById("card_div");
    //card_div.style.width = 'fit-content';
    const tcol_md6_id = document.getElementById("col_md6_id");
    const contenuClone = new_abs.cloneNode(true);
    //new_abs.appendChild(contenuClone);
    });
    });
    const container_fluid_div_first = document.getElementById("container-fluid-div_first");
    //const contenc = container_fluid_div_first.cloneNode(true);
    const div_2 = document.getElementById("div");
    //div_2.innerHTML = `<p></p>`;






    /*   <div class="col">
          <div class="card shadow-sm">
           
              <center><p class="card-text">Sciences et Technologies</p></center>
              
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View<center><p class="card-text">Sciences et Technologies</p></center></button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
             
              </div>
            </div>
          </div>


          */