type Props = {
  fill?: number;
};

export default function Star({ fill = 0 }: Props) {
  const gradient = fill !== 0 && fill !== 1;

  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.7244 1.58203C11.8741 1.12137 12.5259 1.12138 12.6756 1.58203L14.868 8.32812C15.0688 8.94616 15.6449 9.36426 16.2947 9.36426H23.3885C23.8726 9.36452 24.0741 9.98486 23.6824 10.2695L17.9432 14.4385C17.4174 14.8204 17.1974 15.4982 17.3983 16.1162L19.5906 22.8623C19.7403 23.3229 19.2129 23.7062 18.8211 23.4219L13.0818 19.252C12.5561 18.87 11.8439 18.87 11.3182 19.252L5.57892 23.4219C5.18709 23.7062 4.65975 23.3228 4.80939 22.8623L7.00177 16.1162C7.20258 15.4982 6.98258 14.8204 6.45685 14.4385L0.71759 10.2695C0.325961 9.98486 0.527444 9.36452 1.01154 9.36426H8.10529C8.75512 9.36426 9.33123 8.94616 9.53204 8.32812L11.7244 1.58203Z"
        fill={
          gradient
            ? "url(#paint0_linear_1_27)"
            : fill === 1
              ? "#FFCC00"
              : "rgba(255, 255, 255, 0)"
        }
        stroke="black"
      />
      {gradient && (
        <defs>
          <linearGradient
            id="paint0_linear_1_27"
            x1="-2.79999"
            y1="13.5"
            x2="27.2"
            y2="13.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={`${fill}`} stopColor="#FFCC00" />
            <stop offset={`${fill + 0.01}`} stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      )}
    </svg>
  );
}
