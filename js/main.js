console.log('hello from main js')

function randomNumberOneToFive(){
    return Math.ceil(Math.random()*5)
}

document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    //const timestables = document.querySelector('input').value

    try{
        //const response = await fetch(`https://mathapirockit.herokuapp.com/api/${workout}`)
        const response = await fetch(`https://mathapirockit.herokuapp.com/api/multiply`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data[randomNumberOneToFive()-1]['factors']
    }catch(error){
    console.log(error)
}
}
