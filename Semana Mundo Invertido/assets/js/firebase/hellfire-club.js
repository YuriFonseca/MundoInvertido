import app from './app.js';
import { getFirestore, collection, addDoc, getDocs   } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'

//Exportando Função para Salvar no Firebase
export async function subscribeToHellfireClub(subscription) {
    const db = getFirestore(app);
    const HellFireClubCollection = collection(db, 'HellFireClub');
    const docRef = await addDoc(HellFireClubCollection, subscription);
    return docRef.id;
}
//Exportando Função para Exibir os dados do meu banco de dados Firebase
export async function getHellfireClubSubscription() {
    const db = getFirestore(app);
    const HellFireClubCollection = collection(db, 'HellFireClub');
    const HellFireClubCollectionSnapshot = await getDocs(HellFireClubCollection);
    const subscriptions = HellFireClubCollectionSnapshot.docs.map(doc => doc.data());
    return subscriptions;
}

