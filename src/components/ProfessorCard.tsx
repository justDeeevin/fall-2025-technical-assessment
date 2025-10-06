import { useState } from "react";
import Arrow from "./Arrow";
import Star from "./Star";

type Props = {
  name: string;
  image?: string;
  rating: number;
  classes: { [name: string]: Grade };
  shouldHideIfSmall?: boolean;
};

type Grade =
  | "A+"
  | "A"
  | "A-"
  | "B+"
  | "B"
  | "B-"
  | "C+"
  | "C"
  | "C-"
  | "D+"
  | "D"
  | "D-";

export default function ProfessorCard({
  name,
  image = "/anonymous.jpg",
  rating,
  classes,
  shouldHideIfSmall = false,
}: Props) {
  const [open, setOpen] = useState(false);
  const [className, setClassName] = useState<string>("");
  const stars: number[] = [];

  for (let i = 0; i < 5; i++) {
    if (rating > 1) stars.push(1);
    else if (rating < 0) stars.push(0);
    else stars.push(rating);
    rating--;
  }

  return (
    <div
      className={
        "flex flex-col rounded-[9px] border-[#c5c5c5] border-[1.13px] w-[254px] bg-[#fbfbfb] text-black p-[20px] text-[20.25px] gap-[20px] transition-all overflow-hidden " +
        (open ? "max-h-[215px]" : "max-h-[73px]") +
        " " +
        (shouldHideIfSmall ? "max-md:hidden" : "")
      }
    >
      <div
        onClick={() => setOpen(!open)}
        className="flex flex-row justify-between items-center cursor-pointer"
      >
        <h3>{name}</h3>
        <div>
          <Arrow rotation={open ? "" : "rotate-[-90deg]"} />
        </div>
      </div>
      <div className="flex flex-row items-center justify-between">
        <img
          src={image}
          alt="professor photo"
          className="rounded-[9px] w-[70px] h-[70px]"
        />
        {stars.map((fill, i) => (
          <Star fill={fill} key={i} />
        ))}
      </div>
      <div className="flex flex-row gap-[30px]">
        <select
          className="px-[8px] py-[5px] rounded-[9px] bg-[#fbfbfb] border-[#c5c5c5] border-[1.13px] text-[14px]"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
        >
          {className === "" && (
            <option value="" disabled>
              Select...
            </option>
          )}
          {Object.keys(classes).map((className, i) => (
            <option value={className} key={i}>
              {className}
            </option>
          ))}
        </select>
        {className && (
          <p>
            <span className="text-[24px]">{classes[className]}</span>&nbsp;
            <span className="text-[14px]">avg.</span>
          </p>
        )}
      </div>
    </div>
  );
}
