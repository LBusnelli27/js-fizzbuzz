// Iniz. count for the for cycle
let count = 1;

// EventListener on gen 10 box btn
const userBtnGen = document.getElementById('my-btn-add-10');
userBtnGen.addEventListener('click', function() {
    console.log('Added 10 boxes - btn pressed');

    // Increses the count by 10 
    count = count + 10;

    // For cycle to gen only 10 boxes
    for (let i = count - 10; i < count; i++) {

        let text = i;
        // If the number is divisible by 3 and by 5
        if (((i % 3) == 0) && ((i % 5) == 0)) {
            text = 'FizzBuzz';
        }
        // If the number is divisible by 3
        else if ((i % 3) == 0) {
            text = 'Fizz';
        } 
        // If the number is divisible by 5
        else if ((i % 5) == 0) {
            text = 'Buzz';
        }


        // Manipulate the dom to create the box
        let box = document.createElement("div");
        box.classList.add("col-3" , "p-4" , "text-center" , "fw-bold" , "bg-warning" , "my-box");
        document.getElementById("my-row-boxes").append(box);
        box.innerHTML = text;
    }
});

// ! The code under this line is used to crate all the 100 boxes when you open the html

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