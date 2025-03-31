import { Container, Titulo } from "../../styles/GlobalStyle"
import { FirstSection } from "./style"

const ContainerConvenios = () => {
    return(
        <Container id="convenios">
            <FirstSection>
                <Titulo style={{color: "#79383A", fontWeight: 'bold'}}>Convênios Aceitos</Titulo>
                <img src="/line-horizontal.png" alt="Ícone de linha horizontal" />
                <p className="text-1xl">
                    Confira os convênios aceitos para consultas e acompanhamento.
                </p>
            </FirstSection>
            <div className="flex justify-center flex-wrap gap-32">
                <div className="flex flex-col items-center gap-2 ">
                    <img className="cursor-pointer" src="/first-aid.svg" alt="Ícone de linha horizontal" width={'55px'}/>
                    <span className="font-bold">Saúde Social</span>
                </div>
                <div  className="flex flex-col items-center gap-2">
                    <img className="cursor-pointer" src="/heartbeat.svg" alt="Ícone de linha horizontal" width={'55px'} />
                    <span className="font-bold">SauDesc</span>
                </div>
                <div  className="flex flex-col items-center gap-2">
                    <img className="cursor-pointer" src="/first-aid.svg" alt="Ícone de linha horizontal" width={'55px'} />
                    <span className="font-bold">MedMais</span>
                </div>
            </div>
        </Container>
    )
}
export default ContainerConvenios