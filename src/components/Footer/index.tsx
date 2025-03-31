import { Titulo } from "../Sobre/style"
import { ContainerFooter } from "./style"
import { FaWhatsapp, FaEnvelope  } from "react-icons/fa"

const Footer = () => {
    return(
        <ContainerFooter id="contato">
            <div className="flex items-center flex-wrap md:gap-32 gap-8">
                <Titulo className="w-40 min-h-[60px]" style={{ color: "#79383A", fontWeight: 'bold' }}>
                    Entre em <br />contato
                </Titulo>
                <div className="min-w-[250px] md:min-w-[250px]  md:text-left">
                    <span>Rua Joana Violeta, 114, Rio de Janeiro, Brasil</span>
                    <span className="flex items-center gap-2" style={{margin: '16px 0'}}>
                        <FaWhatsapp size={20} className="text-green-500" />
                        <a href="https://wa.me/5521975956657" target="_blank"  rel="noopener noreferrer">
                            (21) 97595-6657
                        </a>
                    </span>
                    <span className="flex items-center gap-2">
                        <FaEnvelope size={20} className="text-blue-500" />
                        <a href="mailto:ola@grandesite.com.b"  target="_blank"  rel="noopener noreferrer">
                            ola@grandesite.com.br
                        </a>
                    </span>
                </div>
            </div>
            <div className="flex items-center flex-wrap md:gap-32 gap-8">
                <Titulo className="w-40 min-h-[60px]" style={{ color: "#79383A", fontWeight: 'bold' }}>
                    Horário de <br />Atendimento
                </Titulo>
                <div className="min-w-[250px] md:min-w-[250px]  md:text-left">
                    <p>Segunda à quinta-feira das 08:00 às 18:00</p>
                    <p style={{margin: '16px 0'}}>Sexta-feira das 08:00 às 17:00</p>
                </div>
            </div>
            <p className="font-bold">Desenvolvido por <a href="https://santiagobruna.github.io/portfolio/" target="_blank" rel="noopener noreferrer">Bruna Carla</a></p>
        </ContainerFooter>
    )
}
export default Footer