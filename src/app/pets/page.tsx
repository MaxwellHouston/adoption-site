import { getAllPets, getPetById } from "~/utils/pets-service";
import PetsList from "./PetsList";

const Pets: React.FC = async () => {

    const pets = await getAllPets();
    //const pet = await getPetById("2NLaZkY4b6NyHGkSl0O5");

    return (
        <div>
            <PetsList pets={pets} />
        </div>
    )
}

export default Pets