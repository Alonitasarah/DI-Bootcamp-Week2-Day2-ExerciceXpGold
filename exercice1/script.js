let language = prompt("Quel langue vous parlez?");

language = language.toLowerCase();

switch (language) {
  case "french":
    console.log("Bonjour")
    break;
  case "english":
    console.log("Hello")
    break;
    case "hebrew":
    console.log("Shalom")
    break;
    default:
        console.log("01110011 01101111 01110010 01110010 01111001")
}
