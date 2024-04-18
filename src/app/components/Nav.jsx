import React, {useState} from 'react'
import { CgMenu } from 'react-icons/cg'
import {IoCloseCircleOutline} from 'react-icons/io5';
import logo from '../../../public/logo.png'
import styled from 'styled-components'
import { device } from '@/app/lib/breakpoint'
import Image from 'next/image';
import Button from './Button';

const Nav = () => {
    const [nav, setNav] = useState(false);
  const toggleNav = () => {
    setNav(!nav);
  };
  const closeNav = () => {
    setNav(false);
  };
  return (
    <NavBar >
        <nav>
          <a href='/' ><Image alt='adacubator logo' src={logo}/></a>
            <ul className='navlist-pc'>
                <li><a href='#about'>About</a></li>
                <li><a href='#mission'>Mission</a></li>
                <li><a href='#pitch'>Pitch To Us</a></li>
            </ul>
            {/* <MainButton target className='modal-button' to='/buy' text='Buy CGI' /> */}
            <Button text='Contact Us' target to='mailto:info@aducubator.com' />
            
            <CgMenu onClick={toggleNav} className='menu-button' id='menu' size='4rem' />
            

            <div className={nav? 'navlist navlist-mobile': 'navlist'}>
                <div className='top-mobile'>
                    <Image alt='adacubator logo' src={logo}/>
                    <IoCloseCircleOutline onClick={closeNav} 
                    className='menu-button-mobile' id='menu' size='4rem' />
                </div>
                <ul>
                    <li onClick={closeNav}><a href='#About'>About</a></li>
                    <li onClick={closeNav}><a href='#mission'>Mission</a></li>
                    <li onClick={closeNav}><a href='#pitch'>Pitch To Us</a></li>
                    <li onClick={closeNav}></li>
                </ul>
                {/* <Popup trigger={<button className='modal-button'>Buy CGI</button>} position="right center" modal>
                <div className='popup'>Coming Soon!!</div>
                </Popup> */}
                {/* <MainButton target to='/buy' text='Buy CGI' /> */}
            </div>  
        </nav>
        <hr data-aos='zoom-in' />
    </NavBar>
  )
}

export default Nav

const NavBar = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 8rem;
    hr {
        width: 90%;
    }
    .menu-button {
        display: none;
    }
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 1%;
        width: 90%;
        z-index: 100;
    }
    hr {
        height: 1px;
        border: 1px solid #ffffff6f;
    }
    ul {
        display: flex;
        justify-content: space-between;
        list-style: none;
        color: white;
        min-width: 18rem;
        gap: 0.5rem;
    }
    .navlist-mobile {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background: #19202B;
        display: flex;
        flex-direction: column;
        z-index: 100;
        padding: 2%;
        ul{
            width: 90%;
            display: flex;
            flex-direction: column;
            text-align: start;
            margin: 2rem 0;
        }
        li {
            margin: 1rem;
            font-size: 1.5rem;
            cursor: pointer;
        }
        .action-button {
            display: inline-block;
            width: 70%;
            text-align: center;
        }
    }
    .navlist {
        display: none;
    }
    .top-mobile {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 0 5%;
    }
    @media screen and (${device.md}) {
        .navlist-pc, button {
            display: none;
        }
        .menu-button {
            display: flex;

        }
        .navlist-mobile {
            display: block;
        }
        &> .action-button {
            display: none;
        }
    }
`
