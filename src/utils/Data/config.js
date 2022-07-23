// export const baseUrl = "http://localhost:1337/api";
// export const mediaUrl = "http://localhost:1337";
export const baseUrl = "https://cms.lighthouse.storage/api";
export const mediaUrl = "https://cms.lighthouse.storage";

export const data = {
  Global: {
    address: "Lighthouse - Singapore",
    email: "nandit@Lighthouse.storage",
  },
  SocialLinks: {
    tweeter: "https://twitter.com/LighthouseWeb3",
    linkedin: "https://www.linkedin.com/company/lighthouse-web3",
    github: "https://github.com/lighthouse-web3",
    discord: "https://discord.com/invite/c4a4CGCdJG",
    telegram: "https://t.me/lighthouseStorage",
  },
  Home: {
    banner: {
      title: "A New Way To <br /> Store Files Permanently",
      description:
        "Lighthouse allows users to store their files on decentralized network for lifetime at a fixed price",
      image: "/world.png",
    },
    package: {
      title: "Installing Our Package",
      description:
        "Install and start using our package by running the following cli commands",
      commands: [
        {
          section: "install",
          command: "npm install -g @lighthouse-web3/sdk",
          image: "/1-cli.png",
        },
        {
          section: "wallet",
          command: "lighthouse-web3 create-wallet",
          image: "/2-cli.png",
        },
        {
          section: "deploy",
          command: "lighthouse-web3 deploy <filename>",
          image: "/3-cli.png",
        },
        {
          section: "status",
          command: "lighthouse-web3 status <CID>",
          image: "/4-cli.png",
        },
      ],
    },
    keyFeatures: [
      {
        image: "/feature/feature (4).png",
        title: "Pay once and store forever",
        content:
          " Lighthouse runs a storage endowment pool whose job is to pay for the user files till perpetuity. This is of utmost priority for many applications, for example, NFT where many users are unaware of the fact that somebody has to pay for their NFTs over time which is generally a centralized mechanism and otherwise might lead to a broken NFT. ",
      },
      {
        image: "/feature/feature (3).png",
        title: "Compatibility with existing stack ",
        content:
          " Lighthouse is built on existing open source technologies like IPFS, Filecoin which has ecosystem of 1000s of developers and will be easily be able to integrate Lighthouse into their current stack. ",
      },
      {
        image: "/feature/feature (2).png",
        title: "Cheaper than alternates",
        content:
          " Being built on top of Filecoin, makes the Lighthouse storage much cheaper than existing alternates in the market.  ",
      },
      {
        image: "/feature/feature (1).png",
        title: "Distribute files globally",
        content:
          " Provides the ability for users to replicate their files globally near to their users location leading to faster load times and censorship resistant",
      },
    ],
    keyDiffrence: [
      "Pay once and store forever cost model is a pretty new storage cost model which is different from existing protocols.",
      "Our mechanism involves staking, accruing fees and interest on the storage cost paid by the user which overall leads to a lower fee than the current alternative like arweave.",
      "Smart contracts run on popular chains like polygon, ethereum, etc. hence direct integration with existing dapps of these ecosystems.",
      "IPFS and Filecoin are the popular blockchain storage protocols and hence Lighthouse will be very compatible with existing stack for projects to migrate to.",
    ],
    roadmapData: [
      {
        quater: "Q4-2021",
        milestone: "1",
        points: [
          "Launch Alpha - cli and npm package",
          "Get early users",
          " Build community - twitter, telegram and discord",
        ],
        position: "lower",
      },
      {
        quater: "Q1-2022",
        milestone: "2",
        points: ["Testing", "Alpha Launch", "Tokenomics and white paper"],
        position: "upper",
      },
      {
        quater: "Q2-2022",
        milestone: "3",
        points: [
          "Bootstrap endowment pool",
          "Security audit",
          "Protocol Deploy Mainnet",
          "Cosmos SDK for nodes",
        ],
        position: "lower",
      },
      {
        quater: "Q3-2022",
        milestone: "4",
        points: [
          "Ecosystem Development",
          "Infrastructure Decentralize",
          "compatibility to FVM",
          "Onboard useful public data",
        ],
        position: "upper",
      },
      {
        quater: "Q4-2022",
        milestone: "5",
        points: [
          " NFT and storage DAO",
          "Prototype of privacy focussed zkp solutions to store files",
          "Token Launch (Tentative)",
        ],
        position: "lower",
      },
    ],
    email: {
      title: "Join our list",
      description:
        "Subscribe to get the latest news, updates and early access to Lighthouse Beta",
      btnText: "Contact Us",
    },
  },
  About: {
    team: {
      title: "Our Team",
      description:
        "Company is not defined by the things they do but by the team it is done by",
      members: [
        {
          name: "Nandit",
          image: "/team/nandit.jpg",
          tweeter: "https://twitter.com/nanditmehra",
        },
        {
          name: "Ravish",
          image: "/team/ravish.png",

          tweeter: "https://twitter.com/ravish1729",
        },
        {
          name: "Arpit",
          image: "/team/arpit.png",

          tweeter: "https://twitter.com/ArpitBindal4",
        },
        {
          name: "Sunidhi",
          image: "/team/sunidhi.png",
          linkedin: "https://www.linkedin.com/in/sunidhi-chawla-32bb391a5",
        },
        {
          name: "Ayobami Oki",
          image: "/team/Ayobami_oki.png",
        },
        {
          name: "Tejiri Odiase",
          image: "/team/tejiri_odiase.png",
        },
      ],
    },
    backedBy: {
      title: "Backed By",
      description:
        "We are backed by some of the most prestegious organisations",
      logos: [
        "/BackedBy/protocol_labs.png",
        "/BackedBy/long-hash-ventures.png",
        "/BackedBy/Big_Brain.png",
        "/BackedBy/Fenbushi_Capital.png",
        "/BackedBy/Formless.png",
        "/BackedBy/mask_network.svg",
        "/BackedBy/NGC.png",
        "/BackedBy/2Link.jpg",
        "/BackedBy/hashcib.png",
      ],
    },
    angel: {
      title: "Our Angels",
      description:
        " Our mentors and investors believes in our vision and empower us to acheive it.",
      angels: [
        {
          name: "Balaji Srinivasan",
          image: "/angels/balaji.png",
          designation: "Ex-CTO Coinbase",
          linkedin: "https://www.linkedin.com/in/balajissrinivasan",
          tweeter: "https://twitter.com/balajis",
        },
      ],
    },
  },
};
