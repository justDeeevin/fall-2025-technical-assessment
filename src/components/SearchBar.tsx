import { useState } from "react";

type Props = {
  onSubmit?: (query?: string) => void;
  initialValue?: string;
};

export default function SearchBar({ onSubmit, initialValue }: Props) {
  const [query, setQuery] = useState<string | undefined>(initialValue);

  return (
    <div className="flex flex-row mb-[83.12px]">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter professor name..."
        className="placeholder:text-[#8d8d8d] text-black text-[20.25px] rounded-l-[11.25px] border-[#d4d4d4] border-[1.13px] bg-white py-[13px] pl-[32.63px] w-[754.93px]"
        onKeyDown={(e) => {
          if (e.key === "Enter") onSubmit?.(query);
        }}
      />
      <button
        className="rounded-r-[11.25px] rounded-l-[0] bg-[#39302B] py-0 px-[19.13px]"
        onClick={() => onSubmit?.(query)}
      >
        <img src="/search.png" alt="search icon" className="w-[33.75px]" />
      </button>
    </div>
  );
}
