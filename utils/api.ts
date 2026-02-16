import { Accommodation, AirbnbApi } from "@/types/AirbnbDados"

export async function fetchData(): Promise<AirbnbApi> {

    try {
        const response = await fetch("https://web.codans.com.br/airbnb")
        const dados = response.json()
        return dados
    } catch (e) {
        throw e
    }

}

export async function fetchDataById(
    id: string
): Promise<Accommodation | undefined> {
    try {
        const dados = await fetchData()
        const acomodacao = dados.accommodation.find((item: Accommodation) => {
            return item.slug === id
        })
        return acomodacao
    } catch (e) {
        throw e
    }

}