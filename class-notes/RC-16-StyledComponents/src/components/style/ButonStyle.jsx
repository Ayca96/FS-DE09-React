import styled from 'styled-components';

const ButtonS = styled.button`
color: ${({kemal})=>kemal ? "green" : "blue"};
background-color: ${({kemal,ayse})=> kemal ? "lightblue" : ayse ? "red" : "brown"};
cursor: pointer;
border-radius: 1rem;
padding: 1rem 1.5rem;
font-family: "tahoma";

&:hover{
  transform: scale(0.9);
  background-color: aqua;
}

`;

export const TomatoButton = styled(ButtonS) `

  width: ${({halil})=> halil ? "400px" : "300px"};
  background-color: aquamarine;
  color: tomato;

`;

//  Bu sekilde ButtonS den türetmis olduk yani devami gibi olcak, yeni TomatoButtona da yukardaki stiller eklenebilecek ve bu yeni butona özel yeni stiller ekleyebilecegiz.

export default ButtonS;
