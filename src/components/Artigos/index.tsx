import { useEffect } from "react";
import Aos from "aos"
import "aos/dist/aos.css";
import * as S from './style'
import { TitleWrapper, Titulo } from '../../styles/GlobalStyle';
const artigosData = [
    {
        titulo: "Como desenvolver através da educação",
        fonte: "Revista Saúde e Ciência — Jan 10, 2010"
    },
    {
        titulo: "Como introduzir brincadeiras nos tratamentos",
        fonte: "Medicina Criativa — Nov 24, 2015"
    },
    {
        titulo: "Novo método prático de diagnóstico  ",
        fonte: "Jornal Médico da Cidade — Out 24, 2018"
    },
    {
        titulo: "O uso da IA em avaliações terapêuticas   ",
        fonte: " Médicos do Futuro — Mar, 2020"
    },
];

const Artigos = () => {
    useEffect(() => {
        Aos.init({
            duration: 1500,   
            once: false,     
            mirror: true,    
        });
        Aos.refresh();
    }, []);
    return(
        <S.ContainerArtigos id='artigos' data-aos="fade-left" data-aos-duration="1500">
            <TitleWrapper>
                <Titulo className='text-4xl text-left'>Artigos <br /> Cientificos & <br /> Pesquisas</Titulo>
            </TitleWrapper>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 !mt-5">
                {artigosData.map((artigo, index) => (
                    <div key={index} className="flex flex-col items-start gap-2">
                        <h3 className='font-bold'>{artigo.titulo}</h3>
                        <a href='#' className='text-blue-400 transition-colors'>{artigo.fonte}</a>
                            <img src="/line-horizontal.png" alt="Ícone de linha horizontal" />
                    </div>
                ))}
            </div>
        </S.ContainerArtigos>
    )
}

export default Artigos