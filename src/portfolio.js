const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: "https://github.com/CodeNinja04",
  title: "HEMENDRA SHARMA",
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: "HEMENDRA SHARMA",
  role: "Full Stack Developer",
  description:
    "I am a tech enthusiast. Skilled in Python, React JS, Express JS, Machine Learning, Computer Vision, and Deep Learning. Pursuing B.Tech in CSE with specialization in IoT from Vellore Institute of Technology.",
  resume: "",
  social: {
    linkedin: "https://www.linkedin.com/in/hemendra-sharma-15725a194/",
    github: "https://github.com/CodeNinja04",
  },
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: "FOOD SUPPLY CHAIN DAPP",
    description:
      "Decentralized application for food supply chain",
    stack: ["SOLIDITY", "TRUFFLE", "REACTJS"],
    sourceCode: "https://github.com/CodeNinja04/FOOD_SUPPLY_CHAIN_DAPP",
    livePreview: "https://github.com/CodeNinja04/FOOD_SUPPLY_CHAIN_DAPP",
  },
  {
    name: "Dev Teams",
    description:
      "A team and project management software which helps users to manage their projets easily and manage teams by giving task to users.",
    stack: ["REACTJS", "NODEJS", "MONGODB"],
    sourceCode: "https://github.com/CodeNinja04/Dev_Team",
    livePreview: "https://github.com/CodeNinja04/Dev_Team",
  },
  {
    name: "SOLIDITY SMART CONTRACTS",
    description:
      "A repository which contains smart contract built with solidity.",
    stack: ["SOLIDITY"],
    sourceCode: "https://github.com/CodeNinja04/SMART_CONTRACTS",
    livePreview: "https://github.com/CodeNinja04/SMART_CONTRACTS",
  },
];

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  
  'JavaScript',
  'Python',
  'Golang',
  'Solidity',
  'Reactjs',
  'Nodejs',
  'NLP',
  'FastApi'
  
  
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'hemendrasharma2019@gmail.com',
  mobile :"8319881606",
  instagram:"hemendra_04"
}

export { header, about, projects, skills, contact }
