
// linear equation js file starts here
function linearEquation(val1, val2, val3){
    //parameter collection
    var aInput = document.getElementById("valueA").value
    var bInput = document.getElementById("valueB").value
    var cInput = document.getElementById("valueC").value
    
    //splitting the fractions
    let acomponent = aInput.split("/")
    let aNum = acomponent[0]
    let dNum = acomponent > 1 ? acomponent[0] : 1;
    let result = aNum/dNum

    console.log(result);
}
// linear equation js file starts here



var menuIcon = document.querySelector(".menu-icon")
var menu = document.querySelector(".navigation")

menuIcon.addEventListener("click", function () {
    menu.classList.toggle("active")
})



// Quadratic equation js file starts here
function quadraticEquation(){
    var a = parseFloat(document.getElementById("a").value)
    var b = parseFloat(document.getElementById("b").value)
    var c = parseFloat(document.getElementById("c").value)
    let discriminant = b * b - 4 * a * c;


    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        document.getElementById("solution").innerHTML = "Please enter valid numbers for a, b, and c.";
    } else if (a === 0) {
        document.getElementById("quadratic-solution").innerHTML = "a cannot be 0.";

    } else if (discriminant < 0) {
        let realPart = (-b / (2 * a)).toFixed(2);
        let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
        document.getElementById("quadratic-solution").innerHTML = "The equation has complex roots:<br>";
        document.getElementById("quadratic-solution").innerHTML += "x1 = " + realPart + " + " + imagPart + "i" + "<br>";
        document.getElementById("quadratic-solution").innerHTML += "x2 = " + realPart + " - " + imagPart + "i";
    } else {
        let root1 = ((-b + Math.sqrt(discriminant)) / (2 * a)).toFixed(2);
        let root2 = ((-b - Math.sqrt(discriminant)) / (2 * a)).toFixed(2);
        // outputing the values to the innerhtml
        document.getElementById("quadratic-solution").innerHTML = "The roots of the equation are:<br>";
        document.getElementById("quadratic-solution").innerHTML += "x1 = " + root1 + "<br>";
        document.getElementById("quadratic-solution").innerHTML += "x2 = " + root2 + "<br>";
        document.getElementById("quadratic-workings-button").style ="display: block"
    }
    
}
// the inner html text starts here 
function quadraticSteps(){
    //inputs
    var a = parseFloat(document.getElementById("a").value);
    var b = parseFloat(document.getElementById("b").value);
    var c = parseFloat(document.getElementById("c").value);

    // mathematics symbols
    let sqrt = "\u221A";
    let plusMinus = "\u00B1";

    // constant values solving
    const four = 4;
    const two = 2;
    const squareB = b ** 2;
    const prodOfTwoAnda = (two * a); 
    const operOfdiscriminant =   (four * a * c) ;
    const squareOfDiscriminant = squareB - operOfdiscriminant;
    const discriminant = Math.sqrt(squareOfDiscriminant);
    const numeratorX1 = -b + discriminant;
    const numeratorX2 = -b - discriminant;
    const root1 = (numeratorX1 / prodOfTwoAnda).toFixed(2);
    const root2 = (numeratorX2 / prodOfTwoAnda).toFixed(2);
    console.log(operOfdiscriminant);
    //sign checkers
    var acheck = a <= 1 ? "" : a;
    var plusB = b >= 0 ? "+" : "";
    var plusC = c >= 0 ? "+" : "";
    document.getElementById("quadratic-steps").innerHTML = "<li>" + "Question: "+ acheck + "x <sup> 2 </sup> "+ plusB + b + "x  "+plusC + c + " = " + 0 + "</li>" + "<br>" +
    //step 1
    "<li>" + "Step 1: " + "Using the quadratic formula method - b "+ plusMinus + " " + sqrt +" " + "( b <sup> 2 </sup> - 4ac) / 2a" + "<br>"+
    //step 2
    "<li>"+"Step 2: Substituting the values " +"<br>"+ "- "+ b +" "+ plusMinus+ " "  + sqrt + "("+ b +"<sup> 2 </sup> " + " - " + four + " * " + a +  " * " + c + ")" +" " +  "/ " + two + " * " + a +" </li>" +"<br>"+
    //step 3
    "<li>"+"Step 3:" +" -" + b + " "+ plusMinus +" "+ sqrt + "( "+ squareB  + "- " + operOfdiscriminant+ ") " + " / " + prodOfTwoAnda + "<br>"+
    //step 4
    "<li>" +"Step 4:" +" -"+ b + " " + plusMinus+ " "+ sqrt + " "+ squareOfDiscriminant + " / " + prodOfTwoAnda+ "</li>" +"<br>"+

    //step 5
    "<li>" +"Step 5: " + " x =  "+ " -"+ b + " " + "+" + " "+ sqrt + " "+ squareOfDiscriminant + " / " + prodOfTwoAnda + "  "+ " "+ "   or "+" -"+  b + " " + "-" + " "+ sqrt + " "+ squareOfDiscriminant + " / " + prodOfTwoAnda + "</li>"+"<br>"+
    //step 6
    "<li>"+"Step 6: "  +" x1 = "+ "-" + b + " " + "+" + " "+ sqrt + " "+ squareOfDiscriminant + " / " + prodOfTwoAnda          + "</li>" +"<br>"+
    //step 7
    "<li>"+"Step 7: " +"x1 = "+ " ( " + " - " + b + " + " + discriminant + " ) " +" / " + two     +"</li>"+"<br>"+
    //step 8
    "<li>"+"Step 8: " +"x1 = "+ numeratorX1+ " / " + two    +"</li>" +"<br>"+
    //step 9
    "<li>"+"Step 9: " +"x1 = "+ root1       +"</li>" +"<br>"+
    //step 10
    "<li>"+"Step 10: "  +" x2 = "+ "-" + b + " " + "-" + " "+ sqrt + " "+ squareOfDiscriminant + " / " + prodOfTwoAnda          + "</li>" +"<br>"+
    //step 11    
    "<li>"+"Step 11: " +"x2 = "+ " ( " + " - " + b + " - " + discriminant + " ) " +" / " + two     +"</li>"+"<br>"+
    //step 12
    "<li>"+"Step 12: " +"x2 = "+ numeratorX2+ " / " + two    +"</li>" +"<br>"+
    //step 13
    "<li>"+"Step 9: " +"x2 = "+ root2       +"</li>" +"<br>"+
    "<li>"+"Therfore: x1 = "+ root1 + " and x2 = "+ root2  +"</li>"
    
    ;
    
}
// Quadratic equation js file starts here





