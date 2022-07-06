export const data = {
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
          command: "npm i -g lighthouse-web3",
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
  },
};
