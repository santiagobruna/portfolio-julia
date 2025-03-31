import * as S from './style'
import { TitleWrapper } from '../../styles/GlobalStyle'
const cardData = [
    {
        image: '/avaliacao.svg',
        title: 'Avaliação',
        descricao: 'Sequência de exames detalhados para avaliar se o paciente apresenta dificuldades cognitivas, motoras, sociais e emocionais.'
    },
    {
        image: '/diagnostico.svg',
        title: 'Diagnóstico',
        descricao: 'Diagnóstico final em caso de transtorno, feito em conjunto com psicólogos e outros especialistas.'
    },
    {
        image: '/bell.svg',
        title: 'Orientação',
        descricao: 'Consultas com pais e responsáveis para entender o histórico e o ambiente onde a criança está inserida.'
    },
    {
        image: '/shield-eye.svg',
        title: 'Monitoramento',
        descricao: 'Acompanhamento do paciente já em tratamento, de forma regular, com intervenções se necessário.'
    },
]
const Cards = () => {
    
    return(
        <>
            <S.Container id='recursos'>
                <TitleWrapper>
                    <h2 className='text-3xl font-bold text-center '>O que eu faço?</h2>
                    <p className='text-center text-1xl'>Um cuidado completo para cada etapa do desenvolvimento.</p>
                </TitleWrapper>
                {cardData.map((card, index) => (
                    <S.Card style={{backgroundColor: '#fba6a9'}} key={index}>
                        <img style={{width: '30px'}} src={card.image} alt={card.title} />
                        <h3 className='font-bold'>{card.title}</h3>
                        <p>{card.descricao}</p>
                    </S.Card>
                ))}
            </S.Container>
        </>
    )
}
export default Cards