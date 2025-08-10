import {PageWrapper} from '../../components/PageWrapper/PageWrapper';
import {CharacterCard} from '../../components/Card/CharacterCard/CharacterCard';
import process from "node:process";
import {CharacterType, ResponseType} from "../../assets/api/rick-and-morty-api";


async function getCharacters():Promise<ResponseType<CharacterType>>{
    const res=await fetch(`${process.env.NEXT_PUBLIC_RICK_API_URL}/character`)
    return await res.json()
}

export default async function Characters ()  {
const {results}= await getCharacters()

    const charactersList = results.map(character => (
        <CharacterCard key={character.id} character={character}/>
    ))

    return (
        <PageWrapper>
            {charactersList}
        </PageWrapper>
    )
}
