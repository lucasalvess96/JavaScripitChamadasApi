async function api(){
    try{
      const url = 'https://api.github.com/users/lucasalvess96/repos';
      const getApi = await fetch(url)
      const data = await getApi.json()
      //console.log(data)
      show(data)
    }
    catch(error){
      console.log(error.message)
    }
  }
api()
  
function show(users){
    let output = ''
    for(const user of users){
        output += `<li>${user.name}<li/>`
    }
    const showall = document.querySelector(".demo")
    showall.innerHTML = output
}
