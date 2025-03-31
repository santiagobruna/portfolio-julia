import { ContainerSencundario, TitleWrapper, TituloSecundario } from "../../styles/GlobalStyle"
import { Card } from "../Cards/style"
import { ContainerDepoimentos } from "./style"

const Depoimentos = () => {
    return(
        <ContainerSencundario id="depoimentos">
            <TitleWrapper>
                <TituloSecundario>O que falam os pais?</TituloSecundario>
            </TitleWrapper>
            <ContainerDepoimentos className="flex items-center justify-center flex-wrap gap-37">
                <Card>
                    <p>
                    " Descobrimos que a orientação começa com os pais. Entendemos nosso papel e hoje nosso filho tem o tratamento necessário para lidar com suas emoções. "
                    </p>
                    <br />
                    <img src="/line-horizontal.png" alt="Ícone da linha horizontal" />
                    <span className="font-bold">Flávio Ribeiro</span>
                </Card>
                <Card>
                    <p>
                    " A melhor decisão que já tive. Minha filha passou de zero a quatro amigas, e está vivendo a melhor fase de aprendizado na escola. "
                    </p>
                    <br />
                    <img src="/line-horizontal.png" alt="Ícone da linha horizontal" />
                    <span className="font-bold">Janaína Lima</span>
                </Card>
                <Card>
                    <p>
                    " Meus dois filhos receberam o diagnóstico de TDAH e hoje recebem o tratamento necessário. "
                    </p>
                    <br />
                    <img src="/line-horizontal.png" alt="Ícone da linha horizontal" />
                    <span className="font-bold">Marcela Barbosa</span>
                </Card>
            </ContainerDepoimentos>
        </ContainerSencundario>
    )
}
export default Depoimentos