import type { Surah } from "../../types/surah";
import ChevronRight from "../../assets/ChevronRightIcon.svg";

type DetailSurahInfoProps = {
  surah: Surah;
};

function DetailSurahInfo({ surah }: DetailSurahInfoProps) {
  return (
    <div className="bg-[url('/src/assets/AyatBackgroundImage.png')] relative bg-cover bg-no-repeat py-5 px-4 rounded-2xl text-light text-left">
      <div className="flex flex-col gap-2 mb-8">
        <p className="text-2xl font-bold">{surah.namaLatin} </p>
        <p className="text-sm font-light">{surah.arti}</p>
        <hr className="opacity-10" />
        <p className="text-sm font-semibold">
          {surah.tempatTurun} • {surah.jumlahAyat} Ayat
        </p>
      </div>
      <div className="absolute bottom-0 left-0 flex items-center justify-between w-full px-3 py-1 bg-accent-light-purple rounded-b-2xl">
        <p>Tentang surah {surah.namaLatin}</p>
        <img src={ChevronRight} alt="Chevron Right" />
      </div>
    </div>
  );
}

export default DetailSurahInfo;
