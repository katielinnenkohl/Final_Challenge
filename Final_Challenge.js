function checkPrime(number) {
    if ((number) <= 1 || (number) != Math.floor(number)) {
        return "not prime"
    }
    for ( i = 2; i <= (number) / 2; i++){
        if (number % i == 0){
            return "not prime";
        }
    }
    return "prime";

}
function timesTable(number){
var rows = number +1;
var cells = number +1;
document.write ("<table border = 1>");
for (i = 1; i < rows; i++){
    document.write ("<tr>");

for (j = 1; j < cells; j++){
    document.write ("<td>" , i*j , "</td>");
}
    document.write("</tr>");
}
    document.write("</table")
    }

function primeTable(number){
var rows = number +1;
var cells = number +1;
document.write ("<table border = 1>");
for (i = 1; i < rows; i++){
    document.write ("<tr>");

for (j = 1; j < cells; j++){
    document.write ("<td>" , i*j , "</td>");
}
    document.write("</tr>");
}
    document.write("</table")
    }
