import React from "react";
import { StyleFooter } from "./style";
import Spotify from '../../assets/images/icon-spotify.svg'
import Face from '../../assets/images/icon-facebook.svg'
import Linkedin from '../../assets/images/icon-linkedin.svg'
import Insta from '../../assets/images/icon-instagram.svg'
import Youtube from '../../assets/images/icon-youtube.svg'
import Twitter from '../../assets/images/icon-twitter.svg'


export default function Footer(){
    return(
        <>
            <StyleFooter>
            <div id="container-image">
        <img src={Spotify} alt='Spotify logo'/>
        <img src={Face} alt='Spotify logo'/>
        <img src={Linkedin} alt='Spotify logo'/>
        <img src={Insta} alt='Spotify logo'/>
        <img src={Youtube} alt='Spotify logo'/>
        <img src={Twitter} alt='Spotify logo'/>
            </div>
            <ul>
                <li>Política de privacidade | </li>
                <li>Política de troca de produto| </li>
                <li>Termos de uso | </li>
                <li>Política de Cookies | </li>
            </ul>

            
            <p id="pfooter">© 2023 Starbucks Coffee Company. Todos os direitos reservados.</p>

            </StyleFooter>

        </>
    )
}