// simple intrest js file starts here

function simpleIntrest(){
    // taking user input from the html form
    var principal = document.getElementById("intrest-principal-field").value;
    var rate = document.getElementById("intrest-rate-field").value;
    var time = document.getElementById("intrest-time-field").value;
    principal = Number(principal);
    rate = Number(rate);
    time = Number(time);
    var naira = "\u20A6"
    console.log(naira);

    const i = (principal * rate * time) / 100
    document.getElementById("intrest-solution").innerHTML = " Intrest = " + naira + i;
}
// intrest steps
function intreststeps(){
    // taking user input from the html form
    var principal = document.getElementById("intrest-principal-field").value;
    var rate = document.getElementById("intrest-rate-field").value;
    var time = document.getElementById("intrest-time-field").value;
    var naira = "\u20A6"
    // constant values and computations
    const productOfNumerator = (principal * rate * time);
    const hundred = 100;
    const intrest = productOfNumerator / hundred;

    // steps
    document.getElementById("intrest-steps").innerHTML = "<li>" + "FORMULA : INTREST(I) = (P * R * T) / 100 " +"</li>"+ "<br>"+
    // step 1
    "<li>" +"Step 1: " +"I = "+ "(" + principal+ "*" + rate+ "*" + time + ")"+ "/" + hundred+  "</li>"+ "<br>" +
    // step 2
    "<li>"+"Step 2: " +"I = " +productOfNumerator + " / " + hundred +"</li>"+ "<br>"+
    // step 3
    "<li>"+"Step 3: " +"I = "+ naira  + intrest  +"</li>"+"<br>"+
    "<li>"+"Therefore the Intrest generated is "+naira +intrest +"</li>"
    ;
}

