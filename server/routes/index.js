const { pageNotFound } = require("../middlewares/errorHandle.js");

const routes = [
  { path: "/auth", router: require("./authRoutes.js") },
  { path: "/product", router: require("./productRoutes.js") },
  { path: "/brand", router: require("./brandRoutes.js") },
  { path: "/category", router: require("./categoryRoutes") },
  { path: "/subcategory", router: require("./subcategoryRoutes.js") },
  { path: "/country", router: require("./countryRoutes") },
  { path: "/image", router: require("./imageRoutes.js") },
  { path: "/product-group", router: require("./productGroupRoutes.js") },
  { path: "/testimonial", router: require("./testimonialRoutes.js") },
  { path: "/page", router: require("./pageRoutes.js") },
  { path: "/store", router: require("./storeRoutes.js") },
  { path: "/click", router: require("./clickRoutes.js") },
  { path: "/wholesaler", router: require("./wholesalerRoutes.js") },
  { path: "/message", router: require("./messageRoute.js") },
  { path: "/order", router: require("./orderRoutes.js") },
  { path: "/payment", router: require("./paymentRoutes.js") },
<<<<<<< HEAD
  { path: "/setting", router: require("./settingRoutes.js") },
=======
>>>>>>> 64025c27ecdae3117a98fcf2f0878e4931d0dcbf

  // { path: "/banner", router: require("./bannerRoutes.js"), },
  // { path: "/setting", router: require("./settingRoutes.js"), },
  // { path: "/order", router: require("./orderRoutes.js"), },
  // { path: "/user", router: require("./userRoutes.js"), },
  // { path: "/cart", router: require("./cartRoutes.js"), },
  // { path: "/wishlist", router: require("./wishlistRoutes.js"), },
  // { path: "/checkout", router: require("./checkoutRoutes.js"), },
  // { path: "/payment", router: require("./paymentRoutes.js"), },
  // { path: "/shipping", router: require("./shippingRoutes.js"), },
  // { path: "/contact", router: require("./contactRoutes.js"), },
];

const setRoutes = (app) => {
  routes.forEach((route) => {
    app.use(route.path, route.router);
  });
  app.use(pageNotFound);
};

module.exports = setRoutes;
