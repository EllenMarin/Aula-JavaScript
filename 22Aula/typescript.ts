const searchBox = <HTMLInputElement>document.getElementById("userSearch");
const searchResults = <HTMLElement>document.getElementById("searchResults");

// ?. significa que algo pode estar supostamente vaziao ou não
// generics == <HTMLInputElement> (elementos de html/formulário que recebem value)
//
searchBox?.addEventListener("change", ()=>{

    const searchBoxValue = searchBox.value.toLowerCase();
    
    if(searchBoxValue){
        fetch("/22Aula/user.json")
            .then(response => response.json())
            .then(users => {

                const userFound = users.find(
                    user => user.name.toLowerCase().includes( searchBoxValue )
                );
                console.log(userFound)

                if(userFound){
                    searchResults.innerHTML = 
                    `<dl>
                        <dt>Name:</dt>
                            <dd> ${userFound.name}</dd>
                        <dt>Last name:</dt>
                            <dd> ${userFound.username}</dd>
                        <dt>Tell:</dt>
                            <dd> ${userFound.phone}</dd>
                        <dt>Email:</dt>
                            <dd> ${userFound.email}</dd>
                    </dl>`;
                }
                else{
                    searchResults.innerHTML = `<p role="alert">Não foram encontrados resultados de pesquisa</p>`;
                }

            });
    }
})
