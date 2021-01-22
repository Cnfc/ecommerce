import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Animation from "pages/Animation";
import Login from "pages/Login";
import Blog from "pages/Blog";
import Progress from "pages/Progress";
// import SignUp from "./web/pages/user/SignUp";
// import SignIn from "./web/pages/user/SignIn";
// import About from "./web/pages/About/About";
// import PrivateRouter from "./auth/PrivateRouter";
// import AdminRouter from "./auth/AdminRouter";
// import UserDashboard from "./web/pages/user/UserDashoard";
// import AdminDashboard from "./web/pages/user/AdminDashboard";
// import AddCategory from "./admin/AddCategory";
// import AddProduct from "./admin/AddProduct";
// import Shop from "./web/pages/Shop";
// import Style from "./web/pages/Style";

const Routers = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/animation" exact component={Animation} />
        <Route path="/login" exact component={Login} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/progress" exact component={Progress} />

        {/* <Route path="/signin" exact component={SignIn} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/about" exact component={About} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/styled" exact component={Style} /> */}
        {/* 
        <PrivateRouter path="/user/dashboard" exact component={UserDashboard} />

        <AdminRouter path="/admin/dashboard" exact component={AdminDashboard} />
        <AdminRouter path="/create/category" exact component={AddCategory} />
        <AdminRouter path="/create/product" exact component={AddProduct} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Routers;