// simple intrest (principal ) starts here

function principal(){
    // taking user input from the html form
    var intrest = document.getElementById("principal-intrest-field").value;
    var rate = document.getElementById("principal-rate-field").value;
    var time = document.getElementById("principal-time-field").value;
    intrest = Number(intrest);
    rate = Number(rate);
    time = Number(time);
    var naira = "\u20A6";

    
    const p = (intrest * 100) / (rate * time);
    document.getElementById("principal-solution").innerHTML = " Principal = " + naira + p;
}
//principal steps
function principalsteps(){
    // taking user input from the html form
    var intrest = document.getElementById("principal-intrest-field").value;
    var rate = document.getElementById("principal-rate-field").value;
    var time = document.getElementById("principal-time-field").value;
    var naira = "\u20A6";

    // constant values
    const hundred = 100;
    const productOfNumerator = (intrest * hundred);
    const productOfDenominator = (rate * time);
    const principal = productOfNumerator / productOfDenominator;

    // steps
    document.getElementById("principal-steps").innerHTML = "<li>" + "FORMULA : PRINCIPAL(P) = (I * 100) / (R * T) " +"</li>"+ "<br>"+
    // step 1
    "<li>" +"Step 1: " +" P = "+ "(" + intrest + " * "+ hundred+ ")"+ "/" + rate+ "*" + time+  "</li>"+ "<br>" +
    // step 2
    "<li>"+"Step 2: " +" P = " +productOfNumerator + " / " + productOfDenominator +"</li>"+ "<br>"+
    // step 3
    "<li>"+"Step 3: " +" P = "+ naira  + principal  +"</li>"+"<br>"+
    "<li>"+"Therefore the Principal  is "+naira +principal +"</li>"
}
// simple intrest(rate) starts here
function rate(){
    // taking user input from the html form
    var intrest = document.getElementById("rate-intrest-field").value;
    var principal = document.getElementById("rate-principal-field").value;
    var time = document.getElementById("rate-time-field").value;
    intrest = Number(intrest);
    principal = Number(principal);
    time = Number(time);
    var naira = "\u20A6";
    
    const r = (intrest * 100) / (principal * time);
    document.getElementById("rate-solution").innerHTML = " RATE = " + "%" + r;
    console.log(r);
}
// rate steps
function ratesteps(){
     // taking user input from the html form
    var intrest = document.getElementById("rate-intrest-field").value;
    var principal = document.getElementById("rate-principal-field").value;
    var time = document.getElementById("rate-time-field").value;
    var naira = "\u20A6";
     // constant values
    const hundred = 100;
    const productOfNumerator = (intrest * hundred);
    const productOfDenominator = (principal * time);
    const rate = productOfNumerator / productOfDenominator;

     // steps
     document.getElementById("rate-steps").innerHTML = "<li>" + "FORMULA : RATE(R) = (I * 100) / (P * T) " +"</li>"+ "<br>"+
     // step 1
     "<li>" +"Step 1: " + " R = "+ "(" + intrest + " * "+ hundred+ ")"+ "/" + principal+ "*" + time+  "</li>"+ "<br>" +
     // step 2
    "<li>"+"Step 2: " +" R = " +productOfNumerator + " / " + productOfDenominator +"</li>"+ "<br>"+
     // step 3
    "<li>"+"Step 3: " +" R = "+ naira  + principal  +"</li>"+"<br>"+
    "<li>"+"Therefore the Rate  is "+ "%" +rate +"</li>"
}

