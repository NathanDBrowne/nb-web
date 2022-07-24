import React from "react";

import IconPython from "../../../images/python.svg";
import IconMongo from "../../../images/mongo.svg";
import IconReact from "../../../images/react.svg";
import IconSQL from "../../../images/sql.svg";
import IconGitHub from "../../../images/git.svg";
import IconCloud from "../../../images/cloud.svg";
import IconLinux from "../../../images/linux.svg";
import IconVSCode from "../../../images/vscode.svg";
import IconDocker from "../../../images/docker.svg";

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
          <StackP>
            My first scripting language. Started as an undergrad doing
            mathematical modelling and expanded from there!
          </StackP>
        </StackCard>
        <StackCard>
          <StackIcon src={IconReact} />
          <StackH2>React.js</StackH2>
          <StackP>
            React is my favourite web framework so far - I think the way it
            wraps HTML and CSS is very intuitive.
          </StackP>
        </StackCard>
        <StackCard>
          <StackIcon src={IconCloud} />
          <StackH2>Google Cloud</StackH2>
          <StackP>
            I'm currently working through the Google Cloud Skills badges.
            There's a lot though...
          </StackP>
        </StackCard>
        <StackCard>
          <StackIcon src={IconLinux} />
          <StackH2>Linux</StackH2>
          <StackP>
            I usually develop in WSL if I'm going to deploy to a linux VM - I've
            got a couple of bots on my Raspberry Pi: currently a little Ubuntu
            server.
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
        <StackCard>
          <StackIcon src={IconDocker} />
          <StackH2>Docker</StackH2>
          <StackP>
            I've mostly used docker for easy learning environments but I have
            also built images from custom Dockerfiles.
          </StackP>
        </StackCard>
        <StackCard>
          <StackIcon src={IconVSCode} />
          <StackH2>VSCode</StackH2>
          <StackP>
            My favourite feature is Remote Explorer as I like to work and debug
            directly on servers/containers.
          </StackP>
        </StackCard>
        <StackCard>
          <StackIcon src={IconSQL} />
          <StackH2>SQL</StackH2>
          <StackP>
            I've mostly used PostgreSQL but I have had some contact with Google
            BigQuery and SQLite.
          </StackP>
        </StackCard>
        <StackCard>
          <StackIcon src={IconMongo} />
          <StackH2>MongoDB</StackH2>
          <StackP>
            Atlas is a great cloud resource which is easy to plug in to an
            application.
          </StackP>
        </StackCard>
      </StackWrapper>
    </StackContainer>
  );
};

export default Stack;
