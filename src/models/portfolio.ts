export type PortfolioItem = {
  id: number;
  title: string;
  techStack: string[]; // paths ke icon teknologi
  desc: string;
  repository: string;
  link: string;
  img: string[]; // paths ke gambar
};

export type PortfolioData = PortfolioItem[];