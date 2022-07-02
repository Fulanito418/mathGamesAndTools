

document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const timestables = document.querySelector('input').value

    try{
        const response = await fetch(`https://mathapirockit.herokuapp.com/api`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data[0]
    }catch(error){
    console.log(error)
}
}