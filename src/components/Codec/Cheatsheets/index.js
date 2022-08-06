import React from "react";

import {
  CheatSheetContainer,
  CheatSheetH1,
  SubjectTitle,
  SubjectWrapper,
} from "./CheatSheetElements";

const CheatSheet = () => {
  return (
    <CheatSheetContainer id="cheatsheets">
      <CheatSheetH1>Every CheatSheet (WIP)</CheatSheetH1>
      <SubjectWrapper>
        <SubjectTitle>Python</SubjectTitle>
      </SubjectWrapper>
      <SubjectWrapper>
        <SubjectTitle>JavaScript</SubjectTitle>
      </SubjectWrapper>
    </CheatSheetContainer>
  );
};

export default CheatSheet;
