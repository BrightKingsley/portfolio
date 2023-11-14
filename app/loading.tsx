import { Spinner } from "./components";

export default function Loading() {
  return (
    <div className="w-screen h-screen z-50 flex items-center justify-center">
      <Spinner />
    </div>
  );
}
