import React, { useEffect, useState } from "react";
import "./homepage.css";
import Boxproduct from "../../componante/Boxproduct/Boxproduct";
import logo from "../../../public/images/logo.svg";
import { Link } from "react-router-dom";

import data from "../../data.json";
export default function homepage() {
  window.scroll(0, 0);
  const [allproduct, setallproduct] = useState(data);
  const [showproduct, setshowproduct] = useState(data);
  const [SearchValue, setSearchValue] = useState("");
  const [stuts, setstutus] = useState("");
  const [statusCity, setStatusCity] = useState("");

  useEffect(() => {
    const filterCity = allproduct.filter(
      (product) => product.city === statusCity
    );
    if (statusCity === "-1" || statusCity.length === 0) {
      setshowproduct(allproduct);
    } else {
      setshowproduct(filterCity);
    }

    setSearchValue("");
  }, [statusCity]);
  useEffect(() => {
    const categoryfilter = allproduct.filter(
      (product) => product.category === stuts
    );

    if (stuts === "-1" || stuts.length === 0 || stuts === "all") {
      setshowproduct(allproduct);
    } else {
      setshowproduct(categoryfilter);
    }

    setSearchValue("");
  }, [stuts]);

  useEffect(() => {
    const filterproduct = allproduct.filter((product) =>
      product.title.toLowerCase().includes(SearchValue)
    );
    if (!SearchValue.length) {
      setshowproduct(allproduct);
    } else {
      setshowproduct(filterproduct);
    }
  }, [SearchValue]);

  return (
    <div>
      <header className="fixed w-full bg-white shadow-headerShadow">
        <div
          className="mx-auto flex items-center max-w-[1440px] px-4 h-16"
          dir="rtl"
        >
          <div className="flex justify-between items-center w-full h-12 relative">
            <div className="w-full flex items-center">
              <figure className="flex-none w-12 h-12 cursor-pointer me-2">
                <img className="w-full" src={logo} alt="" />
              </figure>
              <div className="w-[1.5px] h-6 mx-2 bg-[rgba(0,0,0,.12)]"></div>
              <div className="flex-none flex gap-2 h-10 rounded px-1 lg:px-3 hover:bg-[#0000000A] transition-all duration-300 items-center IRANSansWeb_Medium text-sm text-[rgba(0,0,0,.56)] hover:text-black cursor-pointer">
                <select
                  id="selectBox"
                  className="outline-none rounded lg:px-2 IRANSansWeb_Medium text-sm cursor-pointer bg-transparent"
                  onChange={(e) => setStatusCity(e.target.value)}
                  onClick={(e) => setStatusCity(e.target.value)}
                  defaultValue={statusCity}
                >
                  <option value="-1">شهر ها</option>
                  <option value="sanandaj">سنندج</option>
                  <option value="Kermanshah">کرمانشاه</option>
                  <option value="tehran">تهران</option>
                </select>
              </div>
              <div className="flex-none flex h-10 rounded px-2 lg:ms-4 hover:bg-[#0000000A] transition-all duration-300 items-center text-[rgba(0,0,0,.56)] hover:text-black cursor-pointer">
                <select
                  onChange={(event) => setstutus(event.target.value)}
                  onClick={(e) => setstutus(e.target.value)}
                  defaultValue={stuts}
                  className="outline-none rounded px-2 w-[70px] lg:w-24 IRANSansWeb_Medium text-sm cursor-pointer bg-transparent"
                >
                  <option value="-1"> دسته ها</option>
                  <option value="home">املاک</option>
                  <option value="vehicle">وسایل نقلیه</option>
                  <option value="Digital">کالای دیجیتال</option>
                  <option value="kitchen">خانه و آشپزخانه</option>
                  <option value="services">خدمات</option>
                  <option value="personalitems">وسایل شخصی</option>
                  <option value="entertainment">سرگرمی و فراغت</option>
                  <option value="social">اجتماعی</option>
                  <option value="industrialequipment">تجهیزات و صنعتی</option>
                </select>
              </div>
              <div className="max-sm:hidden flex gap-2 w-full min-[1220px]:w-[480px] h-10 ms-3 bg-[#F5F5F5] rounded px-4 transition-all duration-300 items-center IRANSansWeb text-sm text-[rgba(0,0,0,.87)] hover:text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 text-[#ADADAD] hover:text-black transition-all duration-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
                <input
                  className="bg-[#F5F5F5] w-full placeholder:text-sm placeholder:text-[#ADADAD] outline-none"
                  placeholder="جستجو در همهٔ آگهی‌ها"
                  type="text"
                  value={SearchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
              </div>
            </div>
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
                to="/Divarwebpage/newproduct"
                className="flex-none flex h-10 rounded px-4 lg:ms-4 hover:bg-[#be3737] transition-all duration-300 items-center bg-[#a62626] text-white IRANSansWeb_Medium text-sm cursor-pointer"
              >
                ثبت آگهی
              </Link>
            </div>
          </div>
        </div>
      </header>
      <section className="pt-16 flex  mx-auto" dir="rtl">
        <div className="flex max-w-[1440px] m-auto">
          {" "}
          {/* max-w */}
          <div className="fixed top-16 w-[280px] h-screen overflow-y-auto hiddenScrollbar pt-8 px-4 max-lg:hidden">
            <div className="max-lg:hidden">
              <div>
                <div>
                  <div className="max-lg:hidden text-xs IRANSansWeb py-2 leading-[2]">
                    دسته‌ها
                  </div>
                  <div
                    onClick={() => setstutus("all")}
                    className="flex gap-2 transition-all duration-300 items-center IRANSansWeb_Medium text-sm text-[#0000008f] hover:text-black cursor-pointer py-2"
                  >
                    <span className="leading-6">همه دسته ها</span>
                  </div>
                  <div
                    onClick={() => setstutus("home")}
                    className="flex gap-2 transition-all duration-300 items-center IRANSansWeb_Medium text-sm text-[#0000008f] hover:text-black cursor-pointer py-2"
                  >
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
                        d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
                      />
                    </svg>
                    <span className="leading-6">املاک</span>
                  </div>
                  <div
                    onClick={() => setstutus("vehicle")}
                    className="flex gap-2 transition-all duration-300 items-center IRANSansWeb_Medium text-sm text-[#0000008f] hover:text-black cursor-pointer py-2"
                  >
                    <svg
                      width="20px"
                      height="20px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M3 8L5.72187 10.2682C5.90158 10.418 6.12811 10.5 6.36205 10.5H17.6379C17.8719 10.5 18.0984 10.418 18.2781 10.2682L21 8M6.5 14H6.51M17.5 14H17.51M8.16065 4.5H15.8394C16.5571 4.5 17.2198 4.88457 17.5758 5.50772L20.473 10.5777C20.8183 11.1821 21 11.8661 21 12.5623V18.5C21 19.0523 20.5523 19.5 20 19.5H19C18.4477 19.5 18 19.0523 18 18.5V17.5H6V18.5C6 19.0523 5.55228 19.5 5 19.5H4C3.44772 19.5 3 19.0523 3 18.5V12.5623C3 11.8661 3.18166 11.1821 3.52703 10.5777L6.42416 5.50772C6.78024 4.88457 7.44293 4.5 8.16065 4.5ZM7 14C7 14.2761 6.77614 14.5 6.5 14.5C6.22386 14.5 6 14.2761 6 14C6 13.7239 6.22386 13.5 6.5 13.5C6.77614 13.5 7 13.7239 7 14ZM18 14C18 14.2761 17.7761 14.5 17.5 14.5C17.2239 14.5 17 14.2761 17 14C17 13.7239 17.2239 13.5 17.5 13.5C17.7761 13.5 18 13.7239 18 14Z"
                          stroke="currentColor"
                          strokeWidth="1.9200000000000004"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>
                    <span className="leading-6">وسایل نقلیه</span>
                  </div>
                  <div
                    onClick={() => setstutus("Digital")}
                    className="flex gap-2 transition-all duration-300 items-center IRANSansWeb_Medium text-sm text-[#0000008f] hover:text-black cursor-pointer py-2"
                  >
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
                        d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                      />
                    </svg>
                    <span className="leading-6">کالای دیجیتال</span>
                  </div>
                  <div
                    onClick={() => setstutus("kitchen")}
                    className="flex gap-2 transition-all duration-300 items-center IRANSansWeb_Medium text-sm text-[#0000008f] hover:text-black cursor-pointer py-2"
                  >
                    <svg
                      width="20px"
                      height="20px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M14.6459 3H9.35404C8.53624 3 7.80082 3.4979 7.49709 4.25721L5.09707 10.2572C4.57157 11.5709 5.53909 13 6.95402 13H17.0459C18.4608 13 19.4283 11.571 18.9028 10.2572L16.5029 4.25723C16.1991 3.49791 15.4637 3 14.6459 3Z"
                          stroke="currentColor"
                          strokeWidth="1.9200000000000004"
                          strokeLinecap="round"
                        ></path>{" "}
                        <path
                          d="M8 21H16"
                          stroke="currentColor"
                          strokeWidth="1.9200000000000004"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>{" "}
                        <path
                          d="M12 21V13.5"
                          stroke="currentColor"
                          strokeWidth="1.9200000000000004"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>
                    <span className="leading-6">خانه و آشپزخانه</span>
                  </div>
                  <div
                    onClick={() => setstutus("services")}
                    className="flex gap-2 transition-all duration-300 items-center IRANSansWeb_Medium text-sm text-[#0000008f] hover:text-black cursor-pointer py-2"
                  >
                    <svg
                      fill="currentColor"
                      width="20px"
                      height="20px"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          fillRule="evenodd"
                          d="M14,3 L14,6 L12,6 L12,3 L10,3 L10,7 L8,7 L8,3 L6,3 L6,9 L18,9 L18,3 L14,3 Z M4,9 L4,1 L20,1 L20,9 L20.0000198,10.0000198 C20,11.5000033 20,11.5000033 19.9999835,12.9942495 C20.0087372,14.516482 19.1594249,14.9983131 16.7913579,15.7079171 C15.4033862,16.1238306 15,16.3523073 15,16.5 C15,17.2676064 15.0702864,17.7830399 15.2201425,18.3824644 C15.1911605,18.2665365 15.361966,18.9269843 15.3996774,19.1029709 C15.4660007,19.4124795 15.5,19.6941881 15.5,20 C15.5,21.6608656 13.9376765,23 12,23 C10.0623234,23 8.5,21.6608658 8.5,20 C8.5,19.6941881 8.53399931,19.4124795 8.60032259,19.1029709 C8.638034,18.9269843 8.80883947,18.2665365 8.7798575,18.3824644 C8.92971361,17.7830399 9,17.2676064 9,16.5 C9,16.3513074 8.5977122,16.1233443 7.21265211,15.7078263 C4.8477122,14.9983443 4,14.5179741 4,13 L4,9 Z M6,11 L6,13 C6,13.1486926 6.4022878,13.3766557 7.78734789,13.7921737 C10.1522878,14.5016557 11,14.9820259 11,16.5 C11,17.4407269 10.9077864,18.1169601 10.7201425,18.8675356 C10.7380355,18.7959635 10.5833202,19.3941962 10.5559274,19.5220291 C10.5173987,19.7018297 10.5,19.8459905 10.5,20 C10.5,20.4819917 11.1043431,21 12,21 C12.8956568,21 13.5,20.4819915 13.5,20 C13.5,19.8459905 13.4826013,19.7018297 13.4440726,19.5220291 C13.4166798,19.3941962 13.2619645,18.7959635 13.2798575,18.8675356 C13.0922136,18.1169601 13,17.4407269 13,16.5 C13,14.9826981 13.8492981,14.5016584 16.2129647,13.7933724 L16.2172679,13.7920829 C17.6004668,13.3775999 18.0008487,13.1504556 18,13 C18,11.9351632 18,11.626243 18.0000071,11 L6,11 Z"
                        ></path>{" "}
                      </g>
                    </svg>
                    <span className="leading-6">خدمات</span>
                  </div>
                  <div
                    onClick={() => setstutus("personalitems")}
                    className="flex gap-2 transition-all duration-300 items-center IRANSansWeb_Medium text-sm text-[#0000008f] hover:text-black cursor-pointer py-2"
                  >
                    <svg
                      width="20px"
                      height="20px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracurrentColorerCarrier"
                        stroke-linecurrentcap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_icurrentColoronCarrier">
                        {" "}
                        <path
                          d="M17 6.5L16.6961 5.13228C16.3624 3.63065 16.1955 2.87983 15.6471 2.43992C15.0987 2 14.3296 2 12.7913 2H11.2087C9.67043 2 8.9013 2 8.35289 2.43992C7.80448 2.87983 7.63763 3.63065 7.30394 5.13228L7 6.5"
                          stroke="currentColor"
                          strokeWidth="1.6799999999999997"
                        ></path>{" "}
                        <path
                          d="M17 17.5L16.6961 18.8677C16.3624 20.3694 16.1955 21.1202 15.6471 21.5601C15.0987 22 14.3296 22 12.7913 22H11.2087C9.67043 22 8.9013 22 8.35289 21.5601C7.80448 21.1202 7.63763 20.3694 7.30394 18.8677L7 17.5"
                          stroke="currentColor"
                          strokeWidth="1.6799999999999997"
                        ></path>{" "}
                        <path
                          d="M19.5 12C19.5 16.1421 16.1421 19.5 12 19.5C7.85786 19.5 4.5 16.1421 4.5 12C4.5 7.85786 7.85786 4.5 12 4.5C16.1421 4.5 19.5 7.85786 19.5 12Z"
                          stroke="currentColor"
                          strokeWidth="1.6799999999999997"
                        ></path>{" "}
                        <path
                          d="M12 8.92283V11.9998L14 13.9228"
                          stroke="currentColor"
                          strokeWidth="1.6799999999999997"
                          stroke-linecurrentcap="round"
                          strokeLinejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>
                    <span className="leading-6">وسایل شخصی</span>
                  </div>
                  <div
                    onClick={() => setstutus("entertainment")}
                    className="flex gap-2 transition-all duration-300 items-center IRANSansWeb_Medium text-sm text-[#0000008f] hover:text-black cursor-pointer py-2"
                  >
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
                        d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z"
                      />
                    </svg>
                    <span className="leading-6">سرگرمی و فراغت</span>
                  </div>
                  <div
                    onClick={() => setstutus("social")}
                    className="flex gap-2 transition-all duration-300 items-center IRANSansWeb_Medium text-sm text-[#0000008f] hover:text-black cursor-pointer py-2"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          fillRule="evenodd"
                          d="M3.5 8a5.5 5.5 0 118.596 4.547 9.005 9.005 0 015.9 8.18.75.75 0 01-1.5.045 7.5 7.5 0 00-14.993 0 .75.75 0 01-1.499-.044 9.005 9.005 0 015.9-8.181A5.494 5.494 0 013.5 8zM9 4a4 4 0 100 8 4 4 0 000-8z"
                        ></path>
                        <path d="M17.29 8c-.148 0-.292.01-.434.03a.75.75 0 11-.212-1.484 4.53 4.53 0 013.38 8.097 6.69 6.69 0 013.956 6.107.75.75 0 01-1.5 0 5.193 5.193 0 00-3.696-4.972l-.534-.16v-1.676l.41-.209A3.03 3.03 0 0017.29 8z"></path>
                      </g>
                    </svg>
                    <span className="leading-6">اجتماعی</span>
                  </div>
                  <div
                    onClick={() => setstutus("industrialequipment")}
                    className="flex gap-2 transition-all duration-300 items-center IRANSansWeb_Medium text-sm text-[#0000008f] hover:text-black cursor-pointer py-2"
                  >
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
                        d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
                      />
                    </svg>
                    <span className="leading-6">تجهیزات و صنعتی</span>
                  </div>
                </div>
                <div className="mt-4">
                  <hr />
                </div>
              </div>
              <div className="mt-2 IRANSansWeb">
                <div className="flex flex-wrap">
                  <div className="text-xs p-2 text-[#0000008F] hover:text-black transition-all duration-300 cursor-pointer">
                    دربارهٔ دیوار
                  </div>
                  <div className="text-xs p-2 text-[#0000008F] hover:text-black transition-all duration-300 cursor-pointer">
                    دریافت برنامه
                  </div>
                  <div className="text-xs p-2 text-[#0000008F] hover:text-black transition-all duration-300 cursor-pointer">
                    اتاق خبر
                  </div>
                  <div className="text-xs p-2 text-[#0000008F] hover:text-black transition-all duration-300 cursor-pointer">
                    کسب‌وکارها
                  </div>
                  <div className="text-xs p-2 text-[#0000008F] hover:text-black transition-all duration-300 cursor-pointer">
                    پشتیبانی و قوانین
                  </div>
                </div>
                <div className="flex justify-center gap-1">
                  <div className="w-10 h-10 flex justify-center items-center text-[#0000008F] hover:text-black transition-all duration-300 cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-twitter"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15" />
                    </svg>
                  </div>
                  <div className="w-10 h-10 flex justify-center items-center text-[#0000008F] hover:text-black transition-all duration-300 cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-instagram"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                    </svg>
                  </div>
                  <div className="w-10 h-10 flex justify-center items-center text-[#0000008F] hover:text-black transition-all duration-300 cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-linkedin"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4" />
                    </svg>
                  </div>
                  <div className="w-10 h-10 flex justify-center items-center text-[#0000008F] hover:text-black transition-all duration-300 cursor-pointer">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path d="M12.001 1.594c-9.27-.003-13.913 11.203-7.36 17.758a10.403 10.403 0 0 0 17.76-7.355c0-5.744-4.655-10.401-10.4-10.403zM6.11 6.783c.501-2.598 3.893-3.294 5.376-1.103 1.483 2.19-.422 5.082-3.02 4.582A2.97 2.97 0 0 1 6.11 6.783zm4.322 8.988c-.504 2.597-3.897 3.288-5.377 1.096-1.48-2.192.427-5.08 3.025-4.579a2.97 2.97 0 0 1 2.352 3.483zm1.26-2.405c-1.152-.223-1.462-1.727-.491-2.387.97-.66 2.256.18 2.04 1.334a1.32 1.32 0 0 1-1.548 1.053zm6.198 3.838c-.501 2.598-3.893 3.293-5.376 1.103-1.484-2.191.421-5.082 3.02-4.583a2.97 2.97 0 0 1 2.356 3.48zm-1.967-5.502c-2.598-.501-3.293-3.896-1.102-5.38 2.19-1.483 5.081.422 4.582 3.02a2.97 2.97 0 0 1-3.48 2.36zM13.59 23.264l2.264.61a3.715 3.715 0 0 0 4.543-2.636l.64-2.402a11.383 11.383 0 0 1-7.448 4.428zm7.643-19.665L18.87 2.97a11.376 11.376 0 0 1 4.354 7.62l.65-2.459A3.715 3.715 0 0 0 21.231 3.6zM.672 13.809l-.541 2.04a3.715 3.715 0 0 0 2.636 4.543l2.107.562a11.38 11.38 0 0 1-4.203-7.145zM10.357.702 8.15.126a3.715 3.715 0 0 0-4.547 2.637l-.551 2.082A11.376 11.376 0 0 1 10.358.702z"></path>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:items-end lg:ps-[300px] px-2 lg:pe-4 w-full h-screen mt-8 mb-14">
            <div className="max-lg:hidden text-xs IRANSansWeb text-[rgba(0,0,0,.56)] leading-[1.5rem] pb-2">
              دیوار تهران - نیازمندی‌ های رایگان، آگهی‌های خرید، فروش نو و دست
              دوم و کارکرده، استخدام و خدمات
            </div>
            {/* items */}

            <div className="flex flex-wrap justify-center lg:justify-end gap-4 pt-2">
              {/* a item */}

              {showproduct.length ? (
                [...showproduct]
                  .reverse()
                  .map((product) => (
                    <Boxproduct key={product.id} {...product} />
                  ))
              ) : (
                <div className="w-[1000px] bg-[#be3737] text-white text-center p-4 rounded-lg IRANSansWeb">
                  آگهی مورد نظر یافت نشد
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
