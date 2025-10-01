type Props = {
  open: boolean;
};

export default function Arrow({ open }: Props) {
  return (
    <div className={(open ? "" : "rotate-[-90deg] ") + "transition"}>
      <svg
        width="18"
        height="11"
        viewBox="0 0 18 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 1.845L8.685 9.155L1.37 1.845"
          stroke="black"
          strokeWidth="2.25"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
