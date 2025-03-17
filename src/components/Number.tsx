type NumberProps = {
  number: number;
};

function Number ({number}: NumberProps) {
  return (
    <div className="h-8 w-8 rounded-full bg-accent-light flex flex-col justify-center items-center text-light">
      {number}
    </div>
  )
}

export default Number