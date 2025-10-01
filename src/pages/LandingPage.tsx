import { useState } from "react";
import ProfessorCard from "../components/ProfessorCard";

export default function LandingPage() {
  const [query, setQuery] = useState<string | undefined>(undefined);

  return (
    <>
      <div className="bg-[url(/landing-bg.png)] bg-cover bg-[center_-255px] h-[445.53px] pl-[162px] pt-[105.76px] pb-[132.53px]">
        <div className="max-w-[555px]">
          <h1 className=" mb-[34.24px] text-[54px] font-semibold">
            Find My Professor
          </h1>
          <p className="text-[22.5px]">
            Want to know more about the professors here at UMD? This is the
            perfect place to learn a bit about the courses they teach and their
            grade distributions.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center w-fit">
          <h2 className="mt-[69.47px] text-black text-[36px] font-bold mb-[33px]">
            Enter a professor to start
          </h2>
          <div className="flex flex-row mb-[83.12px]">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter professor name..."
              className="placeholder:text-[#8d8d8d] text-black text-[20.25px] rounded-l-[11.25px] border-[#d4d4d4] border-[1.13px] bg-white py-[13px] pl-[32.63px] w-[754.93px]"
            />
            <button
              className="rounded-r-[11.25px] rounded-l-[0] bg-[#39302B] py-0 px-[19.13px]"
              onClick={() => (window.location.href = `/results?q=${query}`)}
            >
              <img
                src="/search.png"
                alt="search icon"
                className="w-[33.75px]"
              />
            </button>
          </div>
          <h3 className="text-[#39302B] text-[22.5px] font-bold self-start">
            Recently Searched
          </h3>
          <div className="flex flex-row gap-[46px]">
            {[1, 2, 3].map((i) => (
              <ProfessorCard
                name="Jane Middle Doe"
                rating={3.5}
                classes={{ "CMSC 132": "A+", "ENGL 101": "B+" }}
                key={i}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
