import ProfessorCard from "../components/ProfessorCard";
import SearchBar from "../components/SearchBar";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-[url(/landing-bg.png)] lg:bg-cover lg:bg-[center_-255px] bg-[-500px_-150px] h-[445.53px] lg:pl-[162px] max-lg:flex max-lg:justify-center pt-[105.76px] pb-[132.53px]">
        <div className="max-w-[555px]">
          <h1 className=" mb-[34.24px] text-[54px] font-semibold text-center">
            Find My Professor
          </h1>
          <p className="text-[22.5px] max-[480px]:text-center">
            Want to know more about the professors here at UMD? This is the
            perfect place to learn a bit about the courses they teach and their
            grade distributions.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center">
          <h2 className="lg:mt-[69.47px] mt-10 text-black md:text-[36px] text-3xl font-bold mb-[33px] text-center">
            Enter a professor to start
          </h2>
          <SearchBar onSubmit={(q) => navigate(`/results?query=${q}`)} />
          <h3 className="text-[#39302B] text-[22.5px] font-bold lg:self-start mb-[33px] lg:mt-[83.12px] mt-10">
            Recently Searched
          </h3>
          <div className="flex md:flex-row flex-col lg:gap-[46px]">
            {[1, 2, 3].map((i) => (
              <ProfessorCard
                name="Jane Middle Doe"
                rating={3.5}
                classes={{ "CMSC 132": "A+", "ENGL 101": "B+" }}
                key={i}
                shouldHideIfSmall={i > 1}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
