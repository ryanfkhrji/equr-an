type ButtonProps = {
  text: string;
  onClick?: () => void;
};

function Button({ text, onClick }: ButtonProps) {
  return (
    <button className="px-4 py-2 font-bold rounded-sm bg-accent-light-purple text-light w-fit disabled:bg-subtle disabled:text-light disabled:cursor-not-allowed" onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
