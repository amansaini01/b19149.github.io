alert("This programme will check your fitness level using BMI")
var ht = prompt("Enter your height(in m) -");
var wt = prompt("Enter your weight(in kg) -");

bmi1 =  wt/(ht*ht);
document.write("<h2>Your Body Mass Index is " + bmi1+"</h2>");
if(bmi1 > 25 && bmi1 < 30) {
	document.write("<h2>You fall under overweight category.</h2>");
	wtr = (ht*ht*22);
	document.write("<h2>You should loose " + (wt - wtr) + " kg weight to fall under Healthy category.</h2>");
} else if(18.5 < bmi1 && bmi1 < 25 ) {
	document.write("<h2>You fall under Healthy category.</h2>");
	
} else if(bmi1 < 18.5) {
	document.write("<h2>You fall under Underweight category.</h2>");
	wtr = (ht*ht*18);
	document.write("<h2>You should gain " + (wtr - wt) + " kg weight to fall under Healthy category.</h2>");
}
else if(bmi1 > 30){
	document.write("<h2>You fall under Obese category.</h2>");
	wtr = (ht*ht*22);
	document.write("<h2>You should loose " + (wt - wtr) + " kg weight to fall under Healthy category.</h2>");
}

