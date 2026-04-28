import fifaImage    from '../components/projectImages/fifaImage.jpg';
import fifaIcon     from '../components/projectImages/fifaIcon.jpg';
import playmateImage from '../components/projectImages/playmateImage.jpg';
import playmateIcon  from '../components/projectImages/playmateIcon.png';
import directmartImage from '../components/projectImages/directmartImage.png';
import directmartIcon  from '../components/projectImages/directmartIcon.jpg';
import trackerImage  from '../components/projectImages/trackerImage.webp';
import trackerIcon   from '../components/projectImages/trackerIcon.webp';
import deckImage     from '../components/projectImages/deckImage.png';
import deckIcon      from '../components/projectImages/deckIcon.webp';
import movieImage    from '../components/projectImages/movieImage.jpg';
import movieIcon     from '../components/projectImages/movieIcon.jpg';

export const projects = [
  {
    title:       "Player Stats 22",
    date:        "Jan 2022",
    achievements: ["3K+ Downloads"],
    image:       fifaImage,
    icon:        fifaIcon,
    link:        "https://play.google.com/store/apps/details?id=com.fistat.fifa_stats",
    gitLink:     "https://github.com/Rushil10/Flutter-Fifa-Stats-22",
    description: "FIFA 22 Stats app with data on 20,000+ players. Browse ratings, stats, favourites, and emerging players — works fully offline.",
    tags:        ["Flutter", "SQLite"],
  },
  {
    title:       "Playmate",
    date:        "Sep 2021",
    image:       playmateImage,
    icon:        playmateIcon,
    link:        "https://playmate.vercel.app/",
    gitLink:     "https://github.com/Rushil10/playmate-frontend-test",
    description: "Platform to create, find, and join sports events near you. Bridges the gap for small groups needing extra players.",
    tags:        ["React", "MongoDB", "Firebase", "Redux", "Express"],
  },
  {
    title:       "Directmart",
    date:        "May 2021",
    image:       directmartImage,
    icon:        directmartIcon,
    link:        "https://play.google.com/store/apps/details?id=com.localApp",
    gitLink:     "https://github.com/Rushil10/DirectMart",
    description: "Connects small home businesses to local consumers. Sellers list products, consumers order and receive delivery from nearby sellers.",
    tags:        ["React Native", "MySQL", "Firebase", "Express"],
  },
  {
    title:       "Masters Application Tracker",
    date:        "Apr 2022",
    image:       trackerImage,
    icon:        trackerIcon,
    link:        "https://play.google.com/store/apps/details?id=com.universitytracker",
    gitLink:     "https://github.com/Rushil10/Masters-Application-Tracker",
    description: "Track grad school applications, costs, and statuses. Compare your profile against other applicants' data.",
    tags:        ["React Native", "Redux", "MongoDB", "Express", "Firebase"],
  },
  {
    title:       "Animated Sports Deck",
    date:        "Sep 2022",
    image:       deckImage,
    icon:        deckIcon,
    gitLink:     "https://github.com/Rushil10/Playing-Cards-Animations-React-Native",
    description: "Tinder-style swipeable card deck with sports icons. Includes falling card animation on load and automatic deck reset.",
    tags:        ["React Native", "Animations"],
  },
  {
    title:       "Movie Recommendation System",
    date:        "Mar 2021",
    image:       movieImage,
    icon:        movieIcon,
    gitLink:     "https://github.com/Rushil10/MovieRecommendation-System-in-Tkinter",
    description: "Desktop app that recommends movies by detecting your live mood via webcam. Genre-based browsing with a clean Tkinter UI.",
    tags:        ["Python", "Tkinter", "OpenCV", "TensorFlow", "MySQL"],
  },
];