// simple intrest(Time starts here)
function time(){
    // taking user input from the html form
    var intrest = document.getElementById("time-intrest-field").value;
    var principal = document.getElementById("time-principal-field").value;
    var rate = document.getElementById("time-rate-field").value;
    intrest = Number(intrest);
    principal = Number(principal);
    rate = Number(rate);
    
    const t = (intrest * 100) / (principal * rate);
    document.getElementById("time-solution").innerHTML = " TIME = " + t +" years";
    
}
// time steps
function timesteps(){
     // taking user input from the html form
    var intrest = document.getElementById("time-intrest-field").value;
    var principal = document.getElementById("time-principal-field").value;
    var rate = document.getElementById("time-rate-field").value;
     // constant values
    const hundred = 100;
    const productOfNumerator = (intrest * hundred);
    const productOfDenominator = (principal * rate);
    const time = productOfNumerator / productOfDenominator;

     // steps
     document.getElementById("time-steps").innerHTML = "<li>" + "FORMULA : TIME(T) = (I * 100) / (P * R) " +"</li>"+ "<br>"+
     // step 1
     "<li>" +"Step 1: " + " T = "+ "(" + intrest + " * "+ hundred+ ")"+ "/" + principal+ "*" + rate+  "</li>"+ "<br>" +
     // step 2
    "<li>"+"Step 2: " +" T = " +productOfNumerator + " / " + productOfDenominator +"</li>"+ "<br>"+
     // step 3
    "<li>"+"Step 3: " +" T = "  + principal +"</li>"+"<br>"+
    "<li>"+"Therefore the Time  is " +time +  " years" + "</li>"
}

// mean starts here
function calculateMean() {
    // Get user input
    const numbersInput = document.getElementById("mean-numbers").value;
    const numbersArray = numbersInput.split(",").map(Number);
    
    // Calculate the mean
    const sum = numbersArray.reduce((total, num) => total + num);
    const mean = (sum / numbersArray.length).toFixed(2);
    document.getElementById("mean").innerHTML = "Mean = " + mean;


    // Generate solution steps
    var solutionSteps = numbersArray.join(" + ") + " = " + sum + "<br>"+"Total numbers = " + numbersArray.length +"<br>"
    +"Mean =  ";
    solutionSteps += sum + " / " + numbersArray.length + " = " + mean;

    // Display result
    const resultDiv = document.getElementById("mean-result");
    resultDiv.innerHTML = "<h2>Solution</h2>" + "<br>" +"Mean = Sum of all the numbers / total numbers " +"<br>"
    +"Sum = " + solutionSteps;
}

// median script starts here

function calculateMedian() {
    const input = document.getElementById("median-numbers").value;
    const numbers = input.split(",").map(Number).sort(function(a, b){return a - b});
    const len = numbers.length;
    let median;

    if (len % 2 === 0) {
    const mid = len / 2;
    median = (numbers[mid - 1] + numbers[mid]) / 2;
    document.getElementById("median-result").innerHTML = "The median of " + input + " is " + median + ".<br><br>Steps:<br><br> Step 1. Sort the numbers in ascending order: " + numbers + ".<br> Step 2. Find the middle two numbers( because the length is an odd number ): " + numbers[mid - 1] + " and " + numbers[mid] + ".<br> Step 3. Add these two numbers together and divide by 2: (" + numbers[mid - 1] + " + " + numbers[mid] + ") / 2 = " + median + ".";
    } else {
    const mid = Math.floor(len / 2);
    median = numbers[mid];
    document.getElementById("median-result").innerHTML = "The median of " + input + " is " + median + ".<br><br>Steps:<br><br>Step 1. Sort the numbers in ascending order: " + numbers + ".<br> Step 2. Find the middle number: " + median + ".";
    }
}

// mode script starts here

