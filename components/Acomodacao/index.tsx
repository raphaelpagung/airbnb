import { IconHeartFilled, IconStarFilled } from "@/assets/icones"

interface AcomodacaoProps {
    children: React.ReactNode
    local: string
    anfitriao: string
    data: string
    preco: number
    avaliacao: number
    preferidoHospedes: boolean
}

const Acomodacao = ( {
    children, local, anfitriao, data, preco, avaliacao, preferidoHospedes
}: AcomodacaoProps) => {
    return(
        <figure className="relative">
            
            <div className="p-2 absolute w-full flex flex-row justify-between items-center">

            <div>
                {preferidoHospedes && (
                <span className="bg-white rounded-full px-4 py-1 font-samibold">
                    Preferido dos hóspedes
                </span>
                )}
            </div>

                <IconHeartFilled className="stroke-white opacity-80"
                aria-label="Favoritos" 
                size={30}
                />
            </div>
            {children}

           <figcaption className="pt-2 ">
                <div className="flex flex-row justify-between">
                    <span>{local}</span>
                    <div className="flex flex-row">
                        <IconStarFilled className="stroke-black"
                        aria-label="Favoritos" 
                        size={20}
                        />
                    <span className="font-semibold">{avaliacao}</span>
                    </div>
                </div>
            </figcaption> 
            <div>Anfitrião(o): {anfitriao}</div>
            <div>{data}</div>
            <div className="font-semibold">R$ {preco}</div>
        </figure>
    )
}

export default Acomodacao