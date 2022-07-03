import React from "react";

import IconPython from "../../images/python.svg";
import IconMongo from "../../images/mongo.svg";
import IconReact from "../../images/react.svg";
import IconSQL from "../../images/sql.svg";
import IconGitHub from "../../images/git.svg";

import {
  StackContainer,
  StackH1,
  StackH2,
  StackWrapper,
  StackCard,
  StackIcon,
  StackP,
} from "./StackElements";

const Stack = () => {
  return (
    <StackContainer id="stack">
      <StackH1>My Stack</StackH1>
      <StackWrapper>
        <StackCard>
          <StackIcon src={IconPython} />
          <StackH2>Python</StackH2>
          <StackP>My first scripting language</StackP>
        </StackCard>
        <StackCard>
          <StackIcon src={IconSQL} />
          <StackH2>SQL</StackH2>
          <StackP>Mostly PostgreSQL but I have used Google BigQuery.</StackP>
        </StackCard>
        <StackCard>
          <StackIcon src={IconMongo} />
          <StackH2>MongoDB</StackH2>
          <StackP>
            Atlas is a really great and easy cloud resource to plug in to an
            application.
          </StackP>
        </StackCard>
        <StackCard>
          <StackIcon src={IconReact} />
          <StackH2>React.js</StackH2>
          <StackP>
            I've tried a couple of web frameworks and React is definitely my
            favourite so far.
          </StackP>
        </StackCard>
        <StackCard>
          <StackIcon src={IconGitHub} />
          <StackH2>Git</StackH2>
          <StackP>
            All of my personal work is on GitHub but I've worked professionally
            with GitLab as well.
          </StackP>
        </StackCard>
      </StackWrapper>
    </StackContainer>
  );
};

export default Stack;
