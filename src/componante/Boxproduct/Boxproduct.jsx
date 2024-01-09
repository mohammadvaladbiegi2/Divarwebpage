import React, { useState } from "react";
import "./Boxproduct.css";
import { Link } from "react-router-dom";
import second from "../../../public/images/41d9d78b-386c-4c5e-9e34-13f5160b7a07.jpg";
export default function Boxproduct({
  title,
  price,
  condition,
  CREATED_AT,
  img,
  shortname,
}) {
  const [loader, setloader] = useState(false);
  return (
    <Link
      to={`/Divarwebpage/product/${shortname}`}
      className="h-[168px] cursor-pointer"
    >
      <div
        className="flex w-[364px] rounded h-full p-4"
        style={{
          boxShadow: "inset 0 0 0 1px rgba(0,0,0,.08), inset 0 0 0 1px #fff",
        }}
      >
        <div className="w-[172px]">
          <div className="IRANSansWeb_Medium text-base leading-7 mb-2 h-14 overflow-hidden">
            {title}
          </div>
          <div className="IRANSansWeb flex flex-col text-[#0000008f]">
            <span className="text-sm leading-6 h-6 truncate">{condition}</span>
            <span className="text-sm leading-6 h-6 truncate">
              {price === 0 || price === "توافقی"
                ? ""
                : `${price.toLocaleString("fa-IR")} تومان`}
            </span>
            <span className="text-xs leading-6 h-6 truncate">
              در تاریخ {CREATED_AT}
            </span>
          </div>
        </div>
        <div className="flex items-end pe-1 text-[rgba(0,0,0,.56)]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
            />
          </svg>
        </div>
        <div className="flex-none w-[136px] h-[136px] card__placeholder">
          <img className="w-full h-full object-cover" src={img} />
        </div>
      </div>
    </Link>
  );
}
