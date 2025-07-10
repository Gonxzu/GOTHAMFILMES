export default async function dadosJson(){

    try{
        const resposta = await fetch('cu.json');
        return await resposta.json();
    }
    catch(e){
        console.log(e);
    }

}