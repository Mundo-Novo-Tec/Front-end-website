import React from "react";
import { Link } from "react-router-dom";
import { Container, Content, LogoGroup, MenuOptions } from "./styles";

const Header: React.FC = () => {
  return (
    <Content>
      <Container>
        <LogoGroup>
          <h1>MUNDO NOVO TEC</h1>
        </LogoGroup>
        <MenuOptions>
          <Link to="/">Contato</Link>
          <Link to="/">Quem Somos</Link>
          <Link to="/">Novidades</Link>
          <Link className="active" to="/">
            Home
          </Link>
        </MenuOptions>
      </Container>
    </Content>
  );
};

export default Header;