function calculateMode() {
    // Get user input
    const numbers = document.getElementById("mode-numbers").value;
    
    // Convert string of numbers to an array
    const numbersArray = numbers.split(",").map(Number);
    
    // Calculate the mode
    const counts = {};
    let maxCount = 0;
    let mode;
    for (let num of numbersArray) {
        counts[num] = (counts[num] || 0) + 1;
        if (counts[num] > maxCount) {
            maxCount = counts[num];
            mode = num;
        }
    }
    
    // Write solving steps to innerHTML
    let steps = "<p><b>Steps:</b></p>";
    steps += "<p>1. Numbers = "+ numbers +".</p>";
    steps += "<p>2. Loop through the numbers and count the frequency of each number.</p>";
    steps += "<p>3. the number with the highest occurance(frequency) is the mode.</p>";
    steps += "<br>";
    steps += "<p>The mode is: " + mode + " because it has the highest occurance by appearing "+maxCount+ " times" + "</p>";
    
    // Display the result
    document.getElementById("mode").innerHTML = "Mode = " + mode;
    document.getElementById("mode-output").innerHTML = steps;
}
// 2 X 2 matrix determinant js section
function calculateDeterminant() {
    // Get the values of a, b, c, and d from the user input
    var a = parseInt(document.getElementById("det2a").value);
    var b = parseInt(document.getElementById("det2b").value);
    var c = parseInt(document.getElementById("det2c").value);
    var d = parseInt(document.getElementById("det2d").value);

    // Calculate the determinant of the 2x2 matrix
    var determinant = (a * d) - (b * c);

    // Display the workings in an array bracket in the HTML
    var output = document.getElementById("det2-output");
    output.innerHTML = "<h2> Solution: </h2> "+ "To calculate the determinant of a 2 X 2 matrix you have to subtract the product of the right leading diagonal from the left lerading diagonal" + "<br>" + "Formula:  (a * d) - (b * c) <br>"+
    "|" + a + " " +" " + b + "|" + "<br>" + "|" + c + " " + d + "|" + "<br><br>" + "Determinant = (" + a + " x " + d + ") - (" + b + " x " + c + ") = " + determinant;
}

// 2 X 2 matrix inverse js section

function calculateInverse() {
    let a = parseFloat(document.getElementById("inverseA").value);
    let b = parseFloat(document.getElementById("inverseB").value);
    let c = parseFloat(document.getElementById("inverseC").value);
    let d = parseFloat(document.getElementById("inverseD").value);

    let determinant = (a * d) - (b * c);
    let inverse = 1 / determinant;
    //replacing with the inverse values
    let a11 = d;
    let a12 = -b;
    let a21 = -c;
    let a22 = a;
    let space = "\u00A0"
    // inverse multiplication values
    let inverseA11 = (inverse * a11).toFixed(0);
    let inverseA12 = (inverse * a12).toFixed(0);
    let inverseA21 = (inverse * a21).toFixed(0);
    let inverseA22 = (inverse * a22).toFixed(0);
    // solution starts
    document.getElementById("det2inverse").innerHTML = "<h2> Solution </h2> "+ "| " + a + " " + b + " |" +"<br>" + "| "+ c + " " + d + " |" +"<br>" +"<br>" +" To find the inverse of the matrix we'll have to find the determinant of the matrix first <br>"+" formula: (a * d) - (b * c) <br>"+"Determinant = ( " + a + " x " + d + " ) - ( " + b + " x " + c + " ) = "+ determinant + "<br>"+"To get the inverse we have to swap the left diagonals postion the add negetive signs  too  the right diagonal as seen below <br>"+"| "+ a11+ " "+ a12 +" | <br>"+"| "+a21+ " " +a22+ " |" +"<br>" +"Inverse A<sup>-1</sup> = (1/det) * A <br> "+ "( 1 / "+determinant +")"+space +" * " +space  +"| "+ a11+ " "+ a12 +" | <br>"+space+space+space+space+space+space+space+space+space+space+space+space+space+space+space+space+space+space+"| "+a21+ " " +a22+ " | <br>"+"so therefore the inverse of the matrix <br>"+"= | "+ inverseA11+ " "+ inverseA12+" | <br> "+space+space+space +"| "+ inverseA21+ " " + inverseA22+ " |";

}

//3x3 matrix determinant starts here



