import { getHellfireClubSubscription, subscribeToHellfireClub } from './firebase/hellfire-club.js';

//Manipulando DOM
const txtName = document.getElementById('txtName');
const txtEmail = document.getElementById('txtEmail');
const txtLevel = document.getElementById('txtLevel');
const txtCharacter = document.getElementById('txtCharacter');
const btnSubscribe = document.getElementById('btnSubscribe');


//Adicionando um ouvinte pro meu botão
btnSubscribe.addEventListener('click', async () => {
    const subscription = {
        nome: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacter.value
    }

    //Salvar no Banco de Dados
   const subscriptionId = await subscribeToHellfireClub(subscription);
   console.log(`Inscrito com Sucesso: ${subscriptionId}`)

   //Limpando o Formulário
   txtName.value = '';
   txtEmail.value = '';
   txtLevel.value = '';
   txtCharacter.value = '';         

} )

//Carrega os dados do meu banco de dado e exibe no console log
async function loadData() {
    const subscriptions = await getHellfireClubSubscription();
    console.log(subscriptions)
}

loadData()