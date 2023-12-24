const titulo = document.querySelector("#titulo");

titulo.innerText = "TITULO"

const link = document.querySelector("a");

link.innerText = "Proz Educação"

const ul =document.querySelector("ul");

ul.innerHTML = "<li>Carro</li>" + "<li>Moto</li>" + "<li>Pedestre</li>"


let minhaLista = document.querySelector("#lista-ordenada");

        let itens = [
            { texto: "Linux-confih", link: "https://linuxconfig.org/linux-commands-cheat-sheet" },
            { texto: "Google-fonts", link: "https://fonts.google.com/" },
            { texto: "stackoverflow", link: "https://stackoverflow.com/" }
        ];

        let listaHTML = "";
        for (var i = 0; i < itens.length; i++) {
            listaHTML += "<li><a href='" + itens[i].link + "'>" + itens[i].texto + "</a></li>";
        }

        minhaLista.innerHTML = listaHTML;