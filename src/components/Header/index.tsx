import { useState } from 'react'
import * as S from './style'
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <S.ContainerHeader>
                <div className="flex justify-around items-center">
                    <h1 className="text-3xl font-bold">Dra. Julia Souza</h1>
                    {/* Botão de Menu Hambúrguer */}
                    <button 
                    className="lg:hidden text-3xl text-gray-800"
                    onClick={toggleMenu}
                    >
                        {isOpen ? (
                            <span>&#x2715;</span> // Ícone de fechar (X)
                        ) : (
                            <span>&#9776;</span> // Ícone de menu (hambúrguer)
                        )}
                    </button>

                     {/* Menu de navegação (Desktop) */}
                    <div className="hidden lg:flex ">
                        <ul className="flex gap-8">
                            <li><S.NavLink href="#medica">Médica Pediatra</S.NavLink></li>
                            <li><S.NavLink href='#recursos'>Recursos</S.NavLink></li>
                            <li><S.NavLink href='#artigos'>Artigos e pesquisas</S.NavLink></li>
                            <li><S.NavLink href='#convenios'>Convênios</S.NavLink></li>
                            <li><S.NavLink href='#depoimentos'>Depoimentos</S.NavLink></li>
                            <li><S.NavLink href='#contato'>Contato</S.NavLink></li>
                        </ul>
                    </div>
                </div>

                {/* Menu de navegação (Mobile) */}
                <div className={`lg:hidden ${isOpen ? "block" : "hidden"}`}>
                    <ul className="flex flex-col gap-4 ">
                        <li><S.NavLink href='#medica'>Médica Pediatra</S.NavLink></li>
                        <li><S.NavLink href='#recursos'>Artigos e pesquisas</S.NavLink></li>
                        <li><S.NavLink href='#artigos'>Recursos</S.NavLink></li>
                        <li><S.NavLink href='#convenios'>Convênios</S.NavLink></li>
                        <li><S.NavLink href='#depoimentos'>Depoimentos</S.NavLink></li>
                        <li><S.NavLink href='#contato'>Contato</S.NavLink></li>
                    </ul>
                </div>  
            </S.ContainerHeader>
        </>
    )
}
export default Header