function calculate() {
    // Get the input values
    let a11 = parseInt(document.getElementById("det3a11").value);
    let a12 = parseInt(document.getElementById("det3a12").value);
    let a13 = parseInt(document.getElementById("det3a13").value);
    let a21 = parseInt(document.getElementById("det3a21").value);
    let a22 = parseInt(document.getElementById("det3a22").value);
    let a23 = parseInt(document.getElementById("det3a23").value);
    let a31 = parseInt(document.getElementById("det3a31").value);
    let a32 = parseInt(document.getElementById("det3a32").value);
    let a33 = parseInt(document.getElementById("det3a33").value);

    // Calculate the determinant
    let det = ((a11*a22*a33 + a12*a23*a31 + a13*a21*a32) - (a31*a22*a13 - a32*a23*a11 - a33*a21*a12));
    const unit1 = (a11*a22*a33);
    const unit2 = (a12*a23*a31);
    const unit3 = (a13*a21*a32);
    const unit4 = (a31*a22*a13);
    const unit5 = (a32*a23*a11);
    const unit6 = (a33*a21*a12);
    const prodLeft = (unit1 + unit2 + unit3);
    const prodRight = (unit4 + unit5 + unit6);
    var determinant = (prodLeft - prodRight)
    // Display the determinant and workings in an array bracket
    document.getElementById("determinant3-result").innerHTML = "<h2> Solution </h2> <br> "+"Given: <br><br>"  +" | "+a11+ " "+a12+ " "+a13+ " | <br>"+ " | "+a21+ " " +a22+ " " +a23+ " | <br> "+ " | "+a31+ " "+a32+ " "+a33+ " | <br><br>"+"Determinant =  "+"  ((a11*a22*a33 + a12*a23*a31 + a13*a21*a32) - (a31*a22*a13 - a32*a23*a11 - a33*a21*a12)) <br> "+
    "Determinant = "+ "( "+unit1+ " + "+unit2+ " + "+unit3+ ")" +" - "+" ( "+unit4+" + "+unit5+" + "+unit6+"  ) <br> "+
    "Determinant =  "+   " ( "+prodLeft+" ) "+ "-" +" ( "+prodRight+" ) <br> "+
    "Determinant =  "+ determinant;
}



function calculate() {
    // Get the input values
    let a11 = parseInt(document.getElementById("det3a11").value);
    let a12 = parseInt(document.getElementById("det3a12").value);
    let a13 = parseInt(document.getElementById("det3a13").value);
    let a21 = parseInt(document.getElementById("det3a21").value);
    let a22 = parseInt(document.getElementById("det3a22").value);
    let a23 = parseInt(document.getElementById("det3a23").value);
    let a31 = parseInt(document.getElementById("det3a31").value);
    let a32 = parseInt(document.getElementById("det3a32").value);
    let a33 = parseInt(document.getElementById("det3a33").value);

    // Calculate the determinant
    let det = ((a11*a22*a33 + a12*a23*a31 + a13*a21*a32) - (a31*a22*a13 - a32*a23*a11 - a33*a21*a12));
    const unit1 = (a11*a22*a33);
    const unit2 = (a12*a23*a31);
    const unit3 = (a13*a21*a32);
    const unit4 = (a31*a22*a13);
    const unit5 = (a32*a23*a11);
    const unit6 = (a33*a21*a12);
    const prodLeft = (unit1 + unit2 + unit3);
    const prodRight = (unit4 + unit5 + unit6);
    var determinant = (prodLeft - prodRight)
    // Display the determinant and workings in an array bracket
    document.getElementById("determinant3-result").innerHTML = "<h2> Solution </h2> <br> "+"Given: <br><br>"  +" | "+a11+ " "+a12+ " "+a13+ " | <br>"+ " | "+a21+ " " +a22+ " " +a23+ " | <br> "+ " | "+a31+ " "+a32+ " "+a33+ " | <br><br>"+"Determinant =  "+"  ((a11*a22*a33 + a12*a23*a31 + a13*a21*a32) - (a31*a22*a13 - a32*a23*a11 - a33*a21*a12)) <br> "+
    "Determinant = "+ "( "+unit1+ " + "+unit2+ " + "+unit3+ ")" +" - "+" ( "+unit4+" + "+unit5+" + "+unit6+"  ) <br> "+
    "Determinant =  "+   " ( "+prodLeft+" ) "+ "-" +" ( "+prodRight+" ) <br> "+
    "Determinant =  "+ determinant;
}



// solution navigation js starts here

const solution = document.querySelector(".solutionz");
const btns = document.querySelectorAll(".intrest-but");
const contents = document.querySelectorAll(".contentz");
solution.addEventListener("click", function (e) {
    const id = e.target.dataset.id;
    if (id) {
      // remove selected from other buttons
        btns.forEach(function (btn) {
        btn.classList.remove("active");
    });
        e.target.classList.add("active");
      // hide other articles
        contents.forEach(function (article) {
        article.classList.remove("active");
    });
        const element = document.getElementById(id);
        element.classList.add("active");
        
    }
});

