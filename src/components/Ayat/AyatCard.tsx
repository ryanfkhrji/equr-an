import type { Ayat } from "../../types/surah";
import Number from "../Number";

type AyatCardProps = {
  ayat: Ayat;
};

function AyatCard({ ayat }: AyatCardProps) {
  return (
    <div className="flex flex-col gap-4 p-4 text-left rounded-lg bg-dark text-light">
      <div className="flex justify-between gap-4">
        <Number number={ayat.nomorAyat} />
        <p className="w-full text-2xl font-bold text-right">{ayat.teksArab}</p>
      </div>
      <p className="font-sm text-light">{ayat.teksLatin}</p>
      <p className="font-sm text-subtle ">{ayat.teksIndonesia}</p>
    </div>
  );
}

export default AyatCard;
