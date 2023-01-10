let Note = parseInt(prompt("Quelle est ta note?"));

if (Note > 90) {
    console.log("A")
}else if(Note > 80 && Note <= 90 ){
    console.log("B")
}else if(Note >= 70 && Note<= 80){
    console.log("C")
}else{
    console.log("D")
}