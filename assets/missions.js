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
    blanksave = "m00a|0,m01a|0,m01b|0,m01c|0,m02a|0,m02b|0,m03a|0,m03b|0,m04a|0,m04b|0,m05a|0,m06a|0,m07a|0,m08a|0,m09a|0,m09b|0,m10a|0,m10b|0,m11a|0,m11b|0,m12a|0,m13a|0,m14a|0,m14b|0,m14c|0,m14d|0,m14e|0,m15a|0,m15b|0,m15c|0,m15d|0,precision1|0,graciousProfessionalism|0"
    

    clearbuffer()

    // Draw the layout


    starttable('A00', "EQUIPMENT INSPECTION", 'M00.png', ['m00a'], 0)
    createbutton("m00a", 20, "If your robot and all your equipment fit completely in one launch area and are under a height limit of 12 in. (305 mm) during the pre-match inspection")
    endtable()

    starttable('M01', "CORAL NURSERY", 'M01.png', ['m01a','m01b','m01c'], 1)
    createbutton("m01a", 20, "If the coral tree is hanging on on the coral tree support")
    createbutton("m01b", 10, "Bonus: and the bottom of the coral tree is in its holder")
    createbuttonenables("m01a","m01b")
    createbutton("m01c", 20, "If the coral buds are flipped up")
    createcomment("No equipment may be touching any part of this mission's mission model at the end of the match, to score for this mission.")
    endtable()

    starttable('M02', "SHARK", 'M02.png', ['m02a','m02b'], 0)
    createbutton("m02a", 20, "If the shark is no longer touching the cave")
    createbutton("m02b", 10, "If the shark is touching the mat and it is at least partly in the shark habitat")
   
    endtable()

    starttable('M03', "CORAL REEF", 'M03.png', ['m03a','m03b'], 1) //1 = Note Present
    createbutton("m03a", 20, "If the coral reef is flipped up, not touching the mat")
    createrange("m03b", 5, 0, 3, 0, "If a reef segment is standing upright, outside of home, and touching the mat", '')
    createcomment("No equipment may be touching any part of this mission's mission model at the end of the match, to score for this mission.")

    endtable()

    starttable('M04', "SCUBA DIVER", 'M04.png', ['m04a', 'm04b'], 1)
    createbutton("m04a", 20, "If the scuba diver is no longer touching the coral nursery")
    createbutton("m04b", 20, "If the scuba diver is hanging on the coral reef support")
    createbuttonenables("m04a","m04b")
    createcomment("The 'coral nursery' includes any part of the Mission 01 mission model.")
    
    endtable()

    starttable('M05', "ANGLER FISH", 'M05.png', ['m05a'], 0)
    createbutton("m05a", 30, "If the angler fish is latched within the shipwreck")
    endtable()

    starttable('M06', "RAISE THE MAST", 'M06.png', ['m06a'], 2)
    createbutton("m06a", 30, "If the shipwreck's mast is completely raised")
    createcomment("The shipwreck's mast is considered raised when the latch prevents it from returning to its starting position.")
    createcomment("No equipment may be touching any part of this mission's mission model at the end of the match, to score for this mission.")

    endtable()

    starttable('M07', "KRAKEN'S TREASURE", 'M07.png', ['m07a'], 1)
    createbutton("m07a", 20, "If the treasure chest is completely outside the kraken's nest")
    createcomment("No equipment may be touching any part of this mission's mission model at the end of the match, to score for this mission.")

    endtable()

    starttable('M08', "ARTIFICIAL HABITAT", 'M08.png', ['m08a'], 2)
    createrange("m08a", 10, 0, 4, 0, "If an artificial habitat stack segment is completely flat and upright", '')
    createcomment("There are four segments of the artificial habitat stack, each defined by its yellow base. A segment is considered upright when the crab is above its yellow base.")
    createcomment("No equipment may be touching any part of this mission's mission model at the end of the match, to score for this mission.")

    endtable()

    starttable('M09', "UNEXPECTED ENCOUNTER", 'M09.png', ['m09a', 'm09b'], 0)
    createbutton("m09a", 20, "If the unknown creature is released")
    createbutton("m09b", 10, "If the unknown creature is at least partly in the cold seep")
    endtable()

    starttable('M10', "SEND OVER THE SUBMERSIBLE", 'M10.png', ['m10a','m10b'], 2)
    createbutton("m10a", 30, "If your team's yellow flag is down")
    createbutton("m10b", 10, "If the submersible is clearly closer to the opposing field:")
    createcomment("Teams may not block the opposing team. It is not possible to earn the bonus in remote competitions or if there is no opposing team.")
    createcomment("No equipment may be touching any part of this mission's mission model at the end of the match, to score for this mission.")

    endtable()

    starttable('M11', "SONAR DISCOVERY", 'M11.png', ['m11a','m11b'], 0)
    createbutton("m11a", 20, "If one whale is revealed")
    createbutton("m11b", 10, "Bonus: If both whales are revealed")
    createbuttonenables("m11a","m11b")
    endtable()

    starttable('M12', "FEED THE WHALE", 'M12.png', ['m12a'], 1)
    createrange("m12a", 10, 0, 5, 0, "Krill at least partly in the whale's mouth", '')
    createcomment("No equipment may be touching any part of this mission's mission model at the end of the match, to score for this mission.")

    endtable()

    starttable('M13', "CHANGING SHIPPING LANES", 'M13.png', ['m13a'], 0)
    createbutton("m13a", 20, "If the ship is in the new shipping lane, touching the mat")
    endtable()

    starttable('M14', "SAMPLE COLLECTION", 'M14.png', ['m14a','m14b','m14c','m14d','m14e'], 0)
    createbutton("m14a", 5, "If the water sample is completely outside the water sample area")
    createbutton("m14b", 10, "If the seabed sample is no longer touching the seabed")
    createbutton("m14c", 10, "If the plankton sample is no longer touching the kelp forest")
    createbutton("m14d", 20, "If a piece of the trident is no longer touching the shipwreck")
    createbutton("m14e", 10, "Bonus: If both pieces are no longer touching the shipwreck")
    endtable()

    starttable('M15', "RESEARCH VESSEL", 'M15.png', ['m15a', 'm15b', 'm15c', 'm15d'], 2)
    createcomment("If any of the following are at least partly in the research vessel's cargo area:")
    createrange("m15a", 5, 0, 3, 0, "Each sample", '')
    createrange("m15b", 5, 0, 2, 0, "Trident Part(s)", '')
    createbutton("m15c", 5, "Treasure Chest")
    createbutton("m15d", 20, "If the port's latch is at least partly in the research vessel's loop")
    createcomment("No equipment may be touching any part of this mission's mission model at the end of the match, to score for this mission.")

    endtable()


    starttable('A01', "Precision", 'M17_h.png', ['precision1'], 0)
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
