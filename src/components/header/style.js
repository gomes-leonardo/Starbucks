import styled from "styled-components";
import { Link } from "react-router-dom";






export const HeaderContainer = styled.div `
.modal{
    height: 0;
    overflow: hidden;
    display: none;
    
    
}

@media (min-width: 900px){

    
    
    &:hover{
        background-color: #FFFF;
        color:black;
    }
 }



@media (max-width: 1000px){

    height: 50px;

    @keyframes slide-in {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(0);
        }
    }

    .active{
        background-color: #F2F0EB;
        border-radius:8px 0 ;
        position: fixed;
        display: block;
        top: 0;
        right: 0;
        height: 100vh;
        width: 65%;
        animation: slide-in 0.5s ease-in-out;
        
    }

    
    
   
}





display:flex;
color: white;
flex-direction: row;
justify-content: space-between;
box-shadow: rgba(100, 100, 111, 0.2)  29px 0px;
position: relative;
background-color: #1E3932;
z-index: 9;
transition: all 0.3s ease-in-out;






#mbl-img{
    width: 30px;
    position: absolute;
    top: 10px;
    left: 0;
    display: none;
}

#enter{
    padding: 6px;
    border-radius: 9999px;
    width: 75px;
    border: 1px solid black;
    background-color: #FFFF;
    color: black;
    font-weight: bolder;
    font-size: 12px;
    transition: all 0.2s ease-in-out;
}

#enter:hover{
    transform: scale(0.9);
    background-color: #F0F0F0;
}
#participe{
    padding: 6px;
    border-radius: 9999px;
    background-color: black;
    color: white;
    font-weight: bolder;
    font-size: 12px;
    width: 135px;
    transition: all 0.2s ease-in-out;
}

#participe:hover{
    transform: scale(0.9);
}

button{
    cursor:pointer;
}

.burger{
    display: none;
}

.times{
    display: none;
}





@media (max-width: 1000px) {
        
    &:hover{
        background-color: #1E3932;
        
    }
    

    .burger{
        display: block;
        cursor: pointer;


    }
   

    .times{
        cursor:pointer;
        display: block;
       
    }

    .hidden{
        display: none;
    }

    #burger:hover{
        color: black;
    }

    li{
        display: none;
    }

    #mbl-img{
        display: block;
    }

`


export const ListContainer = styled.ul`
    
display: flex;
list-style:none;
font-family: sans-serif;
margin: 0 50px;
padding: 20px;



  



gap: 22px;
align-items: center;
font-weight: bolder;
font-size: 12px;

#img-logo{
    width: 60px;
    display:block;
}

#img-header{
    width: 110px;
}
`

export const StyledLink = styled(Link) `

color: currentColor;
text-decoration: none;

&:hover{

    color: #219260;
}



`


export const BurgerContainer = styled.div `

position: absolute; 
right: 0;
top: 10px;




   

`


export const LinkMbl = styled.div `


@media (max-width: 1000px){
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;
    margin: auto;
    justify-content: center;
    align-items: center;
    color: #219260;
    padding: 30px;
    font-weight: bolder;
    font-size: 23px;
}

img{
    width: 50px;
    margin-bottom: 10px;
}

#hr-teste{
    background-color: black;
}

.find-foto{
    width: 100px;
    margin-top: 10px;
}
`

export const Hr = styled.div `

@media (max-width: 1000px){

    border: 0;
    height: 1px;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
    background-color: #CAC9C5;
    border-radius: 5px;
    box-shadow: 1px 1px 2px #ABA9A5;
    width: 100%;
    margin-top: 25px;
    margin-bottom: 25px;
}

`

