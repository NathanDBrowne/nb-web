import React from "react";
import "../App.css";
import "../components/SkillsTile/SkillsTile.css";
import SkillsTile from "../components/SkillsTile/SkillsTile";

function MyStack() {
  return (
    <div className="tile">
      <h1>My stack:</h1>
      <div className="tile__container">
        <div className="tile__wrapper">
          <ul className="tile__items">
            <SkillsTile
              title="Python"
              label="pandas flask"
              text="My first interpreted language"
              path="/projects/linq"
            />
            <SkillsTile
              title="JavaScript"
              label="react node"
              text="My second interpreted language"
              path="/projects/linq"
            />
            <SkillsTile
              title="Rust"
              label="rustup cargo rustlings"
              text="My first compiled language"
              path="/projects/linq"
            />
          </ul>
          <ul className="tile__items">
            <SkillsTile
              title="SQL"
              label="postgreSQL SQLite3"
              text="Mostly PostgreSQL but have worked with BigQuery"
              path="/projects/linq"
            />
            <SkillsTile
              title="MongoDB"
              label="atlas event-triggers"
              text="Both cloud-based and local"
              path="/projects/linq"
            />
            <SkillsTile
              title="GCP"
              label="cloud-functions vms ml/ai"
              text="Working through google cert training"
              path="/projects/linq"
            />
          </ul>
          <ul className="tile__items">
            <SkillsTile
              src="images/zenobot_zoomed.png"
              title="Linux/WSL"
              label="rpi CRON tmux"
              text="Nothing quite compares to a beefy VM"
              path="/projects/linq"
            />
            <SkillsTile
              src="images/zenobot_zoomed.png"
              title="React.js"
              label="html css auth"
              text="Plus Atlas deployments"
              path="/projects/linq"
            />
            <SkillsTile
              src="images/zenobot_zoomed.png"
              title="Git"
              label="github gitlab"
              text="We love Git."
              path="/projects/linq"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MyStack;

// function MyStack() {
//   return (
//     <div className="tile">
//       <h1>Some of my projects:</h1>
//       <div className="tile__container">
//         <div className="tile__wrapper">
//           <ul>
//             <SkillsTile
//               src="images/zenobot_zoomed.png"
//               title="Python"
//               label="none"
//               path="/projects/linq"
//             />
//             <SkillsTile
//               src="images/zenobot_zoomed.png"
//               title="Python"
//               label="none"
//               path="/projects/linq"
//             />
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MyStack;
