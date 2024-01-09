import React from "react";
import Newproduct from "./pages/Newproduct/Newproduct";

import Loader from "./componante/loder/Loader";
const Lazyhopage = React.lazy(() => import("./pages/homepage/homepage"));
const LazyMainproduct = React.lazy(() =>
  import("./pages/productpage/productpage")
);

const routs = [
  {
    path: "/Divarwebpage/",
    element: (
      <React.Suspense fallback={<Loader />}>
        <Lazyhopage />
      </React.Suspense>
    ),
  },
  {
    path: "/Divarwebpage/product/:shortname",
    element: (
      <React.Suspense fallback={<Loader />}>
        <LazyMainproduct />
      </React.Suspense>
    ),
  },
  { path: "/Divarwebpage/newproduct", element: <Newproduct /> },
];

export default routs;
