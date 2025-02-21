var searchBox = document.getElementById("userSearch");
var searchResults = document.getElementById("searchResults");
// ?. significa que algo pode estar supostamente vaziao ou não
// generics == <HTMLInputElement> (elementos de html/formulário que recebem value)
//
searchBox === null || searchBox === void 0 ? void 0 : searchBox.addEventListener("change", function () {
    var searchBoxValue = searchBox.value.toLowerCase();
    if (searchBoxValue) {
        fetch("/22Aula/user.json")
            .then(function (response) { return response.json(); })
            .then(function (users) {
            var userFound = users.find(function (user) { return user.name.toLowerCase().includes(searchBoxValue); });
            console.log(userFound);
            if (userFound) {
                searchResults.innerHTML =
                    "<dl>\n                        <dt>Name:</dt>\n                            <dd> ".concat(userFound.name, "</dd>\n                        <dt>Last name:</dt>\n                            <dd> ").concat(userFound.username, "</dd>\n                        <dt>Tell:</dt>\n                            <dd> ").concat(userFound.phone, "</dd>\n                        <dt>Email:</dt>\n                            <dd> ").concat(userFound.email, "</dd>\n                    </dl>");
            }
            else {
                searchResults.innerHTML = "<p role=\"alert\">N\u00E3o foram encontrados resultados de pesquisa</p>";
            }
        });
    }
});
