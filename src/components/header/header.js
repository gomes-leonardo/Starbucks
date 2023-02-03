import React from "react";
import { ListContainer, StyledLink } from "./style";
import Photo from '../../assets/images/starbucks-nav-logo.svg'
import Find from '../../assets/images/sb-historias-logo.svg'
import { HeaderContainer, BurgerContainer, LinkMbl, Hr } from "./style";
import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';



 


export default function Header(){
    
   
    function mostrar(){
        let modal = document.querySelector('#teste')
        let img = document.querySelector('.burger')
        let x = document.querySelector('.times')
        

        img.classList.toggle('hidden')
        x.classList.remove('hidden')
        modal.classList.toggle('active')
        x.style.color = "#219260";
        
        

        
    }
    
    function close(){
        let x = document.querySelector('.times')
        let img = document.querySelector('.burger')
        let modal = document.querySelector('#teste')
        

        x.classList.toggle('hidden')
        img.classList.remove('hidden')
        modal.classList.toggle('active')
        
        
        
    }
    
    return(
       
        <>
        
        <HeaderContainer id="all-header"> 
            <div className="modal " id="teste">
                
                <LinkMbl>
                <StyledLink to='/'>
                <img src={Photo} alt='logo-img' id="logo-img"/>
                </StyledLink>
                <span><StyledLink to='/menu'>Sobre</StyledLink></span>
                
                <span><StyledLink to='/rewards'>Rewards</StyledLink></span>
                
                <span><StyledLink to='/menu'>Impacto Social</StyledLink></span>
                <br/>
                <StyledLink to='/menu'>
                    <img src={Find} alt='teste' className="find-foto"/>
                     </StyledLink>
                
                    <Hr></Hr>
                    <button id="enter">Entrar</button>
                    <button id="participe">Participe Agora</button>
                        
                    
                
                
               
               
            
                </LinkMbl>
            </div>
            <BurgerContainer id="container-burger">
           
                  <FaBars className="burger"  size={30} onClick={mostrar}  />
               
                  <FaTimes className="times hidden " size={30} onClick={close}/>
                

               </BurgerContainer>
           <Link to='/'>    
         <img src={Photo} alt='logombl' id="mbl-img"/>  
         </Link> 
        <ListContainer>
        <Link to='/'>
        <li><img src={Photo} alt='logo' id="img-logo"></img></li>
        </Link>
       
            <StyledLink to ='/menu'>
            <li>SOBRE</li>
            </StyledLink>
            <StyledLink to ='/rewards'>
            <li>REWARDS</li>
            </StyledLink>
            <li>IMPACTO SOCIAL</li>
        </ListContainer>
        
            <ListContainer className="second-ul">
                <li><img src={Find} alt='Historias' id="img-header"></img></li>
                <li>Econtre uma Loja</li>
                <li> <button id="enter">Entrar</button> </li>
                <li> <button id="participe">Participe Agora</button></li>
            </ListContainer>
        </HeaderContainer>
        
        </>
    )
}