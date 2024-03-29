import styled from "styled-components";

export const CheatSheetContainer = styled.div`
  height: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #222;

  @media screen and (max-width: 500px) {
    height: 2000px;
  }
  @media screen and (max-width: 760px) {
    height: 3400px;
  }
`;

export const CheatSheetBg = styled.div`
  position: absolute;
  top: 0;
  bopttom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  height: 100%;
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const SubjectWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  margin-bottom:64px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 760px) {
    grid-template-columns: 1fr;
    padding 0 20px;

  }
`;
export const CheatSheetCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 3px;
  max-height: 100px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    z-index: 1;
  }
`;

export const CheatSheetH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  text-align: center;
  margin-bottom: 32px;
  margin-top: 64px;

  @media-screen and (max-width:480px) {
    font-size: 2rem;
  }
`;

export const SubjectTitle = styled.h2`
  font-size: 1rem;
  color: #fff;
  margin-bottom: 10px;
`;

export const CheatSheetP = styled.p`
  font-size: 1rem;
  text-align: center;
`;
