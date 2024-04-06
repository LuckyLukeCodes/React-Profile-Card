import CardButton from "./CardButton";

const CardDetails = ({ name, status, btnColor, followers, textColor }) => {
  return (
    <div className="flex h-full w-full flex-col items-end justify-center overflow-hidden">
      <div className="flex w-full shrink-0 flex-col items-center justify-center gap-2 truncate py-4">
        <span className={`text-sm font-semibold ${textColor}`}>{status}</span>
        <span className="text-xl font-semibold">{name}</span>
        <span className="text-sm text-slate-500">{followers} Followers</span>
      </div>
      <div className="flex w-full items-center justify-center gap-2 transition-all duration-300 ">
        <CardButton text="Follow" btnColor={btnColor} />
        <CardButton text="Message" btnColor={btnColor} />
      </div>
    </div>
  );
};

export default CardDetails;
