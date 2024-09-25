window.addEventListener('DOMContentLoaded', function() {


	const edt = document.getElementById("edt");  // id click emplois du temps 

	edt.addEventListener("click", () => {

        const get_cour = document.getElementById("cours_div");
        const get_edt = document.getElementById("edt");

        edt.style.background = "#b6d1f794";

        if (cours_div.style.background == "rgba(182, 209, 247, 0.58) none repeat scroll 0% 0%") {

            
            cours_div.style.background = "none";



        }

        const abs_color = document.getElementById("abs");

            if (abs_color.style.background = edt.style.background) {

                abs_color.style.background = "none";
                alert("hi");
            }



		const remplacer = document.getElementById("container-fluid-div_first");   //menu edt //
		remplacer.innerHTML = `<div class="container-fluid pb-3" id="container-fluid-div_first">
            <div class="d-grid gap-3" style="grid-template-columns: 1fr 2fr;">
                <div class="bg-body-tertiary border rounded-3">
                    <div class="container mt-4" id="container-mt4_div_2">
                        <div class="row" id="tertiary_id">
                            <center>
                                <div class="col-md-6">
                                    <center>
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
                    <div class="container mt-4">
                        <div class="row" id="row2-id1">
                            <div class="col-md-6" id="col-md-6_filiere">
                                <div class="card" id="card-none">
                                </div>
                            </div>
                            <div id="test">
                                <p id="testz">
                                </p>
                                <img id="preview" class="img-fluid" src="">
                                <input type="file" name="" id="inputfile">
                                <embed id="pdfViewer" src="" type="application/pdf" width="auto" height="auto">
                            </div>
                            <div id="creat">
                                <p><br><br><br>
                                    Ici vous pouvez voir tous les filières disponible sur L1
                                    <br><br><br>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="container mt-4" id="container-mt4_div">
                        <div class="row">
                            <div class="col-md-6id">
                                <p href="#"><br><br>
                                    Ici vous pouvez modifier, supprimer, ajouter tous les emplois du temps de chaque niveau d'étude académique dans chaque filière et matière.
                                    <br><br>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br>
            <div id="divd">
                <p></p>
            </div>
        </div>`;

            
	});



});