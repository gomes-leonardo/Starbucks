import React from "react";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";

import { Gratis } from "../screens/home/style";
import { Main, ContainerContent, ContainerPay, TypeCard, Content } from "./styled";




    

export default function AllCoffees(props){
    

    return(
        <>
        
        <Gratis id="gratis"  >FRETE GRÁTIS NAS COMPRAS A PARTIR DE R$ 120!</Gratis>
        <Header/>
        <Main>
            <ContainerContent>
        <h1>{props.nome}</h1>
        
        <h2>{props.marca}</h2>
        <h3>{props.description}</h3>

        <TypeCard>
        <img src={props.type} alt='typecoffee'/>
        <p>{props.marca}</p>
        </TypeCard>
        
        
            </ContainerContent>
            <ContainerPay>
            <img src={props.image} alt='coffeeImage'/>
            <span><s>R${props.desconto}</s></span>
            <span>R${props.valor}</span>
            <button>COMPRAR</button>
            </ContainerPay>

       
            
        </Main>
        <Content>
            <>
            <h1>MAIS SOBRE O CAFÉ</h1>

            <p>{props.fullDescription}</p>
        
            </>
        </Content>

        <Footer/>
        </>
    )
}