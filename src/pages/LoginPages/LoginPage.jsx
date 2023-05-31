import { InputsWrapper, PageContainer } from "./styled";
import logo from "../../assets/images/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

export default function LoginPage({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()

  function login(e) {
    e.preventDefault();
    setIsLoading(true);
    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
    const body = {
      email,
      password
    };
    axios.post(URL, body)
      .then(({ data }) => {
        setIsLoading(false);
        setToken(data.token);
        navigate('/hoje');
      })
      .catch(response => {
        setIsLoading(false);
        alert(response);
      });
  }

  return (
    <>
      <PageContainer>
        <Link to={"/"}>
          <img src={logo} alt="TrackIt Logo" />
        </Link>
        <InputsWrapper onSubmit={login}>
          <input
            type="email"
            placeholder="email"
            required
            id="email"
            value={email}
            disabled={isLoading}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="senha"
            required
            id="password"
            value={password}
            disabled={isLoading}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" disabled={isLoading}>
            {isLoading ? (
              <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="white"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
              />
            ) : (
              "Entrar"
            )}
          </button>
        </InputsWrapper>
        <Link to={"/cadastro"}>
          <p>Não tem conta? Cadastre-se!</p>
        </Link>
      </PageContainer>
    </>
  );
}
