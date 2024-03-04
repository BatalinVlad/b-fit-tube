import logo from "../assets/logo.png";
import { Menu, Bell, Video, CircleUserRound } from "lucide-react";
import Button from "./shared/Button";

function PageHeader() {
  return (
    <div className="flex gap-10 lg:gap-20 justify-between p-2 mb-6 mx-4">
      <div className="flex gap-4 items-center flex-shrink-0">
        <Button variant="ghost" size="icon">
          <Menu />
        </Button>
        <a href="/">
          <img className="w-30 h-10" src={logo}></img>
        </a>
      </div>
      {/* <div className="flex gap-4 items-center">
        <p>FIND</p>
        <button>S</button>
        <button>M</button>
      </div> */}
      <div className="flex gap-4 items-center flex-shrink-0">
        <Button variant="ghost" size="icon">
          <Bell />
        </Button>
        <Button variant="ghost" size="icon">
          <Video />
        </Button>
        <Button variant="ghost" size="icon">
          <CircleUserRound />
        </Button>
      </div>
    </div>
  );
}

export default PageHeader;
