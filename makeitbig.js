let myInputName = document.getElementById("myInputName");
let myNameBtn = document.getElementById("myNameBtn");
let pingispic = document.getElementById("pingispic");


console.log("Innehållet i input", myInputName.value);


pingispic.addEventListener("click", () => {
    console.log("click på bild");

    console.log(pingispic.getAttribute("src"));

    if (pingispic.getAttribute("src") == "pingis1.png") {
        console.log("Det var ett fint racket!");
        pingispic.setAttribute("src", "pingis2.png")
    } else {
        pingispic.setAttribute("src", "pingis1.png")
    }


})


myNameBtn.addEventListener("click", () => {
    console.log("Innehållet i input efter click", myInputName.value);

    localStorage.setItem("myInputName", myInputName.value);
})

if (localStorage.getItem("myInputName")) {
    console.log("Det finns en nyckel med myName");
    myInputName.value = localStorage.getItem("myInputName");
    
}


function upper()
  {
	var uc = document.getElementById("myInputName").value;
	document.getElementById("myInputName").value = uc.toUpperCase();
  }



/*let person = {
    id: 100,
    name: "Sam",
    age: 31,
    boy: true
}

console.log("person", person.name);

localStorage.setItem("person", JSON.stringify(person));

let getPerson = JSON.parse(localStorage.getItem("person"));
console.log("getPerson", getPerson);
console.log("getPerson", getPerson.name);*/
