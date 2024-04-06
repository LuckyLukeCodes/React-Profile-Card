import CardDetails from "./CardDetails";
import CardImage from "./CardImage";

const Card = ({ color, name, img, textColor, btnColor, status, followers }) => {
  return (
    <div
      className={`flex h-[300px] cursor-pointer flex-col items-center justify-evenly rounded-3xl bg-gradient-to-t from-white ${color} p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] 
    transition-all duration-500 hover:h-[500px] md:w-[300px] md:flex-row md:gap-6 md:hover:h-[300px] md:hover:w-[550px]`}
    >
      <CardImage img={img} />
      <CardDetails
        name={name}
        textColor={textColor}
        btnColor={btnColor}
        status={status}
        followers={followers}
      />
    </div>
  );
};

export default Card;
