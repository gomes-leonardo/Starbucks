import React from "react";
import Header from "../../components/header/header";
import MenuPhoto from '../../assets/images/menu-banner.jpg'
import { MainContainer } from "./style";
import { coffees } from "../../utils/objects";
import { StyleSection, StyleArticle, Gratis } from "./style";
import Footer from "../../components/footer/footer";
import { Link } from "react-router-dom";
import Bolt from '../../assets/images/bolt-white.png'


export default function Menu(){

  
    
    return(

        <>
        
        <Gratis id="gratis" > <img src={Bolt} alt='icon-bolt'/>FRETE GRÁTIS NAS COMPRAS A PARTIR DE R$ 120!</Gratis>
        
        <Header/>
        <MainContainer>
        <img  src={MenuPhoto} alt='a cup of coffe' id="menu-photo"></img>
        <div className="text-container">
        <h1>CARDÁPIO</h1>
        <p>Conheça a variedade de nossos produtos, tabela nutricional de comidas e bebidas, tabela de alergênicos</p>
        <br></br>
        <p>Abaixo alguns de nossa imensa variedade de produtos, compre agora mesmo!</p>

        </div>

        
        </MainContainer>
        <StyleArticle>
            <h1 >CAFÉ STARBUCKS®. Prepare-o em casa, da forma que mais gosta.</h1>
            <h3>Descubra os nossos cafés Starbucks®. Desfrute de uma xícara de café 100% arábica ou de uma icónica bebida de café, quando e como quiser.</h3>
        </StyleArticle>
     <StyleSection>

        {coffees.map(item =>{
            return(
                <>
                <div className="card-product">
                <h1>{item.nome}</h1>
                    {item.marca}
                    <span>{item.unidade} Cápsulas</span>
                <img src={item.image} alt='Teste'/>
                <span id="value">R${item.valor}</span>
               <div className="card-btn">
               <Link to={item.path}>
                <button onClick={() => window.scrollTo(0,0)}>Detalhes</button>
                </Link>
                </div>
                </div>
                </>
            )
        })}

     </StyleSection>
     <Footer/>
        </>
    )
}