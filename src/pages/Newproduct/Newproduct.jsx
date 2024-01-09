import React, { useState } from "react";
import { useFormik } from "formik";

import "./Newproduct.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export default function Newproduct() {
  const [file, setFile] = useState("");

  const changehandel = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  let navigate = useNavigate();
  const form = useFormik({
    initialValues: {
      title: "",
      price: "",
      description: "",
      phone: "",
      category: "",
      desc: "",
      city: "",
      img: "",
      function: "",
      condition: "",
      meterage: "",
    },
    onSubmit: (values, { resetForm }) => {
      toast.error("فعلا امکان اضافه امکان ندارد");
      setTimeout(() => {
        navigate("/Divarwebpage/");
      }, 2000);
      resetForm();
    },
  });

  return (
    <div className="container-form-b">
      <form onSubmit={form.handleSubmit}>
        <div className="flex flex-col gap-7 justify-center p-6 container-form w-[500px] m-8 rounded-2xl shadow-headerShadow">
          <h1 className="text-center IRANSansWeb_Medium mt-4 text-lg">
            اضافه کردن محصول جدید
          </h1>
          <br />
          <div className="flex flex-col gap-2 my-2">
            <label className="IRANSansWeb_Medium" htmlFor="title">
              نام محصول
            </label>
            <input
              className="IRANSansWeb"
              onChange={form.handleChange}
              value={form.values.title}
              type="text"
              name="title"
              placeholder="نام محصول خود را بنویسید"
            />
          </div>
          <hr className="text-slate-800 " />
          <div className="flex flex-col gap-2">
            <label className="IRANSansWeb_Medium" htmlFor="price">
              قیمت محصول
            </label>
            <input
              className="IRANSansWeb"
              onChange={form.handleChange}
              value={form.values.price}
              type="text"
              name="price"
              placeholder="قیمت مورد نظر را بنویسید"
            />
          </div>
          <hr className="text-slate-800 " />

          <div className="flex flex-col gap-2">
            <label className="IRANSansWeb_Medium" htmlFor="description">
              توضیحات محصول
            </label>
            <textarea
              className="resize-none outline-none textAreaScrollBar IRANSansWeb"
              onChange={form.handleChange}
              value={form.values.description}
              name="description"
              placeholder="توضیحات"
              cols="30"
              rows="5"
            ></textarea>
          </div>
          <hr className="text-slate-800 " />

          <div className="flex flex-col gap-2">
            <label className="IRANSansWeb_Medium" htmlFor="phone">
              شماره تماس
            </label>
            <input
              onChange={form.handleChange}
              value={form.values.phone}
              className="w-full IRANSansWeb"
              type="text"
              name="phone"
              placeholder="0910*******"
            />
          </div>
          <hr className="text-slate-800 " />

          <div>
            <select
              className="w-[12rem] outline-none IRANSansWeb_Medium cursor-pointer hover:bg-zinc-100 py-3 rounded transition-all duration-300"
              onChange={form.handleChange}
              value={form.values.category}
              name="category"
              defaultValue="-1"
              id="selectBox"
            >
              <option value="-1"> دست بندی</option>
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
          <hr className="text-slate-800 " />

          <div>
            <select
              className="w-[12rem] outline-none IRANSansWeb_Medium cursor-pointer hover:bg-zinc-100 py-3 rounded transition-all duration-300"
              onChange={form.handleChange}
              value={form.values.city}
              name="city"
              defaultValue="-1"
              id="selectBox"
            >
              <option value="-1">شهر</option>
              <option value="sanandaj">سنندج</option>
              <option value="Kermanshah">کرمانشاه</option>
              <option value="tehran">تهران</option>
            </select>
          </div>
          <hr className="text-slate-800 " />

          <div className="IRANSansWeb_Medium">
            <h2 className="mb-3">انتخاب عکس محصول</h2>
            <input
              className="IRANSansWeb"
              onChange={form.handleChange}
              value={form.values.img}
              type="file"
              name="img"
            />
            <img
              src={`/images/${form.values.img.slice(12)}`}
              className="w-full object-cover  mt-4"
            />
          </div>
          <hr className="text-slate-800 " />

          <div className="flex flex-col gap-5">
            <label className="IRANSansWeb_Medium" htmlFor="function">
              کارکرد محصول
            </label>
            <input
              className="IRANSansWeb"
              onChange={form.handleChange}
              value={form.values.function}
              type="text"
              name="function"
              placeholder="کارکرد مورد نظر را بنویسید"
            />
            <span className="IRANSansWeb text-sm">این قسمت اختیاری است*</span>
          </div>
          <hr className="text-slate-800 " />

          <div className="flex flex-col gap-5">
            <label className="IRANSansWeb_Medium" htmlFor="condition">
              وضعیت محصول
            </label>
            <input
              className="IRANSansWeb"
              onChange={form.handleChange}
              value={form.values.condition}
              type="text"
              name="condition"
              placeholder="وضعیت محصول مورد نظر را بنویسید"
            />
            <span className="IRANSansWeb text-sm">این قسمت اختیاری است*</span>
          </div>
          <hr className="text-slate-800 " />

          <div className="flex flex-col gap-5">
            <label className="IRANSansWeb_Medium" htmlFor="meterage">
              متراژ خانه
            </label>
            <input
              className="IRANSansWeb"
              onChange={form.handleChange}
              value={form.values.meterage}
              type="text"
              name="meterage"
              placeholder="متراژ مورد نظر را بنویسید"
            />
            <span className="IRANSansWeb text-sm">این قسمت اختیاری است*</span>
          </div>
          <hr className="text-slate-800 " />

          <button
            type="submit"
            className="border border-slate-300 w-[9rem] m-auto bg-[#be3737] p-2 rounded-xl text-white IRANSansWeb_Medium text-[15px]"
          >
            ثبت
          </button>
        </div>
      </form>
    </div>
  );
}
