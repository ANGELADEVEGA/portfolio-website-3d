import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import styled from "styled-components";

const Top = styled.div`
  width: 100%;
  display: flex;
  max-width: 100%;
  gap: 12px;
  align-items: center; /* Center align items vertically */
`;

const Image = styled.img`
  height: 50px;
  border-radius: 10px;
  margin-top: 4px;
  object-fit: cover; /* Ensure the image covers the area */
  @media only screen and (max-width: 768px) {
    height: 40px;
  }
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Speaker = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Feedback = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Span = styled.div`
  display: -webkit-box;
  max-width: 100%;
`;

const SeminarCard = ({ seminar }) => {
  return (
    <VerticalTimelineElement
      icon={
        <img
          width="100%"
          height="100%"
          alt={seminar?.title || "Seminar"}
          src={seminar?.image || "https://st4.depositphotos.com/1842549/21115/i/450/depositphotos_211151566-stock-photo-seminar-icon-internet-button-white.jpg"} // Use a placeholder if no image
          style={{ borderRadius: "50%", objectFit: "cover" }}
        />
      }
      contentStyle={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        background: "#1d1836",
        color: "#fff",
        boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
        backgroundColor: "rgba(17, 25, 40, 0.83)",
        border: "1px solid rgba(255, 255, 255, 0.125)",
        borderRadius: "6px",
      }}
      contentArrowStyle={{
        borderRight: "7px solid rgba(255, 255, 255, 0.3)",
      }}
      date={seminar?.date}
    >
      <Top>
      <Image src={seminar?.img} />
        <Body>
          <Title>{seminar?.title}</Title>
          <Speaker>Speaker: {seminar?.speaker || "Speaker information not available"}</Speaker>
          <Date>Date: {seminar?.date}</Date>
        </Body>
      </Top>
      <Description>
        {seminar?.description && <Span>{seminar.description}</Span>}
      </Description>
      {seminar?.feedback && (
        <Feedback>
          <b>Feedback: </b>
          {seminar?.feedback || "No feedback provided."}
        </Feedback>
      )}
    </VerticalTimelineElement>
  );
};

export default SeminarCard;
