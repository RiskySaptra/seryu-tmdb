import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col justify-center gap-5 items-center h-screen">
      <h1 className="font-bold text-[70px]">Oops!</h1>
      <p className="font-bold text-[30px]">
        Sorry, an unexpected error has occurred.
      </p>
      <p>
        <i className="font-bold text-[20px] text-gray-500">
          {error?.statusText || error?.message}
        </i>
      </p>
    </div>
  );
}
