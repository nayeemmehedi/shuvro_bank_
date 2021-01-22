//1st problem

// kilometer to meter convert function

function kilometerToMeter(value) {
	if (value>=0){

		value = value*1000
	    return value
	}
	else{
		return "Don't give negative value..."
	}
 }

//finish first problem

//2nd problem start

function budgetCalculator(ghori = 0,phone = 0,laptop = 0){

	 if (ghori>=0 && phone>=0 && laptop>=0){

	 	 ghori = ghori *50
		 phone = phone * 100
		 laptop = laptop * 500

		 total = ghori+phone+ laptop 
	     return total
	 }
	 else {
	 	  return 'Give positive value..Thank u'
	   }
    }
   
//2nd problem finish

//3rd problem start
function hotelCost(day) {
	if (day >=0 ) {

			if( day<=10 ){
				first_vallue= day*100
				return first_vallue
			}
		    // if i use (11<=value<=20) and give input 22 this condition take it ...
			else if( 11<=day && 20>=day ){

			    second_vallue = (day -10)* 80  +  1000;
				//console.log("b")  
				//testing perpase
				return second_vallue
			}
			else if ( 21<= day <=10000 ){

				thrid_value = ((day-20)*50)+1800
				// console.log("c")
				//testing parpase
				return thrid_value
			}
			else {
				 
				return " Highest range 1-10000 days"
			}
		  }

	else {
		
		return "Please, Don't use negative values.."
	}
}

//third problem start...

//four problem start...

function megaFriend(arr) {

    maxLen = 0
    whoMax = 0

	for (i = 0; i < arr.length; i++) {

  	if(arr[i].length > maxLen) {

    	maxLen = arr[i].length
    	//console.log(maxLen)

  
      whoMax = arr[i]
      //console.log(whoMax)

    }
  }
  return whoMax
}
