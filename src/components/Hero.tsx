import Profile from "./Profile";
import Avatar from "../assets/Photo.png";
import Verse from "./Verse";
import Icon from "../assets/logo.png";

function Hero() {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 bg-[url('/src/assets/HeroBackgroundImage.png')] bg-cover bg-no-repeat h-60 w-full bg-center rounded-b-3xl"></div>
      <div className="relative z-10 px-5 pt-8 flex-col gap-8 flex">
        <Profile greeting="Good Evening" name="John Doe" avatar={Avatar} />
        <Verse icon={Icon} verse="“He said: ‘Therein you shall live, and therein you shall die, and from it you shall be brought out (i.e. resurrected).’”" surah="Al-A’raaf (7:25)" />
      </div>
    </div>
  );
}

export default Hero;
