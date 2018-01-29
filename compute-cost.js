// compute cost of postage
var aCost = 0
var fCost // for storing cost of postage into a separate cookie
var destination // for storing destination into a separate cookie

function computeCost(){
	var dest = document.getElementById('domeInt').value
	if (dest == "domestic"){
		bCost = aCost+10 // define base cost, cheaper for domestic. mailing
	}
	else if (dest == "international"){
		bCost = aCost+24.99
	}
	else {
		bCost = aCost+0
	}

	var dateSent = document.getElementById('ds').value
	var date = dateSent.split("-") // split date string into 		mm dd yyyy
	var month = date[1]
    var month = parseInt(month, 10)	
	if (month >= 1 && month <= 4) {
		cCost = bCost + 4.99
	} else if (month >=5 && month <=9) {
		cCost = bCost + 2.99
		}
		else if (month >=10 && month <= 12) {
			cCost = bCost + 7.99
	}
		else {
			cCost = bCost + 0
		}

	var dateReceive = document.getElementById('tbr').value
	var sMethod = document.getElementById('serv').value
	if (sMethod == "standard") {
		finalCost = cCost + 3.97
	}
	else if (sMethod = "expedite"){
		finalCost = cCost + 12.94
	} else {
			finalCost = cCost + 0
		}
	
	finalCost = finalCost.toFixed(2)
	document.getElementById('tcost').value = String(finalCost)
	
	// save cookies
	fCost = parseInt(finalCost, 10)
	destination = document.getElementById('dest').value 
	saveVar('fCost')
	saveVar('destination')
}
