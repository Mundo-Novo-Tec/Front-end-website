import styled from "styled-components";

export const Content = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-content: center;

  margin-top: 80px;

  h1 + h1 {
    margin-top: 24px;
  }
`;

export const SuperText = styled.h1`
  font-size: 48px;
  font-weight: bold;
  width: 800px;
  text-align: center;

  code {
    color: #04d361;
  }
`;

export const H1 = styled.h1`
  color: #a8a8b3;
  font-size: 24px;
  max-width: 800px;
  text-align: center;
`;

export const AttractionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: -240px;
`;

export const BriefWhoWeAreSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  img {
    width: 640px;
    height: 426px;
  }
`;

export const BriefWhoWeAreInformations = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 32px;
  h1 {
    margin-top: 24px;
    width: 448px;
    font-weight: bold;
  }

  h2 {
    font-size: 16px;
    width: 448px;
    color: #a8a8b3;
    font-weight: bold;
    margin-top: 8px;
  }
`;

export const WhoWheAreSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  margin-top: 160px;

  img {
    width: 640px;
    height: 466px;
  }
`;

export const WhoWeAreContent = styled.div`
  display: flex;
  flex-direction: column;

  margin-right: auto;

  h1 {
    margin-top: 24px;
    width: 448px;
    font-weight: bold;
  }

  h2 {
    font-size: 16px;
    width: 448px;
    color: #a8a8b3;
    font-weight: bold;
    margin-top: 8px;
  }
`;

export const MVVSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  margin-top: 160px;
`;

export const MVV = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & + div {
    margin-left: 32px;
  }

  .SuperText {
    width: 352px;
    margin-top: 48px;
  }

  h1 {
    margin-top: 16px;
    width: 352px;
  }
`;

export const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 160px;
  height: 160px;
  border-radius: 80px;

  background-color: #2e2e33;
`;

export const PartnersSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 160px;

  h1 {
    margin-top: 36px;
    color: #ecebe4;
  }
`;

export const PartnersLogoContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 32px;

  img {
    width: 160px;

    & + img {
      margin-left: 32px;
    }
  }
`;

export const SolutionsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  margin-top: 160px;

  h1 {
    color: #ecebe4;
  }
`;

export const SolutionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 928px;
  max-height: 584px;

  background-color: #2e2e33;

  margin-top: 16px;
  border-radius: 20px;

  button {
    width: 160px;
    height: 47px;

    background-color: #04d361;
    border-radius: 10px;
    border: 0;

    margin-top: 32px;
    margin-bottom: 32px;
  }
`;

export const SolutionContentTitle = styled.div`
  display: flex;
  justify-content: flex-start;

  width: 100%;

  margin-left: 64px;
  margin-top: 41px;

  h1 {
    background-color: #2e2e33;
    margin-left: 12px;
  }
`;

export const SolutionAttibutesGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;

  width: 928px;
`;

export const SolutionAttributes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 12px;

  p {
    width: 310px;
    margin-left: 24px;
  }
`;

export const Footer = styled.div`
  display: flex;
  width: 100%;
  background-color: #2e2e33;
  margin-top: 95px;
  margin-bottom: 32px;
`;

export const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  margin-right: 160px;
  margin-left: 160px;

  h1 {
    color: #ecebe4;
  }
`;

export const SocialMediaContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    margin-top: 48px;
    margin-bottom: 48px;

    & + svg {
      margin-left: 24px;
    }
  }
`;

export const ContactInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    color: #a8a8b3;
  }

  code {
    color: #04d361;
    text-decoration: none;
    font-size: 16px;
  }
`;
