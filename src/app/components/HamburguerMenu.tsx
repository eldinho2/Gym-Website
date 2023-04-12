'use client'

import React, {useState} from "react";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";


export const HamburguerMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const HandleOpenMenu = () => {
    setOpenMenu(!openMenu);
  }


  return (
    <div className={ openMenu ? 'hamburguer_container_opened' : 'hamburguer_container' }>
      <div onClick={HandleOpenMenu} id="hamburguer" className={ openMenu ? 'hamburguer_active' : 'hamburguer' }>
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
      </div>
      {
        openMenu && (
          <nav className={'hamburguer_menu_Open'}>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/packages">Sobre Nós</a>
              </li>
              <li>
                <a href="/shop">Planos</a>
              </li>
              <li>
                <a href="/about">Galeria</a>
              </li>
              <li>
                <a href="/pages">Treinadores</a>
              </li>
              <li>
                <a href="/news">Contato</a>
              </li>
               <li>
               <FaFacebookSquare className="fill-black h-6 w-6 hover:cursor-pointer" />
               </li>
                <li>
              <FaInstagram className="fill-black w-6 h-6 hover:cursor-pointer" />
              </li>
            </ul>
          </nav>
        )
      }
    </div>
  )
}