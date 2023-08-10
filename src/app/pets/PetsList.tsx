"use client"
import type { Pet } from "~/utils/pets-service";

const PetsList: React.FC<{pets: Pet[]}> = ({pets}) => {

    return (
        <div>
            <button onClick={() => console.log(pets)}>Test</button>
        </div>
    )
}

export default PetsList