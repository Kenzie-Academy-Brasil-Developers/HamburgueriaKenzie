import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;


}



:root{
   --color-primary: #27AE60;

   --white: #fff;
   --black: #000;

   --grey-1:#F5F5F5;
   --grey-2: #E0E0E0;
   --grey-3: #828282;
   --grey-4: #333333; 


   --color-hover-primary: #93D7AF;
   --color-hover-grey: #828282;


}

button{
    cursor: pointer;
    border: 0;
    background: none;
}

ul, ol, li{
    list-style: none;
}



nav{
    display: flex;
    justify-content: space-between;
    padding: 30px;
    width: 100%;
    margin: 0 auto;
    height: 80px;
    max-width: 100%;
    align-items: center;
    margin: 0 auto;
    background-color: var(--grey-1);
    z-index: 1;

    
}

main{
    display: flex;
    
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
}




`;
