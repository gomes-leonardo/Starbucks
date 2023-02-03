import styled from "styled-components";


export const Gratis = styled.div `

background-color: #1E3932;

width: 100%;
height: 40px;
margin: auto;
text-align: center;
padding-top: 20px;
color: #FFF;
font-family: sans-serif;
font-weight: normal;
letter-spacing: 6px;
position: relative;
display: flex;
justify-content: center;
align-items: center;


img{
    width: 30px;
    align-self: center;
    margin-right: 20px;
}


@media (max-width: 800px) {

    height: 30px;
    font-size: 12px;
    letter-spacing: normal;
    padding-top: 10px;
    

    img{
        display: none;
    }
}


`

export const MainContainer = styled.main `

display: flex;
flex-direction: row;
width: 1200px;
margin: auto;
font-family: sans-serif;



#menu-photo{
    width: 70%;
}

.text-container{
    width: 70%;
    padding: 100px;
    text-align: center;
    background-color: #F2EFED;

}

h1{
    margin-bottom: 30px;
}

@media (max-width: 1100px){
    width: 100%;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    

    #menu-photo{
        width: 70%;
        
        
    }

    .text-container{
        padding: 40px;
        width: 70%;
        font-size: 30px;
        
        text-align: center;
    }

  
    @media (max-width: 800px){
        
        display: flex;
        flex-direction: column;
        
        
    
        
    
        .text-container{
            padding: 20px;
            margin: auto;
            font-size: 16px;
            
            text-align: center;
        }
}



`


export const StyleArticle = styled.article `

width: 100%;
height: 350px;

text-align: center;
margin:  auto;
font-family: sans-serif;
padding-top: 100px;
color: #FFF;
background-color: #1E3932;
box-shadow: 0 2px 4px 0 rgb(0 0 0 / 70%), 0 2px 8px 0 rgb(0 0 0 / 50%), 0 1px 5px 0 rgb(0 0 0 / 10%);
position: relative;


h1{
    margin-bottom: 120px;
    font-weight: normal;
    font-size: 30px;
}

h3{
    font-size: 25px;
    font-weight: lighter;
}

@media (max-width: 1100px){

    height: 200px;
    padding-top: 20px;
    margin-bottom: 90px;

    h1{
        font-size: 23px;
        margin-bottom: 30px;
    }

    h3{font-size: 18px;}
}

@media (max-width: 700px){

    font-size: 10px;
    height: 130px;
    padding-top: 20px;
    margin-bottom: 60px;
    

    h1{
        font-size: 18px;
        margin-bottom: 30px;
    }

    h3{
        font-size: 12px;
        
    }

    @media (max-width: 700px){

    font-size: 10px;
    height: 170px;
    padding-top: 20px;
    

    h1{
        font-size: 18px;
        margin-bottom: 30px;
    }

    h3{
        font-size: 12px;
        
    }
}


`

export const StyleSection = styled.section `

display: flex;
flex-direction: row;
width: 70%;
margin: 0 auto 40px;
flex-wrap: wrap;
justify-content: space-between;
font-family: sans-serif;
font-size: 16px;





h1{
    margin-bottom: 30px;
    font-size: 22px;
}

.card-product{
    
    width: 27%;
    max-height: 460px;
    display: flex;
    margin: 23px auto;
    text-align: center;
    background-color: #F2EFED;
    justify-content: center;
    align-items: center;
    justify-items: center;
    flex-direction: column;
    border-radius: 18px;

    padding: 17px;

}

img{
    width: 150px;
}

#value{
    font-size: 20px;
    
}

.card-btn{
    margin-top: auto;
}

button{
    padding: 10px;
    margin-top: 15px;
    width: 170px;
    border: none;
    background-color: #1E3932;
    color:white;
    font-weight: bolder;
    border-radius: 9999px;
    cursor: pointer;

    align-self: center;
    

    transition: all 0.2s ease-in-out;
}

button:hover{

    transform: scale(1.1);
}


@media(max-width: 1130px){

h1{
    font-size: 20px;
}
    
    .card-product{
        width: 40%;
        max-height: 520px;
    }
}


@media(max-width: 672px){


   

    h1{
        font-size: 20px;
    }
        
        .card-product{
            width: 80%;
            max-height: 520px;
        }

      
`
