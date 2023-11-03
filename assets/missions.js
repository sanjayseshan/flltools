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

    // if (mission == "transportationJourney1") {
    //     if (document.getElementById("yestransportationJourney1").checked && document.getElementById("yestransportationJourney2").checked) {
    //         recalc(20, "transportationJourney2", 1)
    //         recalc(10, "transportationJourney1", 1)
    //     } else {
    //         recalc(10 * document.getElementById("yestransportationJourney2").checked, "transportationJourney1", document.getElementById("yestransportationJourney2").checked*1)
    //     }
    // }
    // if (mission == "transportationJourney2") {
    //     if (document.getElementById("yestransportationJourney1").checked && document.getElementById("yestransportationJourney2").checked) {
    //         recalc(20, "transportationJourney1", 1)
    //         recalc(10, "transportationJourney2", 1)
    //     } else {
    //         recalc(10 * document.getElementById("yestransportationJourney1").checked, "transportationJourney1", document.getElementById("yestransportationJourney1").checked*1)
    //     }
    // }

    // if (mission == "platooningTrucks1") {
    //     if (document.getElementById("yesplatooningTrucks1").checked && document.getElementById("yesplatooningTrucks2").checked) {
    //         recalc(20, "platooningTrucks2", 1)
    //         recalc(10, "platooningTrucks1", 1)
    //     } else {
    //         recalc(10 * document.getElementById("yesplatooningTrucks2").checked, "platooningTrucks1", document.getElementById("yesplatooningTrucks2").checked*1)
    //     }
    // }
    // if (mission == "platooningTrucks2") {
    //     if (document.getElementById("yesplatooningTrucks1").checked && document.getElementById("yesplatooningTrucks2").checked) {
    //         recalc(20, "platooningTrucks1", 1)
    //         recalc(10, "platooningTrucks2", 1)
    //     } else {
    //         recalc(10 * document.getElementById("yesplatooningTrucks1").checked, "platooningTrucks1", document.getElementById("yesplatooningTrucks1").checked*1)
    //     }
    // }

    // if (mission == "loadCargo1" || mission == "loadCargo2" || mission == 'loadCargo3' || mission == 'cargoConnect1' || mission == 'cargoConnect2') {
    //     if (document.getElementById("yessortingCenter1").checked) {
    //         totalContainers = 7
    //     } else {
    //         totalContainers = 8
    //     }
    //     console.log(totalContainers);
    //     sum = parseInt(document.getElementById("loadCargo1").value) + parseInt(document.getElementById("loadCargo2").value) + parseInt(document.getElementById("loadCargo3").value) +  parseInt(document.getElementById("cargoConnect1").value) + parseInt(document.getElementById("cargoConnect2").value)
    //     if (sum > totalContainers) {
    //         document.getElementById(mission).value = totalContainers - (sum - document.getElementById(mission).value)
    //         sum = totalContainers
    //         recalc(window[mission + 'inc'] * parseInt(document.getElementById(mission).value), mission, parseInt(document.getElementById(mission).value))
    //     }
    //     if (sum == 8) {
    //         $('#nosortingCenter1').checkboxradio('disable');
    //         $('#yessortingCenter1').checkboxradio('disable');
    //         document.getElementById('yessortingCenter1').checked = false
    //         document.getElementById('nosortingCenter1').checked = true
    //     } else {
    //         $('#nosortingCenter1').checkboxradio('enable');
    //         $('#yessortingCenter1').checkboxradio('enable');
    //     }
    // }
    // if (mission == "cargoConnect2") {
    //     if (parseInt(document.getElementById("cargoConnect2").value) == 1) {
    //         createbuttonconflict("cargoConnect3", "cargoConnect4", 0)
    //     } else if (parseInt(document.getElementById("cargoConnect2").value) > 1) {
    //         deletebuttonconflict("cargoConnect3", "cargoConnect4", 0)
    //     }
    // }

    // if ((mission == "cargoConnect5" || mission == "cargoConnect2") && parseInt(document.getElementById("cargoConnect5").value) > parseInt(document.getElementById("cargoConnect2").value)) {
    //     document.getElementById("cargoConnect5").value = parseInt(document.getElementById("cargoConnect2").value);
    //     recalc(window["cargoConnect5" + 'inc'] * parseInt(document.getElementById("cargoConnect5").value), "cargoConnect5", parseInt(document.getElementById("cargoConnect5").value))
    // }

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
    blanksave = "m00a|0,m01a|0,m02a|0,m02b|0,m03a|0,m04a|0,m04b|0,m05a|0,m06a|0,m06b|0,m07a|0,m08a|0,m08b|0,m08c|0,m09a|0,m09b|0,m10a|0,m11a|0,m12a|0,m12b|0,m13a|0,m13b|0,m14a|0,m14b|0,m15a|0,m15b|0,m15c|0,m15d|0,m15e|0,precision1|0,graciousProfessionalism|0"
    // blanksave = "advantage1|0,innovationProject1|0,unusedCapacity1|0,unloadCargoPlane1|0,unloadCargoPlane2|0,transportationJourney1|0,transportationJourney2|0,switchEngine1|0,accidentAvoidance1|0,accidentAvoidance2|0,unloadCargoShip1|0,unloadCargoShip2|0,airDrop1|0,airDrop2|0,airDrop3|0,trainTracks1|0,trainTracks2|0,sortingCenter1|0,homeDelivery1|0,homeDelivery2|0,largeDelivery1|0,largeDelivery2|0,largeDelivery3|0,platooningTrucks1|0,platooningTrucks2|0,bridge1|0,loadCargo1|0,loadCargo2|0,loadCargo3|0,cargoConnect1|0,cargoConnect2|0,cargoConnect3|0,cargoConnect4|0,cargoConnect5|0,precision1|0,graciousProfessionalism|0"
    // Override function in scoring system during the checking for button conflicts


    clearbuffer()

    // Draw the layout


    starttable('A00', "EQUIPMENT INSPECTION", 'M00.png', ['m00a'], 0)
    createbutton("m00a", 20, "If your robot and all your equipment fi t completely in one launch area and are under a height limit of 12 in. (305 mm) during the pre-match inspection:")
    endtable()

    starttable('M01', "3D CINEMA", 'M01.png', ['m01a'], 1)
    createbutton("m01a", 20, "If the 3D cinema's small red beam is completely to the right of the black frame")
    endtable()

    starttable('M02', "THEATER SCENE CHANGE", 'M02.png', ['m02a','m02b'], 0)
    createdropdown("m02a", ["","Blue", "Pink","Orange"], [0, 10, 20, 30], "If your theater's red fl ag is down and the active scene color is:")
    createdropdown("m02b", ["","Blue", "Pink", "Orange"], [0, 20, 30, 10], "BONUS: And if both teams' active scenes match:")
    // createdropdown("stepCounter1", ["","Partly full of contents", "Completely full of contents"], [0, 20, 30, 20], "The hinged container is completely closed")
    // createbutton("unusedCapacity1", 20, "Is the hinged container completely closed and partly full of contents (1-5 content pieces)?")
    // createbutton("unusedCapacity2", 30, "Is the hinged container completely closed and completely full of contents (All 6 content pieces)?")
    // create3button('unusedCapacity1',20,30,"Is the hinged container completely closed and partly full of contents (1-5 content pieces) or completely full of contents (All 6 content pieces)?")
    // createbutton("stepCounter3", 20 , "M02c")
    // createbuttonconflict("unusedCapacity1", "unusedCapacity2", 0)
    // createbuttonconflict("stepCounter2","stepCounter3",0)
    // createbuttonconflict("stepCounter1","stepCounter3",0)
    endtable()

    starttable('M03', "IMMERSIVE EXPERIENCE", 'M03.png', ['m03a'], 1) //1 = Note Present
    createbutton("m03a", 20, "If the three immersive experience screens are raised")
    createcomment("To score, team equipment may not be touching the immersive experience model at the end of the match.")
    endtable()

    // createbuttonconflict("slide1","slide2",0)
    // createbuttonenables("slide1", "slide3")
    // createbuttonenables("slide1", "slide4")
    // endtable()

    starttable('M04', "MASTERPIECE(SM)", 'M04.png', ['m04a', 'm04b'], 1)
    createbutton("m04a", 10, "If your team's LEGO ® art piece is at least partly in the museum target area")
    createbutton("m04b", 20, "BONUS: And if the art piece is completely supported by the pedestal")
    createcomment("To score the bonus, at the end of the match, the art piece may only be touching the pedestal and the    pedestal may not be touching any team equipment except the art piece.")
    endtable()

    starttable('M05', "AUGMENTED REALITY STATUE", 'M05.png', ['m05a'], 0)
    createbutton("m05a", 20, "If the augmented reality statue’s orange lever is rotated completely to the right")
    endtable()

    starttable('M06', "MUSIC CONCERT LIGHTS AND SOUNDS", 'M06.png', ['m06a', 'm06b'], 0)
    createbutton("m06a", 10, "If the lights' orange lever is rotated completely downwards:")
    createbutton("m06b", 10, "If the speakers' orange lever is rotated completely to the left:")
    endtable()

    starttable('M07', "HOLOGRAM PERFORMER", 'M07.png', ['m07a'], 0)
    createbutton("m07a", 20, "If the hologram performer's orange push activator is completely past the black stage set line:")
    endtable()

    starttable('M08', "ROLLING CAMERA", 'M08.png', ['m08a', 'm08b', 'm08c'], 1)
    createbutton("m08a", 10, "If the rolling camera's white pointer is left of dark blue, but right of medium and light blue")
    createbutton("m08b", 20, "If the rolling camera's white pointer is left of dark and medium blue, but right of light blue")
    createbutton("m08c", 30, "If the rolling camera's white pointer is left of dark, medium, and light blue")
    createcomment("If the white pointer is on a colored tile, you earn points for the higher scoring area of the track.")
    endtable()

    starttable('M09', "MOVIE SET", 'M09.png', ['m09a', 'm09b'], 1)
    createbutton("m09a", 10, "If the boat is touching the mat and is completely past the black scene line")
    createbutton("m09b", 10, "If the camera is touching the mat and is at least partly in the camera target area")
    createcomment("The camera includes the loop, but not the string. When scoring, the scene line extends vertically from the top to the bottom of the field.")
    endtable()

    starttable('M10', "SOUND MIXER", 'M10.png', ['m10a'], 1)
    // createbutton("sortingCenter1", 20, "Have the containers been sorted so that the light orange container is the only container remaining completely in the blue sorting area box?")
    createrange("m10a", 10, 0, 3, 0, "If a sound mixer slider is raised")

    createcomment("To score, team equipment may not be touching the sound mixer or sliders at the end of the match.")
    endtable()

    starttable('M11', "LIGHT SHOW", 'M11.png', ['m11a'], 1)
    createdropdown("m11a", ["","Yellow", "Green","Blue"], [0, 10, 20, 30], "If the light show’s white pointer is within zone")
    createcomment("If the white pointer rests between zones, you earn points for the higher scoring zone of the two.")
    endtable()

    starttable('M12', "VIRTUAL REALITY ARTIST", 'M12.png', ['m12a', 'm12b'], 0)
    createbutton("m12a", 10, "If the chicken is intact and has moved from its starting position:")
    createbutton("m12b", 20, "BONUS: And is over or completely past the lavender dot:")
    endtable()

    starttable('M13', "CRAFT CREATOR", 'M13.png', ['m13a', 'm13b'], 1)
    createbutton("m13a", 10, "If the craft machine's orange and white lid is completely open")
    createbutton("m13b", 20, "If the craft machine's light pink latch is pointing straight down")
    endtable()

    starttable('M14', "AUDIENCE DELIVERY", 'M14.png', ['m14a','m14b'], 0)
    createrange("m14a", 5, 0, 7, 0, "If an audience member is completely in a target destination")
    createrange("m14b", 5, 0, 7, 0, "If a target destination has at least one audience member completely in it")
    endtable()

    starttable('M15', "EXPERT DELIVERY", 'M15.png', ['m15a', 'm15b', 'm15c', 'm15d', 'm15e'], 1)
    createbutton("m15a", 10, "If the following experts are at least partly in their target destinations: Sam the Stage Manager [blue] in Movie Set")
    createbutton("m15b", 10, "If the following experts are at least partly in their target destinations: Anna the Curator [red] in Museum")
    createbutton("m15c", 10, "If the following experts are at least partly in their target destinations: Noah the Sound Engineer [pink] in Music Concert")
    createbutton("m15d", 10, "If the following experts are at least partly in their target destinations: Izzy the Skateboarder [purple] in Skate Park")
    createbutton("m15e", 10, "If the following experts are at least partly in their target destinations: Emily the Visual Effects Director [green] in Cinema")
    createcomment("The expert includes the loop and the base.")
    endtable()


    starttable('A01', "Precision", 'M17.png', ['precision1'], 0)
    createrange("precision1", 10, 0, 6, 0, "How many Precision Tokens are left on the field?", '')
    endtable()


    // Special hard-coded ignore points mission
    starttable('A02', "Gracious Professionalism", 'M18.png', ['graciousProfessionalism'], 0)
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
