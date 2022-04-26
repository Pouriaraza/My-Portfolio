import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle `
body{
    background-color: ${({ theme }) => theme.body};
    transition: ${({ theme }) => theme.transition};
}

.header {
    background-color: ${({ theme }) => theme.header};
    color: ${({ theme }) => theme.body};
    transition: ${({ theme }) => theme.transition};
}
.profile{
    background-color: ${({ theme }) => theme.body};
    transition: ${({ theme }) => theme.transition};
}
.Navbar , .NavbarBottom , .NavbarButtons > div  , .NavbarButtons > div{
    border-color: ${({ theme }) => theme.ColorText} !important;
    transition: ${({ theme }) => theme.transition};
}
.NavbarButtons > div{
    background-color:  ${({ theme }) => theme.ColorText} !important;
    transition: ${({ theme }) => theme.transition};
}

 #text {
    color:  ${({ theme }) => theme.ColorText} ;
}

p , span , h1 , h3 , a ,div , section{
    color:  ${({ theme }) => theme.ColorText} ;
    transition: ${({ theme }) => theme.transition};
}
svg{
    fill : ${({ theme }) => theme.ColorText} ;;
}
.Navbars-body , .NavbarBottom{
    color:  ${({ theme }) => theme.ColorText} ;
    background-color: ${({ theme }) => theme.body};
}
`
;


export const LightTheme = {
    body: '#fff',
    ColorText: '#000',
    header: '#ffffffd4',
    transition: 'all .4s',
} ;


export const DarkTheme = {
    body: '#000',
    ColorText: '#fff',
    header: '#000000d4',
    transition: 'all .4s',

} ;