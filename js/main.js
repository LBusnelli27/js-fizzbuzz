let box = document.createElement("div");
box.classList.add("col-2" , "p4" , "text-center" , "bg-warning" , "my-box");


for (let i = 1; i < 101; i++) {

    if (((i % 3) == 0) && ((i % 5) == 0)) {
        console.log('FizzBuzz');
    } else if ((i % 3) == 0) {
        console.log('Fizz');
    } else if ((i % 5) == 0) {
        console.log('Buzz');
    } else {
        document.getElementsByClassName("my-row-boxes").innerHTML = box;
        document.getElementsByClassName("my-box").innerHTML = "ciao";
    }
}