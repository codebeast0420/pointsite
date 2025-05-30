import * as React from "react";

interface SelectFieldProps {
  id: string;
  "aria-label": string;
}

export function SelectField(props: SelectFieldProps) {
  return (
    <div className="relative h-10 rounded-md border border-solid border-zinc-300 border-opacity-90 max-sm:w-full" aria-label="Select field">
      <select
        {...props}
        className="w-full h-full px-4 appearance-none bg-transparent"
        aria-label="Select field"
      >
        <option value="" disabled defaultValue="" />
      </select>
      <svg
        className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M16.9997 9.17019C16.8123 8.98394 16.5589 8.87939 16.2947 8.87939C16.0305 8.87939 15.7771 8.98394 15.5897 9.17019L11.9997 12.7102L8.4597 9.17019C8.27234 8.98394 8.01889 8.87939 7.7547 8.87939C7.49052 8.87939 7.23707 8.98394 7.0497 9.17019C6.95598 9.26315 6.88158 9.37375 6.83081 9.49561C6.78004 9.61747 6.75391 9.74818 6.75391 9.88019C6.75391 10.0122 6.78004 10.1429 6.83081 10.2648C6.88158 10.3866 6.95598 10.4972 7.0497 10.5902L11.2897 14.8302C11.3827 14.9239 11.4933 14.9983 11.6151 15.0491C11.737 15.0998 11.8677 15.126 11.9997 15.126C12.1317 15.126 12.2624 15.0998 12.3843 15.0491C12.5061 14.9983 12.6167 14.9239 12.7097 14.8302L16.9997 10.5902C17.0934 10.4972 17.1678 10.3866 17.2186 10.2648C17.2694 10.1429 17.2955 10.0122 17.2955 9.88019C17.2955 9.74818 17.2694 9.61747 17.2186 9.49561C17.1678 9.37375 17.0934 9.26315 16.9997 9.17019Z"
          fill="black"
        />
      </svg>
    </div>
  );
}
