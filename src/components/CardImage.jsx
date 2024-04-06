import { PiHandTapLight } from "react-icons/pi";
const CardImage = ({ img }) => {
  return (
    <div className="shrink-0 p-2 ">
      <img
        src={img}
        alt=""
        className="h-[250px] w-[250px] rounded-3xl object-cover shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
      />
    </div>
  );
};

export default CardImage;
