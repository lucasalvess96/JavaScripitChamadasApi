async function RequisicaoApi(){
    try{
        const url = "https://jsonplaceholder.typicode.com/users"
        const response = await fetch(url)
        const data = await response.json()
        //console.log(data)
        MostrandoNaPage(data)
    }
    catch(error){
        console.log(error)
    }
}
RequisicaoApi()

async function MostrandoNaPage(users){
    let saida = ''
    for(const user of users){
        saida += `<li>${user.name}<li/>`
    }
    const mostrar = await document.getElementById("listando")
    mostrar.innerHTML = saida
}