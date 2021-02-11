import React, { useCallback } from "react";
import { Link } from "react-router-dom";

import { Container, Content, LogoGroup, MenuOptions } from "./styles";

const Header: React.FC = () => {
  const scrollTo = useCallback(id => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <Content>
      <Container>
        <LogoGroup>
          <h1>MUNDO NOVO TEC</h1>
        </LogoGroup>
        <MenuOptions>
          <Link
            onClick={() => {
              scrollTo("contact");
            }}
            to="/"
          >
            Contato
          </Link>
          <Link
            onClick={() => {
              scrollTo("who_we_are");
            }}
            to="/"
          >
            Quem Somos
          </Link>
          <Link
            onClick={() => {
              scrollTo("products");
            }}
            to="/"
          >
            Produtos
          </Link>
          <Link className="active" to="/">
            Home
          </Link>
        </MenuOptions>
      </Container>
    </Content>
  );
};

export default Header;
