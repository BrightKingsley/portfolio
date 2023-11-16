export function buttonStyle(
  variant: "filled" | "flat" | "outlined",
  color: "primary" | "body" | "black"
  // ): React.ComponentProps<"div">["className"] {
): React.HtmlHTMLAttributes<HTMLElement>["className"] {
  return `group rounded-md  px-6 py-2 transition-all duration-200 hover:w-[calc(auto+5rem)] ${
    variant === "filled"
      ? `text-white ${
          color === "body"
            ? "bg-body hover:text-body"
            : color === "primary"
            ? "bg-primary hover:text-primary hover:bg-transparent hover:outline hover:outline-1 hover:outline-primary"
            : "bg-black"
        }`
      : variant === "flat"
      ? `${
          color === "body"
            ? "text-body"
            : color === "primary"
            ? "text-primary"
            : "text-black"
        }`
      : `${
          color === "body"
            ? "outline-1 outline-body text-body"
            : color === "primary"
            ? "outline-1 outline-primary text-primary"
            : "outline-1 outline-black text-black"
        }`
  }`;
}
