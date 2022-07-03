import zenoImg from "../../images/zenobot.svg";
import calendarImg from "../../images/calendar.svg";
import analyticImg from "../../images/analytic.svg";
import ethImg from "../../images/eth.svg";
import reactImg from "../../images/react.svg";

export const ZenoBotObj = {
  id: "projects",
  href: "https://github.com/NathanDBrowne/ZenoBot",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "OOP ETL MongoDB-Atlas Requests",
  headline: "ZenoBot: a real-time transaction aggregator.",
  description:
    "A great trouble with trading is finding the time to do so, or knowing when the best opportunities are. Zenobot event-driven aggregation so you don't even have to watch your screen.",
  buttonLabel: "GitHub Repo",
  imgStart: false,
  img: analyticImg,
  alt: "ZenoBot",
  dark: true,
  primary: true,
  darkText: false,
};

export const RustObj = {
  id: "rust",
  href: "https://github.com/NathanDBrowne/pyrust",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Rust Rustc",
  headline: "Learning: RustLang",
  description:
    "I think Rust is only going to become more popular in the future - given its explicit object ownership and garbage collection control logic, I think Rust will become important as we deal with larger and larger datasets.",
  buttonLabel: "GitHub Repo",
  imgStart: true,
  img: zenoImg,
  alt: "Rust",
  dark: false,
  primary: false,
  darkText: true,
};

export const NBWebObj = {
  id: "projects",
  href: "https://github.com/NathanDBrowne/nb-web",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "React.js HTML CSS",
  headline: "My own website! Yes, this one.",
  description:
    "So far, I've found React to be the most intuitive of the web frameworks I've looked at. This site is nothing particularly fancy but it was certainly an explorative intro to front-end dev.",
  buttonLabel: "GitHub Repo",
  imgStart: false,
  img: reactImg,
  alt: "ThisSite",
  dark: true,
  primary: true,
  darkText: false,
};

export const LinqObj = {
  id: "LINQ",
  href: "https://github.com/NathanDBrowne/linq-backend",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Microservices Flask MongoDB PostreSQL React.js",
  headline: "LINQ event network",
  description:
    "A certain megacorporation is facing a sharp abandonment of users from its main platform, but as yet there's no good alternative to it's events service, so I'm trying to fill the gap.",
  buttonLabel: "GitHub Repo",
  imgStart: true,
  img: calendarImg,
  alt: "LINQ",
  dark: false,
  primary: false,
  darkText: true,
};

export const QuantObj = {
  id: "quant",
  href: "https://github.com/NathanDBrowne/BigMoneyCode",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Jupyter Pandas Matplotlib Numpy Finance AI/ML Curation",
  headline: "Quantitative Finance with Pandas.",
  description: "Financial analysis gave me my first exposure to Pandas.",
  buttonLabel: "GitHub Repo",
  imgStart: false,
  img: ethImg,
  alt: "Quant",
  dark: true,
  primary: true,
  darkText: false,
};
