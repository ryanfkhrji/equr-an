type VerseProps = {
  verse: string;
  surah: string;
  icon: string
}

function Verse ({verse, surah, icon}: VerseProps){
  return (
    <div className="bg-[url('/src/assets/VerseBackgroundImage.png')] p-4 rounded-3xl bg-cover bg-no-repeat text-left min-h-[155px] flex flex-col justify-between gap-2">
      <div className="flex flex-col gap-y-2">
        <p className="text-xs text-light flex gap-x-1 md:text-base">
          <img src={icon} alt="icon-qur'an" />
          Your daily verse
        </p>
        <p className="font-semibold text-sm text-light md:text-lg">{verse}</p>
      </div>
      <p className="font-light text-xs text-light md:text-base">{surah}</p>
    </div>
  );
}

export default Verse