import { Product } from "@/types/Product";

export const products:Product[] = [
    {
        id: 1,
        name: "クロワッサン",
        image: "/images/croissant.webp",
        description: "バターたっぷりでサクサクとした食感のフランス定番の朝食パン。",
        recommend: "定番",
    },
    {
        id: 2,
        name: "バゲット",
        image: "/images/baguette.webp",
        description: "フランスの食卓でおなじみ。外はパリッと中はもちもちの細長いパン。",
        recommend: "人気",
    },
    {
        id: 3,
        name: "パン・オ・ショコラ",
        image: "/images/pain-au-chocolat.webp",
        description: "クロワッサン生地にチョコレートを包んだ人気のスイーツ系パン。",
        recommend: "スイーツ",
    },
    {
        id: 4,
        name: "ブリオッシュ",
        image: "/images/brioche.webp",
        description: "卵とバターがたっぷり入った、ほんのり甘くてふんわりしたパン。",
        recommend: "朝食",
    },
    {
        id: 5,
        name: "カンパーニュ",
        image: "/images/campagne.webp",
        description: "田舎風の素朴なハードブレッド。酸味がありチーズやワインと好相性。",
        recommend: "おつまみ",
    },
    {
        id: 6,
        name: "キッシュ",
        image: "/images/quiche.webp",
        description: "パイ生地に卵液と具材を流し込んで焼いた、食事系のタルト。",
        recommend: "ランチ",
    }
];