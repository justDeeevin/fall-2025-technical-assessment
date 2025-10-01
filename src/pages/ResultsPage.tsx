import { useNavigate, useSearchParams } from "react-router-dom";
import Arrow from "../components/Arrow";
import SearchBar from "../components/SearchBar";

export default function ResultsPage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      <div
        className="absolute md:top-[102px] top-10 lg:left-[112px] left-10 flex flex-row gap-[20px] cursor-pointer"
        onClick={() => navigate("/")}
      >
        <Arrow rotation="rotate-90" />
        <h4 className="text-[#6e6e6e] text-[20.25px]">Return</h4>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center w-fit mt-[88px]">
          <SearchBar
            initialValue={searchParams.get("q") ?? undefined}
            onSubmit={(q) => {
              setSearchParams({ q: q ?? "" });
            }}
          />
          <h1 className="self-start text-[#39302B] text-[24px] font-bold lg:mt-[69.47px] mt-10">
            Search Results
          </h1>
        </div>
      </div>
    </>
  );
}
