import styled from "styled-components";

export const Anchor = styled.span`
  /* box model */
  display: block;
  height: calc(40px);
  margin-top: -40px;
  visibility: hidden;
`;

export const AboutSection = styled.section`
  /* box model */
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 20px;

  /* visual decorations */
  background-color: ${({ theme }) => theme.gunmetal};

  > div {
    max-width: 1000px;
  }
`;

export const AboutHeader = styled.div`
  /* box model */
  display: flex;
  flex-direction: row;
  text-align: center;
  padding: 15px;
  width: 100%;

  /* typography */

  /* visual decorations */
`;

export const HeaderText = styled.h2`
  /* box model */
  align-items: center;
  display: flex;
  flex-direction: row;
  margin: 5px 0;

  /* typography */
  color: ${({ theme }) => theme.floralWhite};
  font-family: "Staatliches";
  font-size: 3.75rem;
  font-weight: 500;
  line-height: 1;
`;

export const AboutContent = styled.div`
  /* box model */
  align-items: center;
  border-top: 10px solid ${({ theme }) => theme.polishedPine};
  border-radius: 0px 0px 30px 30px;
  display: flex;
  flex-direction: column;
  padding: 15px;

  /* visual decorations */
  background-color: ${({ theme }) => theme.floralWhite};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.29);
`;

export const AboutInfo = styled.div`
  /* box model */
  align-items: center;
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const TextAndButton = styled.div`
  /* box model */
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const IntroText = styled.h3`
  /* box model */
  padding: 0px 5px;
  margin: 15px 0;
  width: 100%;

  /* typography */
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1rem;
  text-align: left;

  /* visual decorations */
`;

export const AboutText = styled.p`
  /* box model */
  padding: 0px 5px;
  margin: 8px 0;
  width: 100%;

  /* typography */
  font-size: 1.125rem;
  line-height: 1.6rem;
`;

export const ContactButton = styled.button`
  /* box model */
  border: none;
  border-radius: 5px;
  padding: 8px 8px;
  margin: 10px auto;

  /* typography */
  font-size: 1.125rem;
  line-height: 1.75rem;

  /* visual decorations */
  background-color: ${({ theme }) => theme.polishedPine};
  cursor: pointer;
  transition: 0.2s all;

  &:hover {
    background-color: ${({ theme }) => theme.ashGray};
  }

  > a {
    /* typgraphy */
    color: white;
    text-decoration: none;
  }
`;

export const ProfilePic = styled.img`
  /* box model */
  border-radius: 40px;
  object-fit: cover;
  padding: 0 5px;
  margin: 10px 5px;
  max-width: 300px;

  @media (min-width: 640px) {
    /* box model */
    max-width: 350px;
  }

  @media (min-width: 768px) {
    /* box model */
    max-width: 400px;
  }

  @media (min-width: 1024px) {
    /* box model */
    height: 250px;
    width: 100%;
  }
`;
