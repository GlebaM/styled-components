import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;0,600;0,700;0,900;1,300;1,400;1,600;1,700;1,900&display=swap');


:root{
--shadow-grey-light: rgba(0, 0, 0, 0.15);
--shadow-grey-middle: rgba(0, 0, 0, 0.25);
--shadow-grey-dark: rgba(0, 0, 0, 0.45);

--primary-pink: #ff0099;
}

*{
    box-sizing: border-box;
}

body{
    background-color: ${({ theme }) => theme.colors.body};
    color: hsl(192, 100%, 9%);
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 1.15em;
    margin:0;
}

p{
    opacity:0.6;
    line-height:1.5;
}

img{
    max-width: 100%;
    
}
`;

export default GlobalStyles;
