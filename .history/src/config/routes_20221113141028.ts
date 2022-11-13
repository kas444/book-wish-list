import Home from "../screens/Home";
import Login from "../screens/Login";
import Welcome from "../screens/Welcome";

interface RouteType {
  path: string;
  component: any;
  name: string;
  protected: boolean;
}

const routes: RouteType[] = [
  {
    path: "",
    component: Home,
    name: "Home Screen",
    protected: true,
  },
  {
    path: "/login",
    component: Login,
    name: "Login Screen",
    protected: false,
  },
  {
    path: "/welcome",
    component: Welcome,
    name: "Screen Name For Reference",
    protected: false, // if user needs to be authenticated to access this screen
  }
];

export default routes;
