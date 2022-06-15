function calculate() {
    //Get Input
   
   var heightunits = document.getElementById("heightunits").value;

   var weightunits = document.getElementById("weightunits").value;


  

   //Calculation
   let BMI = (weightunits / ((heightunits * heightunits) 
   / 10000)).toFixed(2);

   //Results
document.getElementById("output").innerHTML = Math.round(BMI * 100)/100;
   if (BMI < 18.5) document.getElementById("comment").innerHTML = "Underweight";
   if (BMI >= 18.5 && BMI <= 25) document.getElementById("comment").innerHTML = "Normal";
   if (BMI >= 25 && BMI <= 30) document.getElementById("comment").innerHTML = "Currently Bulking";
   if (BMI > 30) document.getElementById("comment").innerHTML = "Overweight";
   document.getElementById("answer").value = output;
}