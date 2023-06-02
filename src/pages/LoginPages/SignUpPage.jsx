import { InputsWrapper, PageContainer } from "./styled";
import logo from "../../assets/img/Logo.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";
import { UserContext } from "../../context/Context";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const currentPage = useLocation().pathname;
  const { setCurrentPage } = useContext(UserContext);

  useEffect(() => {
    setCurrentPage(currentPage);
  }, []);

  function signUp(e) {
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
    axios.post(URL, body)
      .then(() => {
        setIsLoading(false);
        navigate('/')
      })
      .catch(({ response }) => {
        setIsLoading(false);
        alert(response.data.message);
      });
  }

  return (
    <>
      <PageContainer>
        <Link to={"/"}>
          <img src={logo} alt="TrackIt Logo" />
        </Link>
        <InputsWrapper onSubmit={signUp}>
          <input
            type="email"
            placeholder="email"
            required
            id="email"
            value={email}
            disabled={isLoading}
            data-test="email-input"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="senha"
            required
            id="password"
            value={password}
            disabled={isLoading}
            data-test="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="text"
            placeholder="nome"
            required
            id="name"
            value={name}
            disabled={isLoading}
            data-test="user-name-input"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="url"
            placeholder="foto"
            required
            id="image"
            value={image}
            disabled={isLoading}
            data-test="user-image-input"
            onChange={(e) => setImage(e.target.value)}
          />
          <button type="submit" disabled={isLoading} data-test="signup-btn">
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
        <Link to={"/"} data-test="login-link ">
          <p>Já tem uma conta? Faça login!</p>
        </Link>
      </PageContainer>
    </>
  );
}
