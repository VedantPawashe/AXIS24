import styled from 'styled-components';
import Logo from '../assets/logo.png'

// Styled components
const FooterContainer = styled.footer`
  background-color: #02050e;
  padding-top: 3rem;
  padding-bottom: 2rem;
`;

const FooterRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterCol = styled.div`
  flex: 0 0 auto;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  
  @media (min-width: 576px) {
    max-width: 50%;
  }
  
  @media (min-width: 768px) {
    max-width: 25%;
  }
`;

const FooterImage = styled.img`
  margin-bottom: 1rem;
  width: 48px;
  height: 48px;
`;

const FooterText = styled.small`
  display: block;
  margin-bottom: 1rem;
  color: #ffffff;
  font-size: 0.9rem;
`;

const FooterHeading = styled.h5`
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 2rem;
  font-weight: 600;
  color: #ffffff;
`;

const FooterList = styled.ul`
  margin-top: 0;
  margin-bottom: 1rem;
  padding-left: 0;
  list-style: none;
`;

const FooterListItem = styled.li`
  margin-bottom: 0.5rem;
`;

const FooterLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }
`;

// Functional component
const Footer = () => {
  return (
    <FooterContainer className="pt-4 my-md-5 pt-md-5 border-top">
      <FooterRow>
        <FooterCol>
          <FooterImage src={Logo} alt="TechnoTrove" />
          <FooterText>© 2024 All rights reserved.</FooterText>
        </FooterCol>
        <FooterCol>
          <FooterHeading>Features</FooterHeading>
          <FooterList className="list-unstyled text-small">
            <FooterListItem><FooterLink href="#" className="text-muted">Cool stuff</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="#" className="text-muted">Random feature</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="#" className="text-muted">Team feature</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="#" className="text-muted">Stuff for developers</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="#" className="text-muted">Another one</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="#" className="text-muted">Last time</FooterLink></FooterListItem>
          </FooterList>
        </FooterCol>
        <FooterCol>
          <FooterHeading>Resources</FooterHeading>
          <FooterList className="list-unstyled text-small">
            <FooterListItem><FooterLink href="#" className="text-muted">Resource</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="#" className="text-muted">Resource name</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="#" className="text-muted">Another resource</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="#" className="text-muted">Final resource</FooterLink></FooterListItem>
          </FooterList>
        </FooterCol>
      
      </FooterRow>
    </FooterContainer>
  );
};

export default Footer;