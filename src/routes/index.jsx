import { TwoColumn } from "../components/Layout";

// Public Route: ex: không cần login vẫn vào được
import Home from "../pages/Home";
import MyNetWork from "../pages/MyNetWork";
import Jobs from "../pages/Jobs";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/mynetwork", component: MyNetWork },
  { path: "/jobs", component: Jobs, layout: TwoColumn },
];

// Private Route: ex:  login rồi mới vào được
const privateRoutes = [];

export { publicRoutes, privateRoutes };
