import {CharacterType, ResponseType} from '../../../assets/api/rick-and-morty-api';
import {PageWrapper} from '../../../components/PageWrapper/PageWrapper';
import s from '../../../styles/styles.module.css'
import process from "node:process";

const getCharacters=async ():Promise<ResponseType<CharacterType>> =>{
    const res=await fetch(`${process.env.NEXT_PUBLIC_RICK_API_URL}/character`)
    return await res.json()
}

export  async function generateStaticParams(){
    const {results}=await getCharacters()
    return  results.map(el=>({id:el.id.toString()}))
}

export async function generateMetadata({params}:{params:{id:string}}){

    return{
        title:params.id,
        description:"App-router",
    }
}

export default async function Character  ({params}:{params:{id:string}})  {
    return (
        <PageWrapper>
            <h1 className={s.text}>ID: {params.id}</h1>
        </PageWrapper>
    )
}

