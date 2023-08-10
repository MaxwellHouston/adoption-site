import Image from "next/image";
import { getPetById } from "~/utils/pets-service"


export default async  function PetProfile({ params }: {params: {petId: string}}) {

    const pet = await getPetById(params.petId);

    return(
        <div>
            <h1>{pet.name}</h1>
            <Image src={pet.imgSrc} alt={'cat'} width={500} height={500} />
        </div>
    )
}