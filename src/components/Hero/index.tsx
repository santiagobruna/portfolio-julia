import { useEffect } from "react";
import Aos from "aos"
import "aos/dist/aos.css";
import * as S from './style'
import { Titulo } from "../../styles/GlobalStyle";
import { Button, Texto } from "../../styles/GlobalStyle";
const Hero = () => {
    useEffect(() => {
        Aos.init({
            duration: 1500,   
            once: false,     
            mirror: true,      
        });
        Aos.refresh();
    }, []);
    return(
        <S.HeroContainer data-aos="fade-left" data-aos-duration="1500">
            <S.ContainerInfos>
                <Titulo>Ajudando crianças a se <br /> desenvolverem desde 2008</Titulo>
                <Texto>Especialista em Pediatria do Desenvolvimento e Comportamento, a Dra. desenvolveu um método exclusivo para ajudar o seu filho a alcançar o potencial máximo em âmbito social e emocional.</Texto>
                <a href="#recursos">
                    <Button data-aos="fade-left" data-aos-duration="1500">Saiba mais</Button>
                </a>
            </S.ContainerInfos>
            <div>
                <S.Image data-aos="zoom-in" data-aos-duration="1000" src="/article.png" alt="Imagens dos meus pacientes" />
            </div>
        </S.HeroContainer>
    )
}

export default Hero;