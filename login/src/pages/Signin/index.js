import React, { useState } from 'react'
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import { Link , useNavigate } from "react-router-dom"
import useAuth from "../../hooks/useAuth"
import * as C from "./styles";


const Signin = () => {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const {signin} = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email | !senha) {
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(email, senha);

    if (res) {
      setError(res);
      return;
    }

    navigate("/home");
  };

  return (
    <C.Container>
      <C.Label>Login</C.Label>
      <C.Content>
        <Input 
        type = "email"
        placeholder = "Digite seu email"
        value = {email}
        onChange = {(e) => [setEmail(e.target.value), setError("")]} />

        <Input 
        type = "password"
        placeholder = "Digite a senha"
        value = {senha}
        onChange = {(e) => [setSenha(e.target.value), setError("")]} />

        <C.Label>{error}</C.Label>

        <Button Text= "Entrar" onChange={handleLogin} />

        <C.LabelSignup>
          Não tem uma conta?
          <C.Strong>
            <Link to="/signup"> Registre-se</Link>
          </C.Strong>
        </C.LabelSignup>
      </C.Content>
    </C.Container>
  )
}

export default Signin;