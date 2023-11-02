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


    starttable('M00', "Advantage", 'M00.jpg', ['advantage1'], 1)
    createbutton("advantage1", 20, "Does all your equipment fit in the small inspection area?")
    endtable()

    starttable('M01', "Innovation Project", 'M01.jpg', ['innovationProject1'], 1)
    createbutton("innovationProject1", 20, "Is any part of the model touching the CARGO CONNECT circle?")
    createcomment("The model must be made of at least two white LEGO pieces and measures at least as long as four LEGO 'studs' in some direction.")
    endtable()

    starttable('M02', "Unused Capacity", 'M02.jpg', ['unusedCapacity1'], 0)
    // createdropdown("stepCounter1", ["","Partly full of contents", "Completely full of contents"], [0, 20, 30, 20], "The hinged container is completely closed")
    // createbutton("unusedCapacity1", 20, "Is the hinged container completely closed and partly full of contents (1-5 content pieces)?")
    // createbutton("unusedCapacity2", 30, "Is the hinged container completely closed and completely full of contents (All 6 content pieces)?")
    create3button('unusedCapacity1',20,30,"Is the hinged container completely closed and partly full of contents (1-5 content pieces) or completely full of contents (All 6 content pieces)?")
    // createbutton("stepCounter3", 20 , "M02c")
    // createbuttonconflict("unusedCapacity1", "unusedCapacity2", 0)
    // createbuttonconflict("stepCounter2","stepCounter3",0)
    // createbuttonconflict("stepCounter1","stepCounter3",0)
    endtable()

    starttable('M03', "Unload Cargo Plane", 'M03.jpg', ['unloadCargoPlane1', 'unloadCargoPlane2'], 0) //1 = Note Present
    createbutton("unloadCargoPlane1", 20, "Has the cargo plane been prepared for unloading so that the cargo door rests completely down, touching its black frame?")
    createbutton("unloadCargoPlane2", 10, "Has the cargo plane been unloaded so that the container is completely separate from the plane?")
    endtable()

    // createbuttonconflict("slide1","slide2",0)
    // createbuttonenables("slide1", "slide3")
    // createbuttonenables("slide1", "slide4")
    // endtable()

    starttable('M04', "Transportation Journey", 'M04.jpg', ['transportationJourney1', 'transportationJourney2'], 0)
    createbutton("transportationJourney1", 10, "Has the truck reached its destination, completely past its blue end line, on the mat?")
    createbutton("transportationJourney2", 10, "Has the airplane reached its destination, completely past its blue end line, on the mat?")
    endtable()

    starttable('M05', "Switch Engine", 'M05.jpg', ['switchEngine1'], 0)
    createbutton("switchEngine1", 20, "Has the engine been switched from diesel to electric so that the yellow bar rests all the way down/south?")
    endtable()

    starttable('M06', "Accident Avoidance", 'M06.jpg', ['accidentAvoidance1', 'accidentAvoidance2'], 1)
    createbutton("accidentAvoidance1", 20, "Is your robot parked over the blue accident-avoidance line at the end of the match and the yellow panel is not knocked down")
    createbutton("accidentAvoidance2", 30, "Is your robot parked over the blue accident-avoidance line at the end of the match and the yellow panel is knocked down?")
    createbuttonconflict("accidentAvoidance1", "accidentAvoidance2", 0)
    createcomment("If the black frame is knocked down at the end of the match, this mission does not score.")
    endtable()

    starttable('M07', "Unload Cargo Ship", 'M07.jpg', ['unloadCargoShip1', 'unloadCargoShip2'], 0)
    createbutton("unloadCargoShip1", 20, "Is the container no longer touching the cargo ship’s east deck?")
    createbutton("unloadCargoShip2", 10, "Is the container completely east of the cargo ship’s east deck?")
    createbuttonenables("unloadCargoShip1", "unloadCargoShip2")
    endtable()

    starttable('M08', "Air Drop", 'M08.jpg', ['airDrop1', 'airDrop2', 'airDrop3'], 0)
    createbutton("airDrop1", 20, "Is the food package separated from your helicopter?")
    createbutton("airDrop2", 10, "Is the food package separated from the other field’s helicopter and is completely in your field’s CARGO CONNECT circle?")
    createbutton("airDrop3", 10, "Have both teams separated their food packages from their field’s helicopters?")
    createbuttonenables("airDrop1", "airDrop3")
    endtable()

    starttable('M09', "Train Tracks", 'M09.jpg', ['trainTracks1', 'trainTracks2'], 0)
    createbutton("trainTracks1", 20, "Is the train track repaired so that it rests completely down/west?")
    createbutton("trainTracks2", 20, "Has the train reached its destination, latched at the end of the tracks?")
    endtable()

    starttable('M10', "Sorting Center", 'M10.jpg', ['sortingCenter1'], 0)
    createbutton("sortingCenter1", 20, "Have the containers been sorted so that the light orange container is the only container remaining completely in the blue sorting area box?")
    endtable()

    starttable('M11', "Home Delivery", 'M11.jpg', ['homeDelivery1', 'homeDelivery2'], 1)
    createbutton("homeDelivery1", 20, "Has the package been delivered to its destination so that it is partly on the doorstep?")
    createbutton("homeDelivery2", 30, "Has the package been delivered to its destination so that it is completely on the doorstep?")
    createbuttonconflict("homeDelivery1", "homeDelivery2", 0)
    createcomment("The package does not score if it is touching any equipment at the end of the match.")
    endtable()
    // createdropdown("treadmill1", ["None", "Grey", "Red", "Orange", "Yellow", "Light Green", "Dark Green"], [0, 5, 10, 15, 20, 25, 30], "The robot has spinned the rollers so the pointer points to")
    // createbutton("tredmill1", 5,"M11a")
    // createbutton("tredmill2", 10,"M11b")
    // createbutton("tredmill3", 15,"M11c")
    // createbutton("tredmill4", 20,"M11d")
    // createbutton("tredmill5", 25,"M11e")
    // createbutton("tredmill6", 30,"M11f")
    // createbuttonconflict("tredmill1","tredmill2",0)
    // createbuttonconflict("tredmill1","tredmill3",0)
    // createbuttonconflict("tredmill1","tredmill4",0)
    // createbuttonconflict("tredmill1","tredmill5",0)
    // createbuttonconflict("tredmill1","tredmill6",0)
    // createbuttonconflict("tredmill2","tredmill3",0)
    // createbuttonconflict("tredmill2","tredmill4",0)
    // createbuttonconflict("tredmill2","tredmill5",0)
    // createbuttonconflict("tredmill2","tredmill6",0)
    // createbuttonconflict("tredmill3","tredmill4",0)
    // createbuttonconflict("tredmill3","tredmill5",0)
    // createbuttonconflict("tredmill3","tredmill6",0)
    // createbuttonconflict("tredmill4","tredmill5",0)
    // createbuttonconflict("tredmill4","tredmill6",0)
    // createbuttonconflict("tredmill5","tredmill6",0)

    starttable('M12', "Large Delivery", 'M12.jpg', ['largeDelivery1', 'largeDelivery2', 'largeDelivery3'], 0)
    createbutton("largeDelivery1", 20, "Is the turbine blade touching only the blue holder and the mat?")
    createbutton("largeDelivery2", 30, "Is the turbine blade touching only the blue holder and nothing else?")
    // createbutton("largeDelivery3", 5, "Is the chicken statue upright with its base partly in its circle?")
    // createbutton("largeDelivery4", 10, "Is the chicken statue upright with its base completely in its circle?")
    create3button("largeDelivery3",5,10,"Is the chicken statue upright with its base partly or completely in its circle?")
    createbuttonconflict("largeDelivery1", "largeDelivery2", 0)
    // createbuttonconflict("largeDelivery3", "largeDelivery4", 0)
    endtable()

    starttable('M13', "Platooning Trucks", 'M13.jpg', ['platooningTrucks1', 'platooningTrucks2'], 0)
    createbutton("platooningTrucks1", 10, "Are both trucks latched together completely outside of home?")
    createbutton("platooningTrucks2", 10, "Is a truck latched to the bridge?")
    endtable()

    starttable('M14', "Bridge", 'M14.jpg', ['bridge1'], 0)
    createrange("bridge1", 10, 0, 2, 0, "How many bridge decks have been lowered and rest on their center support?", '')
    endtable()

    starttable('M15', "Load Cargo", 'M15.jpg', ['loadCargo1', 'loadCargo2', 'loadCargo3'], 1)
    createrange("loadCargo1", 10, 0, 2, 0, "How many containers are on and touching only the platooning trucks?", '')
    createrange("loadCargo2", 20, 0, 2, 0, "How many containers are on and touching only the train?", '')
    createrange("loadCargo3", 30, 0, 2, 0, "How many containers are on and touching only the cargo ship's west deck?", '')
    createcomment("Containers on Platooning Trucks must be completely outside of home.")
    endtable()

    starttable('M16', "CARGO CONNECT", 'M16.jpg', ['cargoConnect1', 'cargoConnect2', 'cargoConnect3', 'cargoConnect4', 'cargoConnect5'], 0)
    createrange("cargoConnect1", 5, 0, 8, 0, "How many containers are partly in any circle?", '')
    createrange("cargoConnect2", 10, 0, 8, 0, "How many containers are completely in any circle?", '')
    createbutton("cargoConnect3", 20, "Is the blue (not hinged) container completely in the blue circle?")
    createbutton("cargoConnect4", 20, "Is the lime green container completely in the lime green circle?")
    createrange("cargoConnect5", 10, 0, 6, 0, "How many circles are there with at least one container completely in them?", '')
    createsliderenables3("cargoConnect2", "cargoConnect3", 1)
    createsliderenables3("cargoConnect2", "cargoConnect4", 1)
    endtable()

    starttable('M17', "Precision", 'M17.jpg', ['precision1'], 0)
    createrange("precision1", 10, 0, 6, 0, "How many Precision Tokens are left on the field?", '')
    endtable()


    // Special hard-coded ignore points mission
    starttable('A00', "Gracious Professionalism", 'M18.jpg', ['graciousProfessionalism'], 0)
    createdropdown("graciousProfessionalism", ["", "Developing", "Accomplished", "Exceeds"], [0, 2, 3, 4], "Gracious Professionalism® displayed at the robot game table")
    endtable()

    /*
    window.onload = function() {
    check_missions()
    recalc(0,"advantage1",0)
}
*/

    writebuffer("missionlist")
}

// load2021()
