import styled from "styled-components";


export const  Main = styled.main
`

color: white;
background-color: #1E3932;
display: flex;
flex-direction: row;

justify-content: space-evenly;


padding: 50px;



h1{
    font-weight: bold;
    width: 500px;
    font-size: 35px;
    margin-bottom: 40px;
}

h2{
    width: 500px;
    font-size: 30px;
    font-weigth: normal;
    font-style: italic;
    margin-bottom: 10px;

}
h3{
    width: 500px;
    font-size: 13px;
    font-weigth: lighter;
    
}

@media (max-width: 1000px){
    display: flex;
flex-direction: column;
align-items: center;

h1{
    font-size: 23px;
    width: 300px;
}

h2{
    font-size: 20px;
    width: 300px;
    font-weight: bold;
}

h3{
    font-size: 16px;
    width: 300px;
    margin-bottom: 70px;
}
}
`

export const TypeCard = styled.div`

display: flex;
flex-direction: column;
width: 120px;
margin-top: 40px;
background-color: #253E37;
padding: 20px;
gap: 30px;
align-items: center;
border-radius: 12px;
text-align: center;


img{
    display: flex;
    align-self: center;
    width: 45px;
}

@media (max-width: 1000px){

    margin: auto;
}
`

export const ContainerContent = styled.div `

width: 300px;


`

export const ContainerPay = styled.div `

width: 200px;


display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
gap: 10px;

img{
    
}

span{
    font-size: 30px;
}

button{
    padding: 10px;
    width: 170px;
    border: none;
    color: white;
    background-color: #3e6c5f;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    border-radius: 9999px;

   cursor: pointer;
    transition: all 0.2s ease-in-out;
}

button:hover{
    transform: scale(1.1);
    font-weight: bolder;
    
}

`


export const Content = styled.div `

    padding: 30px;
    width: 100%;
    margin: 20px auto;

    h1{
        text-align: center;
        letter-spacing: 3px;
        color: #1E3932;
        font-size: 26px;
    }

    p{
        margin-top: 60px;
        color: #1E3932;
        font-size: 20px;

    }

    @media (max-width: 1000px){

        width: 100%;
    }
`