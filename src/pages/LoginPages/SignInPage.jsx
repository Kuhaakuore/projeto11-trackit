import { InputsWrapper, PageContainer } from "./styled";
import logo from "../../assets/images/Logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function test() {}

  return (
    <>
      <PageContainer>
        <Link to={"/"}>
          <img src={logo} alt="TrackIt Logo" />
        </Link>
        <InputsWrapper onSubmit={test}>
          <input
            type="email"
            placeholder="email"
            required
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="senha"
            required
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Entrar</button>
        </InputsWrapper>
        <Link to={"/cadastro"}>
          <p>Não tem conta? Cadastre-se!</p>
        </Link>
      </PageContainer>
    </>
  );
}
