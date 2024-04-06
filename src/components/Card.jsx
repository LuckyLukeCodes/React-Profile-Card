const Card = ({ color, name, img, textColor, btnColor, status, followers }) => {
  return (
    <div
      className={`flex h-[300px] cursor-pointer flex-col items-center justify-evenly rounded-3xl bg-gradient-to-t from-white ${color} p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] 
    transition-all duration-500 hover:h-[500px] md:w-[300px] md:flex-row md:gap-6 md:hover:h-[300px] md:hover:w-[550px]`}
    >
      <div className="shrink-0 p-2 ">
        <img
          src={img}
          alt=""
          className="h-[250px] w-[250px] rounded-3xl object-cover shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
        />
      </div>

      <div className="flex h-full w-full flex-col items-end justify-center overflow-hidden">
        <div className="flex w-full flex-col items-center justify-center gap-2 py-4">
          <span className={`text-sm font-semibold ${textColor}`}>{status}</span>
          <span className="text-xl font-semibold">{name}</span>
          <span className="text-sm text-slate-500">{followers} Followers</span>
        </div>
        <div className="flex w-full items-center justify-center gap-2 transition-all duration-300 ">
          <button
            className={`${btnColor} rounded-2xl px-4 py-2 text-slate-100 shadow-md hover:opacity-40`}
          >
            Follow
          </button>
          <button
            className={`${btnColor} rounded-2xl px-4 py-2 text-slate-100 shadow-lg hover:opacity-40`}
          >
            Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
