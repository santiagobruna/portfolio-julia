import { useEffect } from "react";
import Aos from "aos"
import "aos/dist/aos.css";
import * as S from './style'
import { Button } from '../../styles/GlobalStyle'
import pediadraImg from '/pediatra.jpeg'
const Sobre = () => {

    useEffect(() => {
        Aos.init({
            duration: 1500,   
            once: false,     
            mirror: true,    
        });
        Aos.refresh();
    }, []);
    return(
        <S.ContainerSobre data-aos="fade-right" data-aos-duration="1500" id="medica">
            <div>
                <S.Titulo>Dra. Julia Souza</S.Titulo>
                <span className='font-bold'>CRM 12345</span>
                <S.Profile src={pediadraImg} alt="Foto da pediatra Julia" />
            </div>
            <div>
                <S.ContainerProfissao>
                    <img src="/line.png" alt="Ícone de Linha" />
                    <span>Especialista em Pediatria do Desenvolvimento e Comportamento</span>
                </S.ContainerProfissao>
                <S.Decricao>
                    Formada em Medicina pela Universidade Centro-Sul com honra e mérito, a Dra. Julia Souza encontrou sua vocação durante a residência. Explorando a Pediatria, encontrou na Pediatria do Desenvolvimento e Comportamento sua paixão em ajudar crianças e adolescentes a se adaptarem socialmente.
                </S.Decricao>
                <S.Decricao>
                    Através dos anos, desenvolveu seu próprio método de avaliar cada paciente e entregar um tratamento holístico, humanizado e individualizado para melhora da qualidade de vida e integração na sociedade.
                </S.Decricao>
                <a href="https://wa.me/5521975956657" target="_blank"  rel="noopener noreferrer" >
                    <Button data-aos="fade-left" data-aos-duration="1500">agende uma consulta</Button>
                </a>
            </div>
        </S.ContainerSobre>
    )
}

export default Sobre