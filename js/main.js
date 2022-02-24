const userBtnGen = document.getElementById('my-btn-add-10');
userBtnGen.addEventListener('click', function() {
    console.log('Added 10 boxes - btn pressed');

    for (let i = 1; i < 11; i++) {

        let text = i;
        if (((i % 3) == 0) && ((i % 5) == 0)) {
            text = 'FizzBuzz';
        } else if ((i % 3) == 0) {
            text = 'Fizz';
        } else if ((i % 5) == 0) {
            text = 'Buzz';
        }
    
    
        let box = document.createElement("div");
        box.classList.add("col-3" , "p-4" , "text-center" , "fw-bold" , "bg-warning" , "my-box");
        document.getElementById("my-row-boxes").append(box);
        box.innerHTML = text;
    }
});

// ! Questo codice sotto commentato crea tutti i quadrati fino a 100

// for (let i = 1; i < 101; i++) {

//     let text = i;
//     if (((i % 3) == 0) && ((i % 5) == 0)) {
//         text = 'FizzBuzz';
//     } else if ((i % 3) == 0) {
//         text = 'Fizz';
//     } else if ((i % 5) == 0) {
//         text = 'Buzz';
//     }


//     let box = document.createElement("div");
//     box.classList.add("col-3" , "p-4" , "text-center" , "fw-bold" , "bg-warning" , "my-box");
//     document.getElementById("my-row-boxes").append(box);
//     box.innerHTML = text;
// }