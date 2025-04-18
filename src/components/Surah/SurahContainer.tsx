import { useState, useEffect } from "react";
import SurahList from "./SurahList";
import type { Surah } from "../../types/surah";

function SurahContainer () {
  const [surahs, setSurah] = useState<Surah[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    const fetchSurahs = async () => {
      try {
        const response = await fetch("https://equran.id/api/v2/surat")
        if(!response.ok) {
          throw new Error("Failed to fetch surahs");
        }
        const data = await response.json();
        setSurah(data.data);
        setIsLoading(false);
      } catch (err) {
        setErr(err instanceof Error ? err.message : "Unknown error");
        setIsLoading(false);
      }
    }

    fetchSurahs()
  }, []);
  if (isLoading) {
    return <p className="pt-5 font-semibold text-center text-light">Loading...</p>;
  }

  if (err) {
    return <p className="p-5 text-center text-red-500">{err}</p>;
  }

  return <SurahList surahs={surahs} />;
}

export default SurahContainer