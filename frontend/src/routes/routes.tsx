import Home from "../views/home";
import Form from "../views/form";
import { Route } from "../types/routes";

const routes: Route[] = [
  { path: "/", component: <Home></Home> },
  { path: "/form", component: <Form></Form> },
];

export default routes
