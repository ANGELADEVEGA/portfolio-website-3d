import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styled from "styled-components";
import { seminars } from "../../data/constants"; // Ensure this path is correct
import SeminarCard from "../cards/SeminarCard";
import EarthCanvas from "../canvas/Earth";
import { FaGlobe } from 'react-icons/fa';  // Example icon, replace with your own


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Seminar = () => {
  return (
    <Container id="Seminars"> 
      <Wrapper>
        <Title>Seminars</Title> 
        <Desc style={{ marginBottom: "40px" }}>
          Highlights of seminars I have attended, including topics and speakers.
        </Desc>

        <VerticalTimeline>
          {seminars.map((seminar, index) => (
            <SeminarCard
              key={`seminar-${index}`}
              seminar={seminar}
            />
          ))}
        </VerticalTimeline>
        <EarthCanvas /> 
      </Wrapper>
    </Container>
  );
};

export default Seminar;
