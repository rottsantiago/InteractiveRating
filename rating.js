let myRating = 0;

function resetClasses() {
    for(let i = 0; i < 5; i++){
        document.getElementById(`value${i+1}`).classList.remove('active');
        document.getElementById(`value${i+1}`).style.backgroundColor = "hsl(214, 19%, 24%)";
        document.getElementById(`value${i+1}`).style.color = "hsl(217, 12%, 63%)";
    }
}

function setValue(number){
    myRating = number;
    resetClasses();
    document.getElementById(`value${number}`).classList.add('active');
    document.getElementById(`value${number}`).style.backgroundColor = "hsl(217, 12%, 63%)";
    document.getElementById(`value${number}`).style.color = "white";
}

function switchState(){
    document.getElementById('rating-state').classList.remove('showing');
    document.getElementById('thankyou-state').classList.add('showing');
    document.getElementById('selected-value').innerText = ` ${myRating} `;
}