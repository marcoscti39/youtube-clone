import { AiFillHome as HomeIcon } from "react-icons/ai";
import { BiCode as CodeIcon, BiCameraMovie as MovieIcon } from "react-icons/bi";
import { BsMusicNote as MusicIcon } from "react-icons/bs";
import {
  MdSchool as EducationIcon,
  MdOutlineOndemandVideo as LiveIcon,
  MdSportsVolleyball as SportIcon,
} from "react-icons/md";
import { SiAudioboom as PodcastIcon } from "react-icons/si";
import { IoGameController as GameIcon } from "react-icons/io5";

export interface AsideData {
  name: string;
  path: string;
  icon: JSX.Element;
}

export const asideData: AsideData[] = [
  {
    name: "Home",
    path: "/",
    icon: <HomeIcon />,
  },
  {
    name: "Programming",
    path: "/category/programming",
    icon: <CodeIcon />,
  },
  {
    name: "Music",
    path: "/category/music",
    icon: <MusicIcon />,
  },
  {
    name: "Education",
    path: "/category/education",
    icon: <EducationIcon />,
  },
  {
    name: "Podcast",
    path: "/category/podcast",
    icon: <PodcastIcon />,
  },
  {
    name: "Movie",
    path: "/category/movie",
    icon: <MovieIcon />,
  },
  {
    name: "Gaming",
    path: "/category/gaming",
    icon: <GameIcon />,
  },
  {
    name: "Live",
    path: "/category/live",
    icon: <LiveIcon />,
  },
  {
    name: "Sport",
    path: "/category/sport",
    icon: <SportIcon />,
  },
];
