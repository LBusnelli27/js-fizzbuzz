

for (let i = 1; i < 101; i++) {

    let text = i;
    if (((i % 3) == 0) && ((i % 5) == 0)) {
        text = 'FizzBuzz';
    } else if ((i % 3) == 0) {
        text = 'Fizz';
    } else if ((i % 5) == 0) {
        text = 'Buzz';
    }

    
    let box = document.createElement("div");
    box.classList.add("col-2" , "p4" , "text-center" , "bg-warning" , "my-box");
    document.getElementById("my-row-boxes").append(box);
    box.innerHTML = text;
}