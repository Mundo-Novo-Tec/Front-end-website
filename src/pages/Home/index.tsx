import React from "react";
import {
  FiBookmark,
  FiBriefcase,
  FiCheck,
  FiCrosshair,
  FiEye,
  FiFacebook,
  FiHeart,
  FiInstagram,
  FiPlay,
  FiTwitter,
} from "react-icons/fi";

import Header from "../../components/Header";
import {
  AttractionSection,
  BriefWhoWeAreInformations,
  BriefWhoWeAreSection,
  Circle,
  ContactInformation,
  Content,
  Footer,
  FooterContent,
  H1,
  MainText,
  MVV,
  MVVSection,
  PartnersLogoContent,
  PartnersSection,
  SocialMediaContent,
  SolutionAttibutesGroup,
  SolutionAttributes,
  SolutionContent,
  SolutionContentTitle,
  SolutionsSection,
  SuperText,
  WhoWeAreContent,
  WhoWheAreSection,
} from "./styles";

import attractionImage from "../../assets/Attraction_Image Group.png";
import teamSolutionImage from "../../assets/Team_Solution_Background.png";
import whoWeAreImage from "../../assets/who_we_are.png";
import mundoNovoGrayImage from "../../assets/mundo_novo_logo_gray.png";
import paperHouseGrayImage from "../../assets/paper_house_gray.png";

const Home: React.FC = () => {
  return (
    <Content>
      <Header />
      <MainText>
        <SuperText>
          BUSQUE NOVAS FRONTEIRAS, REINVENTE-SE COM A TECNOLOGIA
          <code>!</code>
        </SuperText>
        <H1>
          Una-se as nós para alcançar seus objetivos. Expertise, atenção e
          carinho são os pilares de nossos produtos e serviços.
        </H1>
      </MainText>
      <AttractionSection>
        <img src={attractionImage} alt="principal" />
      </AttractionSection>
      <BriefWhoWeAreSection>
        <img src={teamSolutionImage} alt="team solutions" />
        <BriefWhoWeAreInformations>
          <FiBookmark size={24} color="#04D361" fill="#04D361" />
          <h1>
            INOVAÇÃO, TECNOLOGIA E DEDICAÇÃO LEVARÃO VOCÊ SUA EMPRESA AO
            SUCESSO!
          </h1>
          <h2>
            Desenvolvemos tecnologia para ajudar você e o mundo, com conceitos
            inovadores, aplicando conhecimentos da área da ciência de dados,
            programação, eletrônica, mecânica, estátistica e muito mais.
          </h2>
        </BriefWhoWeAreInformations>
      </BriefWhoWeAreSection>
      <WhoWheAreSection className="whoweare">
        <WhoWeAreContent>
          <FiBookmark size={24} color="#04D361" fill="#04D361" />
          <h1>
            SOMOS UMA EMPRESA VOLTADA A SOLUÇÃO DE PROBLEMAS A PARTIR DO USO E
            CRIAÇÃO DE NOVAS TECNOLOGIAS
          </h1>
          <h2>
            A empresa surgiu em 2018 com o intuito de desenvolver uma solução
            para as empresas que precisavam de melhorar o contato com o seu
            cliente, expor seus produtos e aumentarem o número de prospects.
          </h2>
        </WhoWeAreContent>
        <img src={whoWeAreImage} alt="Who we are idea lamp" />
      </WhoWheAreSection>
      <MVVSection>
        <MVV>
          <Circle>
            <FiCrosshair size={64} color="#04D361" />
          </Circle>
          <SuperText className="SuperText">Missão</SuperText>
          <H1>
            Trazer inovação, solução e tecnologia para o mundo, buscando sempre
            evoluir e inventar.
          </H1>
        </MVV>
        <MVV>
          <Circle>
            <FiEye size={64} color="#04D361" />
          </Circle>
          <SuperText className="SuperText">Visão</SuperText>
          <H1>
            Ser referência em diversas áreas da tecnologia e engenharia,
            propiciar diversas soluções atendendo o máximo número de pessoas e
            empresas.
          </H1>
        </MVV>
        <MVV>
          <Circle>
            <FiHeart size={64} color="#04D361" />
          </Circle>
          <SuperText className="SuperText">Valores</SuperText>
          <H1>
            Aproximar o cliente, compreender e solucionar corretamente o
            problema proposto, buscar o desenvolvimento de tecnologias que não
            prejudiciais ao meio ambiente e o desenvolvimento sábio e seguro da
            I.A.
          </H1>
        </MVV>
      </MVVSection>
      <PartnersSection>
        <Circle>
          <FiBriefcase size={64} color="#04D361" />
        </Circle>
        <H1>Parceiros que usam nossas soluções</H1>
        <PartnersLogoContent>
          <img src={mundoNovoGrayImage} alt="Logo Mundo Novo" />
          <img src={paperHouseGrayImage} alt="Logo Paper House" />
        </PartnersLogoContent>
      </PartnersSection>

      <SolutionsSection>
        <H1>NOSSAS SOLUÇÕES</H1>
        <SolutionContent>
          <SolutionContentTitle>
            <FiPlay size={24} color="#04D361" fill="#04D361" />
            <H1>Enterprise</H1>
          </SolutionContentTitle>
          <SolutionAttibutesGroup>
            <SolutionAttributes>
              <FiCheck size={24} color="#04D361" />
              <p>
                Atendimento ao cliente via Whatsapp ou Telegram (call center).
              </p>
            </SolutionAttributes>
            <SolutionAttributes>
              <FiCheck size={24} color="#04D361" />
              <p>
                I.A para sugestão de público e estratégia de impulsionamento nas
                campanhas do Facebook e Instagram.
              </p>
            </SolutionAttributes>
            <SolutionAttributes>
              <FiCheck size={24} color="#04D361" />
              <p>
                Indicadores de análise para B.I, motivos de contato,
                reclamações, efetivação, pós-venda, distribuição temporal de
                fluxo, e outros.
              </p>
            </SolutionAttributes>
            <SolutionAttributes>
              <FiCheck size={24} color="#04D361" />
              <p>
                Possível criação de chatbot para automação do atendimento, e
                relalização de contato ativo com o cliente.
              </p>
            </SolutionAttributes>
            <SolutionAttributes>
              <FiCheck size={24} color="#04D361" />
              <p>
                Integração com Facebook Business, permitindo criação de
                campanhas e impulsionamento.
              </p>
            </SolutionAttributes>
            <SolutionAttributes>
              <FiCheck size={24} color="#04D361" />
              <p>
                Plataforma 100% gerenciável de fácil manuseio e permite diversas
                categorias de usuário com funções diferentes.
              </p>
            </SolutionAttributes>
          </SolutionAttibutesGroup>
          <button type="submit">Saiba Mais</button>
        </SolutionContent>
      </SolutionsSection>
      <Footer>
        <FooterContent>
          <SocialMediaContent>
            <FiFacebook size={24} color="#04D361" />
            <FiInstagram size={24} color="#04D361" />
            <FiTwitter size={24} color="#04D361" />
          </SocialMediaContent>
          <H1>Mundo Novo Tec @copyright 2021</H1>
          <ContactInformation>
            <p>Contato</p>

            <p>
              E-mail:
              <code>contato@mundonovotec.com.br</code>
            </p>
          </ContactInformation>
        </FooterContent>
      </Footer>
    </Content>
  );
};

export default Home;
