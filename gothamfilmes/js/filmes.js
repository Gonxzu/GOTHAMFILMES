import dadosJson from "./requisicao.js";

window.onload = function(){
    let posCard;
    const divCardImg = document.getElementById('cardFilms');
    divCardImg.style.display = 'none';
    const vet = [];

    (async () =>{
        const dados = await dadosJson();
        const vetorDados = Object.keys(dados).map(i => dados[i]);

        function constroiCard(dados){
            divCardImg.style.display = 'block';
            
            dados.forEach(valor => {
                let img = document.createElement('img');

                img.src = `${valor.imagem}`;

                divCardImg.appendChild(img);
            });
        }

        document.getElementById('aSuperman').addEventListener('click', e => {
            e.preventDefault();
        
            posCard = document.getElementById('aSuperman').getAttribute('value');
            vet.push(vetorDados[posCard]);

            constroiCard(vet);
        });

    })()

}