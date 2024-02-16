import React, { useEffect, useState } from "react";
import "./productpage.css";
import { Link, useParams } from "react-router-dom";
import logo from "/images/logo.svg"

import data from "../../data.json";
export default function productpage() {
  window.scroll(0, 0);
  const { shortname } = useParams();
  const [mainproduct, setmainproduct] = useState([]);
  const [showphoneNumber, setshowphoneNumber] = useState(false);

  useEffect(() => {
    const mainproductfilter = data.filter(
      (product) => product.shortname === shortname
    );
    setmainproduct(mainproductfilter);
  }, []);

  return (
    <>
      <header className="fixed w-full bg-white shadow-headerShadow">
        <div
          className="mx-auto flex items-center max-w-[1440px] px-4 h-16"
          dir="rtl"
        >
          <div className="flex justify-between items-center w-full h-12 relative">
            <Link to="/" className="w-fit flex items-center">
              <figure className="flex-none w-12 h-12 cursor-pointer me-2">
                <img className="w-full" src={logo} alt="" />
              </figure>
            </Link>
            <div className="hidden w-[1.5px] h-6 mx-2 bg-[rgba(0,0,0,.12)]"></div>
            <div className="flex-none flex items-center">
              <div className="max-lg:hidden flex-none flex gap-2 h-10 rounded px-4 hover:bg-[#0000000A] transition-all duration-300 items-center IRANSansWeb_Medium text-xs text-[rgba(0,0,0,.56)] hover:text-black cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
                <span>دیوار من</span>
              </div>
              <div className="max-lg:hidden flex-none flex gap-2 h-10 rounded px-4 ms-2 hover:bg-[#0000000A] transition-all duration-300 items-center IRANSansWeb_Medium text-xs text-[rgba(0,0,0,.56)] hover:text-black cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                  />
                </svg>
                <span>چت</span>
              </div>
              <div className="max-lg:hidden flex-none flex h-10 rounded px-4 ms-2 hover:bg-[#0000000A] transition-all duration-300 items-center IRANSansWeb_Medium text-xs text-[rgba(0,0,0,.56)] hover:text-black cursor-pointer">
                پشتیبانی
              </div>
              <Link
                to="/newproduct"
                className="flex-none flex h-10 rounded px-4 ms-4 hover:bg-[#be3737] transition-all duration-300 items-center bg-[#a62626] text-white IRANSansWeb_Medium text-sm cursor-pointer"
              >
                ثبت آگهی
              </Link>
            </div>
          </div>
        </div>
      </header>

      <section className="flex max-lg:flex-col max-lg:items-center justify-center gap-5 lg:gap-[84px] px-4 py-[150px]" dir="rtl">
        <div className="sm:w-[420px] h-screen px-2">
          <div className="IRANSansWeb_Medium text-2xl leading-[1.5]">
            {mainproduct[0]?.title}
          </div>
          <div className="IRANSansWeb mt-2 mb-4 text-[#0000008F] leading-[2] h-8"></div>
          <hr />
          <div className="flex justify-between py-2 cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="text-[#0000008F]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                  />
                </svg>
              </div>
              <div className="IRANSansWeb">زنگ خطرهای قبل از معامله</div>
            </div>
            <div className="flex justify-end items-center w-8 h-8 text-[#0000008F]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </div>
          </div>
          <hr className="h-1" />
          <div className="flex justify-between my-4">
            <div className="IRANSansWeb flex gap-2 text-base">
              <button
                onClick={() => setshowphoneNumber((prev) => !prev)}
                className={`text-white ${!showphoneNumber ? "bg-[#A62626]" : "bg-[#be5c5c]"
                  } hover:bg-opacity-90 transition-all duration-300 h-10 px-2 whitespace-nowrap sm:px-4 rounded flex items-center cursor-pointer`}
              >
                اطلاعات تماس
              </button>
              <button
                className="h-10 px-4 max-sm:px-8 flex justify-center rounded text-[#0000008F] items-center sm:w-[125px] cursor-pointer hover:bg-[rgba(0,0,0,.04)] hover:text-black transition-all duration-300"
                style={{ border: "1px solid rgba(0,0,0,.48)" }}
              >
                چت
              </button>
            </div>
            <div className="flex items-center">
              <div className="flex items-center justify-center text-[#0000008F] w-10 h-10 cursor-pointer hover:bg-zinc-100 hover:text-black transition-all duration-300 rounded-full">
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
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                  />
                </svg>
              </div>
              <div className="flex items-center justify-center text-[#0000008F] w-10 h-10 cursor-pointer hover:bg-zinc-100 hover:text-black transition-all duration-300 rounded-full">
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
                    d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <hr />
            {showphoneNumber && mainproduct[0]?.phone ? (
              <div className="flex justify-between IRANSansWeb py-2 h-12 ">
                <div className="text-black leading-[2]">تماس</div>
                <div className="leading-[2] text-red-800 ">
                  {mainproduct[0]?.phone}
                </div>
              </div>
            ) : (
              <></>
            )}
            <hr />
            {mainproduct[0]?.function ? (
              <div className="flex justify-between IRANSansWeb py-2 h-12">
                <div className="text-[#0000008F] leading-[2]">کارکرد</div>
                <div className="leading-[2]">
                  {mainproduct[0]?.function.toLocaleString()}
                </div>
              </div>
            ) : (
              <></>
            )}
            <hr />
            {mainproduct[0]?.condition ? (
              <div className="flex justify-between IRANSansWeb py-2 h-12">
                <div className="text-[#0000008F] leading-[2]">وضعیت</div>
                <div className="leading-[2]">{mainproduct[0]?.condition}</div>
              </div>
            ) : (
              <></>
            )}
            <hr />
            {mainproduct[0]?.meterage > 0 ? (
              <div className="flex justify-between IRANSansWeb py-2 h-12">
                <div className="text-[#0000008F] leading-[2]">متراژ</div>
                <div className="leading-[2]">
                  {mainproduct[0]?.meterage} متر
                </div>
              </div>
            ) : (
              <></>
            )}
            <hr />
            {mainproduct[0]?.price ? (
              <div className="flex justify-between IRANSansWeb py-2 h-12">
                <div className="text-[#0000008F] leading-[2]">قیمت</div>
                <div className="leading-[2]">
                  {mainproduct[0]?.price.toLocaleString()} تومان
                </div>
              </div>
            ) : (
              <></>
            )}
            <hr />
          </div>
          <div className="text-lg IRANSansWeb mt-6 leading-[1.5]">توضیحات</div>
          <p className="leading-[2] IRANSansWeb whitespace-pre-line break-words mt-2">
            {mainproduct[0]?.description}
          </p>
        </div>
        <div className="sm:w-[504px] px-2">
          <img className="w-full object-fill" src={mainproduct[0]?.img} />
          <textarea
            className="mt-4 resize-none border border-[rgba(0,0,0,.24)] py-2 px-4 rounded w-full h-[120px] outline-none IRANSansWeb"
            placeholder="یادداشت شما..."
          ></textarea>
          <span className="mt-1 IRANSansWeb text-xs text-[#0000008F]">
            یادداشت تنها برای شما قابل دیدن است و پس از حذف آگهی، پاک خواهد شد.
          </span>
        </div>
      </section>
    </>
  );
}
