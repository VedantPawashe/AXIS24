import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import VP from '../assets/VP.jpg'
import AS from '../assets/AS.jpg'
import HP from '../assets/HP.jpg'



// Styled components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
`;

const slideUp = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const Card = styled.div`
  width: 250px;
  background-color: #ffffff;
  border-radius: 20px;
  margin: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: ${({ loaded }) => (loaded ? slideUp : 'none')} 1s ease;
  animation-fill-mode: forwards;
  opacity: 0;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`;

const Image = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Info = styled.div`
  padding: 20px;
  text-align: center;
`;

const Name = styled.h3`
  margin: 0;
  color: #333333;
`;

const Description = styled.p`
  margin: 10px 0 0;
  color: #666666;
`;

// Functional component
const FoundersCard = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <h1 style={{ textAlign: 'center', marginTop: '20px', color: '#ffffff', fontSize: '30px' }}>Our Founders</h1>
      <Container>
        <Card loaded={loaded}>
          <Image src={VP} alt="Profile Picture" />
          <Info>
            <Name className='text-2xl'>Vedant Pawashe</Name>
            <Description>Web Developer</Description>
          </Info>
        </Card>
        <Card loaded={loaded}>
          <Image src={AS} alt="Profile Picture" />
          <Info>
            <Name className='text-2xl'>Aniket Sable</Name>
            <Description>Web Developer</Description>
          </Info>
        </Card>
        <Card loaded={loaded}>
          <Image src={HP} alt="Profile Picture" />
          <Info>
            <Name className='text-2xl'>Harshal Papal</Name>
            <Description>Web Developer</Description>
          </Info>
        </Card>
      </Container>
    </>
  );
};

export default FoundersCard;