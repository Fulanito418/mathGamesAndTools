console.log('hello from main js')

/* ***********Flip Card with JS************ */

var cards = document.querySelectorAll('.card');

[...cards].forEach((card)=>{
  card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
  });
});

const frontCard = document.querySelector('.card__face--front');
const cardButton = document.querySelector('.cardButton');
const appTitle = document.querySelector('.appTitle');

cardButton.addEventListener( 'click', apiRequest)

// ***********************************************

function randomNumberOneToFive(){
    return Math.ceil(Math.random()*5)
}

async function apiRequest(){
    //const timestables = document.querySelector('input').value

    try{
        //const response = await fetch(`https://mathapirockit.herokuapp.com/api/${workout}`)
        const response = await fetch(`https://mathapirockit.herokuapp.com/api/multiply`)
        const data = await response.json()

        console.log(data[randomNumberOneToFive()-1])
        document.querySelector('.card__face--front').innerText = data[randomNumberOneToFive()-1]['factors']

        //return data[randomNumberOneToFive()-1]['factors']
    }catch(error){
    console.log(error)
}
}
