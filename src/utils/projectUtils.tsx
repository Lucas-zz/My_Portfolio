import * as lottie from "./lottieUtils";

import globo from "../assets/globo.svg"
import TrackIt from "../assets/TrackIt.svg";
import MyWallet from "../assets/MyWallet.svg";
import MegaStore from "../assets/MegaStore.png";
import linkr from "../assets/linkr.svg";
import PostgreSQL from '../assets/postgresql.svg';

export const projects = [
    {
        id: 1,
        name: "Projeto - globo.com",
        repoUrl: "https://github.com/Lucas-zz/globo.com",
        appUrl: "https://hmgxb.csb.app/",
        image: globo,
        technologies: [
            lottie.HTML5,
            lottie.CSS3,
        ]
    },
    {
        id: 2,
        name: "Projeto - Track It",
        repoUrl: "https://github.com/Lucas-zz/Track_It",
        appUrl: "https://track-it-lucas-zz.vercel.app/",
        image: TrackIt,
        technologies: [
            lottie.HTML5,
            lottie.CSS3,
            lottie.JavaScript,
            lottie.ReactJS,
            lottie.NodeJS,
        ]
    },
    {
        id: 3,
        name: "Projeto - My Wallet",
        repoUrl: "https://github.com/Lucas-zz/MyWallet_frontEnd",
        appUrl: "https://my-wallet-lucas-zz.vercel.app/",
        image: MyWallet,
        technologies: [
            lottie.HTML5,
            lottie.CSS3,
            lottie.JavaScript,
            lottie.ReactJS,
            lottie.NodeJS,
            lottie.MongoDB,
        ]
    },
    {
        id: 4,
        name: "Projeto - Mega Store",
        repoUrl: "https://github.com/Lucas-zz/mega-store-front",
        appUrl: "https://mega-store.vercel.app/",
        image: MegaStore,
        technologies: [
            lottie.HTML5,
            lottie.CSS3,
            lottie.JavaScript,
            lottie.ReactJS,
            lottie.NodeJS,
            lottie.MongoDB,
        ]
    },
    {
        id: 5,
        name: "Projeto - Linkr",
        repoUrl: "https://github.com/Lucas-zz/Linkr-Front",
        appUrl: "https://linkr-front-five.vercel.app/",
        image: linkr,
        technologies: [
            lottie.HTML5,
            lottie.CSS3,
            lottie.JavaScript,
            lottie.ReactJS,
            lottie.NodeJS,
            PostgreSQL,
        ]
    },
]