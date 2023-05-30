import { InputsWrapper, PageContainer } from "./styled";
import logo from "../../assets/images/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function createUser(e) {
    e.preventDefault();
    setIsLoading(true);
    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
    const body = {
      email,
      name,
      image,
      password,
    };
    console.log(body);
    axios.post(URL, body)
      .then(response => {
        navigate('/')
      })
      .catch(response => {
        alert(response);
        setIsLoading(false);
      });
  }
  return (
    <>
      <PageContainer>
        <Link to={"/"}>
          <img src={logo} alt="TrackIt Logo" />
        </Link>
        <InputsWrapper onSubmit={createUser}>
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
          <input
            type="text"
            placeholder="nome"
            required
            id="name"
            value={name}
            disabled={isLoading}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="url"
            placeholder="foto"
            required
            id="image"
            value={image}
            disabled={isLoading}
            onChange={(e) => setImage(e.target.value)}
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
              "Cadastrar"
            )}
          </button>
        </InputsWrapper>
        <Link to={"/"}>
          <p>Já tem uma conta? Faça login!</p>
        </Link>
      </PageContainer>
    </>
  );
}
