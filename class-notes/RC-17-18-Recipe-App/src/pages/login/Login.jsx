import React, { useContext } from "react";
import {RecipeContext} from "../../context/RecipeProvider";
import {
  FormContainer,
  Header,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledImg,
  StyledInput,
} from "./LoginStyles";

import mealFoto from "../../assets/meal.svg"
import { useNavigate } from "react-router-dom";

const Login = () => {

 const navigate=useNavigate()

 const {name,password,setPassword,setName}=useContext(RecipeContext

 )

 const handleSubmit = (e) =>{
  e.preventDefault()

  localStorage.setItem("username", name)
  localStorage.setItem("password", password)
  
  navigate("/home")


 }

  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={mealFoto} />

        <Header>{"<Clarusway/>"} Recipe</Header>

        <StyledForm onSubmit={handleSubmit}>
          <StyledInput 
          type="text" 
          placeholder="username"
          onChange={(e)=>setName(e.target.value)}
          >

          </StyledInput>

          <StyledInput
            type="password"
            placeholder="password"
            required
            onChange={(e)=>setPassword(e.target.value)}
          ></StyledInput>

          <StyledButton>Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
