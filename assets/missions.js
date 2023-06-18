// This is where all the missions are defined for the season. Ideally, each season, you only have to edit this file, but there are some small areas that need to be changed elsewhere.
// This uses html.js to draw all the missions to the screen.
// Mission loader v2.0 Dynamic Content Replacer

// Defines a blank save for reset

specialCasesComplete = 0

function specialCasesCheck(mission) {
    console.log("check",mission)
    if (specialCasesComplete != 1) {
        specialCasesComplete = 1
    } else { return }
    // console.log(document.getElementById("yestransportationJourney1").checked)

    if (mission == "transportationJourney1") {
        if (document.getElementById("yestransportationJourney1").checked && document.getElementById("yestransportationJourney2").checked) {
            recalc(20, "transportationJourney2", 1)
            recalc(10, "transportationJourney1", 1)
        } else {
            recalc(10 * document.getElementById("yestransportationJourney2").checked, "transportationJourney1", document.getElementById("yestransportationJourney2").checked*1)
        }
    }
    if (mission == "transportationJourney2") {
        if (document.getElementById("yestransportationJourney1").checked && document.getElementById("yestransportationJourney2").checked) {
            recalc(20, "transportationJourney1", 1)
            recalc(10, "transportationJourney2", 1)
        } else {
            recalc(10 * document.getElementById("yestransportationJourney1").checked, "transportationJourney1", document.getElementById("yestransportationJourney1").checked*1)
        }
    }

    if (mission == "platooningTrucks1") {
        if (document.getElementById("yesplatooningTrucks1").checked && document.getElementById("yesplatooningTrucks2").checked) {
            recalc(20, "platooningTrucks2", 1)
            recalc(10, "platooningTrucks1", 1)
        } else {
            recalc(10 * document.getElementById("yesplatooningTrucks2").checked, "platooningTrucks1", document.getElementById("yesplatooningTrucks2").checked*1)
        }
    }
    if (mission == "platooningTrucks2") {
        if (document.getElementById("yesplatooningTrucks1").checked && document.getElementById("yesplatooningTrucks2").checked) {
            recalc(20, "platooningTrucks1", 1)
            recalc(10, "platooningTrucks2", 1)
        } else {
            recalc(10 * document.getElementById("yesplatooningTrucks1").checked, "platooningTrucks1", document.getElementById("yesplatooningTrucks1").checked*1)
        }
    }

    if (mission == "loadCargo1" || mission == "loadCargo2" || mission == 'loadCargo3' || mission == 'cargoConnect1' || mission == 'cargoConnect2') {
        if (document.getElementById("yessortingCenter1").checked) {
            totalContainers = 7
        } else {
            totalContainers = 8
        }
        console.log(totalContainers);
        sum = parseInt(document.getElementById("loadCargo1").value) + parseInt(document.getElementById("loadCargo2").value) + parseInt(document.getElementById("loadCargo3").value) +  parseInt(document.getElementById("cargoConnect1").value) + parseInt(document.getElementById("cargoConnect2").value)
        if (sum > totalContainers) {
            document.getElementById(mission).value = totalContainers - (sum - document.getElementById(mission).value)
            sum = totalContainers
            recalc(window[mission + 'inc'] * parseInt(document.getElementById(mission).value), mission, parseInt(document.getElementById(mission).value))
        } 
        if (sum == 8) {
            $('#nosortingCenter1').checkboxradio('disable');
            $('#yessortingCenter1').checkboxradio('disable');
            document.getElementById('yessortingCenter1').checked = false
            document.getElementById('nosortingCenter1').checked = true
        } else {
            $('#nosortingCenter1').checkboxradio('enable');
            $('#yessortingCenter1').checkboxradio('enable');
        }
    }
    if (mission == "cargoConnect2") {
        if (parseInt(document.getElementById("cargoConnect2").value) == 1) {
            createbuttonconflict("cargoConnect3", "cargoConnect4", 0)        
        } else if (parseInt(document.getElementById("cargoConnect2").value) > 1) {
            deletebuttonconflict("cargoConnect3", "cargoConnect4", 0)        
        }
    }

    if ((mission == "cargoConnect5" || mission == "cargoConnect2") && parseInt(document.getElementById("cargoConnect5").value) > parseInt(document.getElementById("cargoConnect2").value)) {
        document.getElementById("cargoConnect5").value = parseInt(document.getElementById("cargoConnect2").value);
        recalc(window["cargoConnect5" + 'inc'] * parseInt(document.getElementById("cargoConnect5").value), "cargoConnect5", parseInt(document.getElementById("cargoConnect5").value))
    }

    specialCasesComplete = 0

}

// Override function when calculating points for each mission
function specialCasesRecalc(mission) {
    if (specialCasesComplete != 1) {
        specialCasesComplete = 1
        if (document.getElementById("precision1").value == 1) {
            recalc(10, 'precision1', document.getElementById("precision1").value);
        }
        if (document.getElementById("precision1").value == 2) {
            recalc(15, 'precision1', document.getElementById("precision1").value);
        }
        if (document.getElementById("precision1").value == 3) {
            recalc(25, 'precision1', document.getElementById("precision1").value);
        }
        if (document.getElementById("precision1").value == 4) {
            recalc(35, 'precision1', document.getElementById("precision1").value);
        }
        if (document.getElementById("precision1").value == 5) {
            recalc(50, 'precision1', document.getElementById("precision1").value);
        }
        if (document.getElementById("precision1").value == 6) {
            recalc(50, 'precision1', document.getElementById("precision1").value);
        }
        specialCasesComplete = 0
    }
}

function load2021() {
    blanksave = "advantage1|0,innovationProject1|0,unusedCapacity1|0,unloadCargoPlane1|0,unloadCargoPlane2|0,transportationJourney1|0,transportationJourney2|0,switchEngine1|0,accidentAvoidance1|0,accidentAvoidance2|0,unloadCargoShip1|0,unloadCargoShip2|0,airDrop1|0,airDrop2|0,airDrop3|0,trainTracks1|0,trainTracks2|0,sortingCenter1|0,homeDelivery1|0,homeDelivery2|0,largeDelivery1|0,largeDelivery2|0,largeDelivery3|0,platooningTrucks1|0,platooningTrucks2|0,bridge1|0,loadCargo1|0,loadCargo2|0,loadCargo3|0,cargoConnect1|0,cargoConnect2|0,cargoConnect3|0,cargoConnect4|0,cargoConnect5|0,precision1|0,graciousProfessionalism|0"
    // Override function in scoring system during the checking for button conflicts


    clearbuffer()

    // Draw the layout



    /*
    window.onload = function() {
    check_missions()
    recalc(0,"advantage1",0)
}
*/

    writebuffer("missionlist")
}

// load2021()
