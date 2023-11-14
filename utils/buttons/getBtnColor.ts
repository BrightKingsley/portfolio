export default function getBtnColor(color: ButtonProps["color"]): string {
  switch (color) {
    case "purple":
      return "bg-main-1";
    case "lemon":
      return "bg-";
    case "black":
      return "bg-black";
    case "transparent":
      return "bg-transparent";
    default:
      return "bg-main-1";
  }
}
