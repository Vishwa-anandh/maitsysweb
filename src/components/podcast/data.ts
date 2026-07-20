import image from "../../assets/podcast_company_logos/kenmore.avif";
import image2 from "../../assets/podcast_company_logos/diehard.avif";
import image3 from "../../assets/podcast_company_logos/Envestnet__Yodlee_Logo.jpg";
import image4 from "../../assets/podcast_company_logos/EVPassport_-Logo_2020_WhiteBackground.avif";
import image5 from "../../assets/podcast_company_logos/GE_Healthcare_Logo_RGB.avif";
import image6 from "../../assets/podcast_company_logos/JCPenney.avif";
import image7 from "../../assets/podcast_company_logos/HBFuller.avif";
import image8 from "../../assets/podcast_company_logos/image12.png";
import image9 from "../../assets/podcast_company_logos/image8.png";
import image10 from "../../assets/podcast_company_logos/image9.png";
import image11 from "../../assets/podcast_company_logos/image10.png";
import image12 from "../../assets/podcast_company_logos/Mondelez.png";
import image13 from "../../assets/podcast_company_logos/Baillie.png";
import image14 from "../../assets/podcast_company_logos/jabil.png";
import image15 from "../../assets/podcast_company_logos/ingersoll.png";
import image16 from "../../assets/podcast_company_logos/kimberly.png";
interface PodcastData {
  id: number;
  youtubeUrl: string;
  companyLogos: string[];
  title: string;
  episode: string;
}

export const podcasts: PodcastData[] = [
  {
    id: 1,
    youtubeUrl: "https://www.youtube.com/embed/FctPdHWxv6Q?si=4X2VabVnCCx07dPf",
    companyLogos: [image, image2],
    title: "CEO, Sears' Kenmore & Brands",
    episode: "Episode 01",
  },
  {
    id: 2,
    youtubeUrl: "https://www.youtube.com/embed/LcQqf7x4uVU?si=2HakEZR2TctwAToT",
    companyLogos: [image3],
    title: "CAO, Envestnet | Yodlee",
    episode: "Episode 02",
  },
  {
    id: 3,
    youtubeUrl: "https://www.youtube.com/embed/l5pNBT9t_Bo?si=VbpkAdNfI-GZYxU0",
    companyLogos: [image4],
    title: "CEO, EVPassport",
    episode: "Episode 03",
  },
  {
    id: 4,
    youtubeUrl: "https://www.youtube.com/embed/_evgehy4n8A?si=WcWcIrC2gusTcoRw",
    companyLogos: [image5],
    title: "CEO, GE Healthcare Command Center",
    episode: "Episode 04",
  },
  {
    id: 5,
    youtubeUrl: "https://www.youtube.com/embed/h1F0hQ7cI3k?si=y5-TNvG3Qr5ruJaF",
    companyLogos: [image6],
    title: "CIO, JCPenney",
    episode: "Episode 05",
  },
  {
    id: 6,
    youtubeUrl: "https://www.youtube.com/embed/5lru-pKvSKU?si=wuLFWSdLoi0qoNTJ",
    companyLogos: [image8],
    title: "CEA, UNFI",
    episode: "Episode 06",
  },
  {
    id: 7,
    youtubeUrl: "https://www.youtube.com/embed/JGVH1wmSRUs?si=2mPJYwNsRf9jz82H",
    companyLogos: [image7],
    title: "SAP Head, H.B. Fuller",
    episode: "Episode 07",
  },
  {
    id: 8,
    youtubeUrl: "https://www.youtube.com/embed/HMrMtmtCb7k?si=UECV4svnpqjdnBMR",
    companyLogos: [image9],
    title: "CIO, Payless ShoeSource ",
    episode: "Episode 08",
  },
  {
    id: 9,
    youtubeUrl: "https://www.youtube.com/embed/8dS9hxRipFQ?si=KAL1LJhlhcpoKmpU",
    companyLogos: [image10, image11],
    title: "CoS, Family Dollar & CEO, Sears & (Live)",
    episode: "Episode 09",
  },
  {
    id: 10,
    youtubeUrl: "https://www.youtube.com/embed/3fOk6Yxsjz0?si=l44evYPCaissxtkK",
    companyLogos: [image8, image12],
    title: "Fortune 500 CPG - Chief Enterprise Architect Panel",
    episode: "Episode 10",
  },
  {
    id: 11,
    youtubeUrl: "https://www.youtube.com/embed/vS942hyMUVU?si=lnTO6b9zvb2OBpWL",
    companyLogos: [image13],
    title: "CTO @ Ballie Lumber - The Maitsys Podcast",
    episode: "Episode 11",
  },
  {
    id: 12,
    youtubeUrl: "https://www.youtube.com/embed/-902h8YBmqI?si=GGPc8AshfGXesqmE",
    companyLogos: [image15, image16, image14, image12],
    title: "Fortune 500 SAP Executive Roundtable | Maitsys (Live)",
    episode: "Episode 12",
  },
];
