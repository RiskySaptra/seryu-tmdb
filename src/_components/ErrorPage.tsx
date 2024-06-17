import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col justify-center gap-5 items-center h-screen">
      <h1 className=" font-bold text-[50px] sm:text-[70px]">Oops!</h1>
      <p className="text-gray-500 font-bold text-[20px] sm:text-[30px]">
        Sorry, an unexpected error has occurred.
      </p>
      <p>
        <i className="font-bold text-[12px] sm:text-[20px] text-red-500">
          {error?.statusText || error?.message}
        </i>
      </p>
      <Link
        to={"/"}
        className="text-[#FFFFFF] sm:text-[20px] text-[15px] font-extrabold font-poppins hover:text-[#0EA5E9]"
      >
        Back to Homepage
      </Link>
    </div>
  );
}
