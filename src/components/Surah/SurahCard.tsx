import { Link } from "react-router-dom";
import type { Surah } from "../../types/surah";
import Number from "../Number";

type SurahCardProps = {
  surah: Surah;
};

function SurahCard ({surah}: SurahCardProps){
  return (
    <Link to={`/surah/${surah.nomor}`}>
      <div className="bg-dark rounded-lg p-4 flex gap-3 justify-between">
        <div className="flex text-left gap-x-3">
          <Number number={surah.nomor} />
          <div className="text-light">
            <p className="text-base font-bold pb-1">{surah.namaLatin}</p>
            <p className="text-subtle text-xs md:text-sm">{surah.arti}</p>
            <p className="text-subtle text-xs md:text-sm">
              {surah.tempatTurun} . {surah.jumlahAyat} Ayat
            </p>
          </div>
        </div>
        <p className="text-primary not-hover: font-bold text-2xl">{surah.nama}</p>
      </div>
    </Link>
  );
}

export default SurahCard