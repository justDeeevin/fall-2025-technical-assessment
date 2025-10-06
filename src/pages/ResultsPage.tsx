import { useNavigate, useSearchParams } from "react-router-dom";
import Arrow from "../components/Arrow";
import SearchBar from "../components/SearchBar";
import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import ProfessorCard from "../components/ProfessorCard";

type Professor = {
  name: string;
  slug: string;
  type: TeacherType;
  courses: string[];
  average_rating: number;
};

type Course = {
  department: string;
  course_number: number;
  title: string;
  description: string;
  credits: number;
  average_gpa?: number;
  professors: string[];
};

const PLANET_TERP_URL = "https://planetterp.com/api/v1";

type TeacherType = "ta" | "professor";

export default function ResultsPage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") ?? undefined;

  const [error, setError] = useState<string | undefined>();
  const [loading, setLoading] = useState(false);

  const [professor, setProfessor] = useState<Professor | undefined>();
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    async function fetchProfessor() {
      if (!query) {
        setProfessor(undefined);
        return;
      }
      setLoading(true);
      try {
        const res = await axios.get<Professor>(
          `${PLANET_TERP_URL}/professor?name=${query}`,
        );
        setProfessor(res.data);
        fetchCourses(res.data.courses);
        setError(undefined);
      } catch (e) {
        if (e instanceof AxiosError) {
          setError(e.response?.data.error ?? "failed to fetch data");
        } else {
          setError("Failed to fetch data");
        }
      } finally {
        setLoading(false);
      }
    }

    async function fetchCourses(names: string[]) {
      let courses: Course[] = [];
      for (const name of names) {
        const res = await axios.get<Course>(
          `${PLANET_TERP_URL}/course?name=${name}`,
        );
        courses.push(res.data);
      }
      setCourses(courses);
    }

    fetchProfessor();
  }, [query]);

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
            initialValue={query}
            onSubmit={(q) => {
              setSearchParams({ q: q ?? "" });
            }}
          />
          <h1 className="self-start text-[#39302B] text-[24px] font-bold lg:mt-[69.47px] mt-10 mb-3">
            Search Results
          </h1>
          <div>
            {loading ? (
              <p className="text-black text-xl">loading...</p>
            ) : error ? (
              <p className="text-black text-2xl">{error}</p>
            ) : professor ? (
              <ProfessorCard
                name={professor.name}
                rating={professor.average_rating}
                classes={Object.fromEntries(
                  courses.map((c) => [
                    c.department + c.course_number,
                    c.average_gpa,
                  ]),
                )}
              />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
