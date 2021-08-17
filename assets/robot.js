// This is where all the missions are defined for the season. Ideally, each season, you only have to edit this file, but there are some small areas that need to be changed elsewhere.
// This uses html.js to draw all the missions to the screen.
// Mission loader v2.0 Dynamic Content Replacer

// Defines a blank save for reset


identifier = "RD"

specialCasesComplete = 0
function specialCasesCheck(mission) {

}

// Override function when calculating points for each mission
function specialCasesRecalc(mission) {
	
}

var load2020RD = (function () {

	// Override function in scoring system during the checking for button conflicts


	clearbuffer()

	// Draw the layout

	// Draw the layout

	addToBuffer("<h1>Robot Design</h1>")
	addToBuffer("<p class='no-print'>Instructions: Teams should communicate to the judges their achievement in each of the criteria below. This rubric should be filled out during the Robot Design explanation.<br><br><b>Judges are required to tick one box on a separate line to indicate the level the team has achieved. If the team exceeds, please make a short comment in the Exceeds box.</b></p>")
	startRubric()

	startrow()
	addLevels("#EAF4EB","#C1DFC5","#8DC89A","#46AE6F","Beginning","Developing","Accomplished","Exceeds","How has the team exceeded?")

	closeRow()

	startRow()
	addSubSection("Identify - Team had a clearly defined mission strategy and explored building and coding skills they needed.","#D7E9D9",["identifyRD","identify2RD"])
	closeRow()

	startRow()
	addOption("identifyRD","Unclear mission strategy","1")
	addOption("identifyRD","Partially clear mission strategy","2")
	addOption("identifyRD","Clear mission strategy","3")
	addFreeOption("identifyRD","4")
	closeRow()

	startRow()
	addOption("identify2RD","Limited evidence of building and coding skills in all team members","1")
	addOption("identify2RD","Inconsistent evidence of building and coding skills in all team members","2")
	addOption("identify2RD","Consistent evidence of building and coding skills in all team members","3")
	addFreeOption("identify2RD","4")
	closeRow()



	startRow()
	addSubSection("Design - Team produced innovative designs and a clear workplan, seeking guidance as needed.","#D7E9D9",["designRD","designRD2"])
	closeRow()

	startRow()
	addOption("designRD","Minimal evidence of an effective workplan","1")
	addOption("designRD","Partial evidence of an effective workplan","2")
	addOption("designRD","Clear evidence of an effective workplan","3")
	addFreeOption("designRD","4")
	closeRow()

	startRow()
	addOption("designRD2","Minimal explanation of robot and code's innovative features","1")
	addOption("designRD2","Partial explanation of robot and code's innovative features","2")
	addOption("designRD2","Clear explanation of robot and code's innovative features","3")
	addFreeOption("designRD2","4")
	closeRow()



	startRow()
	addSubSection("Create - Team developed an effective robot and code solution matching their mission strategy.","#D7E9D9",["createRD","createRD2"])
	closeRow()

	startRow()
	addOption("createRD","Limited explanation of their robot and its attachment and sensor functionality","1")
	addOption("createRD","Simple explanation of their robot and its attachment and sensor functionality","2")
	addOption("createRD","Detailed explanation of their robot and its attachment and sensor functionality","3")
	addFreeOption("createRD","4")
	closeRow()

	startRow()
	addOption("createRD2","Unclear explanation of how code makes their robot act","1")
	addOption("createRD2","Partially clear explanation of how code makes the robot act","2")
	addOption("createRD2","Clear explanation of how code makes their robot act","3")
	addFreeOption("createRD2","4")
	closeRow()



	startRow()
	addSubSection("Iterate - Team repeatedly tested their robot and code to identify areas for improvement and incorporated the findings into their current solution.","#D7E9D9",["iterateRD","iterateRD2"])
	closeRow()

	startRow()
	addOption("iterateRD","Minimal evidence of testing their robot and code","1")
	addOption("iterateRD","Partial evidence of testing their robot and code","2")
	addOption("iterateRD","Clear evidence of testing their robot and code","3")
	addFreeOption("iterateRD","4")
	closeRow()

	startRow()
	addOption("iterateRD2","Minimal evidence their robot and code was improved","1")
	addOption("iterateRD2","Partial evidence their robot and code was improved","2")
	addOption("iterateRD2","Clear of evidence their robot and code was improved","3")
	addFreeOption("iterateRD2","4")
	closeRow()




	startRow()
	addSubSection("Communicate - Team's explanation of the robot design process was effective and showed how all team members have been involved.","#D7E9D9",["communicateRD","communicateRD2"])
	closeRow()

	startRow()
	addOption("communicateRD","Unclear explanation of robot design process","1")
	addOption("communicateRD","Partially clear explanation of robot design process","2")
	addOption("communicateRD","Clear explanation of robot design process","3")
	addFreeOption("communicateRD","4")
	closeRow()

	startRow()
	addOption("communicateRD2","Minimal evidence that all team members were involved","1")
	addOption("communicateRD2","Partial evidence that all team members were involved","2")
	addOption("communicateRD2","Clear evidence that all team members were involved","3")
	addFreeOption("communicateRD2","4")
	closeRow()


	addComments("robotDesign","Feedback Comments","Great Job","Think About")

	endRubric()

	addToBuffer("Total Points:<text> </text><b style='color:red;' id='rdpts'></b>")

	/*
	window.onload = function() {
	check_missions()
	recalc(0,"advantage1",0)
	}
	*/

	writebuffer("robotlist")
})();

