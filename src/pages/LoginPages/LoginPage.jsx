import { InputsWrapper, PageContainer } from "./styled";
import logo from "../../assets/img/Logo.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import { UserContext } from "../../context/Context";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { setUser, setCurrentPage } = useContext(UserContext);
  const currentPage = useLocation().pathname;

  useEffect(() => {
    setCurrentPage(currentPage);
  }, []);

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
        setUser(data);
        navigate("/hoje");
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
            data-test="password-input"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" disabled={isLoading} data-test="login-btn">
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
        <Link to={"/cadastro"} data-test="signup-link">
          <p>Não tem conta? Cadastre-se!</p>
        </Link>
      </PageContainer>
    </>
  );
}
