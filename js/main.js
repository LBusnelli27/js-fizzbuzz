let rowBoxes = document.getElementById('my-row-boxes');


for (let i = 1; i < 101; i++) {

    if (((i % 3) == 0) && ((i % 5) == 0)) {
        console.log('FizzBuzz');
    } else if ((i % 3) == 0) {
        console.log('Fizz');
    } else if ((i % 5) == 0) {
        console.log('Buzz');
    } else {
        let box = document.createElement("div");
        box.classList.add("col-2" , "p4" , "text-center" , "bg-warning" , "my-box");
        rowBoxes.innerHTML += box;
        let boxContent = document.getElementsByClassName("my-box");
        boxContent.innerHTML = "ciao"; 
    }
}