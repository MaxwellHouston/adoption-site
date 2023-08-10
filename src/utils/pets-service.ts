import { doc, getDoc, getDocs, collection, query } from "firebase/firestore";
import { db } from "./firebase-config";

export interface Pet {
    id: string;
    species: string;
    breed: string;
    name: string;
    age: string;
    sex: string;
    color: string;
    location: string;
    weight: string;
    story: string;
    shotsCurrent: boolean;
    fixed: boolean;
    imgSrc: string;
}

export const getAllPets = async () => {
    const q = query(collection(db, 'pets'))
    const snapshot = await getDocs(q)
    const resp: Pet[] = [];
    snapshot.forEach(doc => resp.push({id: doc.id, ... doc.data()} as Pet));
    return resp;
}

export const getPetById = async (id: string) => {
    const snapshot = (await getDoc(doc(db, "pets", id))).data();
    return snapshot as Pet;
}