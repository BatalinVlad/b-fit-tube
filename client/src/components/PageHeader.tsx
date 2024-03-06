import { useState } from "react";
import { Menu, Bell, Video, CircleUserRound, Mic, Search, ArrowLeft } from "lucide-react";
import Button from "./shared/Button";
import logo from "../assets/logo.png";

function PageHeader() {
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);

  return (
    <div className="flex gap-10 lg:gap-20 justify-between p-2 mb-6 mx-4 ">
      <div className={`md:gap-3 flex-shrink-0 ${showFullWidthSearch ? "hidden" : "flex"}`}>
        <Button type="button" variant="ghost" size="icon" className="mr-1">
          <Menu />
        </Button>
        <a href="/">
          <img className="w-30 h-10" src={logo}></img>
        </a>
      </div>
      <form className={`md:flex gap-4 flex-grow justify-center ${showFullWidthSearch ? "flex" : "hidden"}`}>
        <Button type="button" onClick={() => setShowFullWidthSearch(false)} className={`md:hidden ${showFullWidthSearch ? 'flex' : 'hidden'}`} size="icon" variant="ghost">
          <ArrowLeft />
        </Button>
        <div className="flex flex-grow mx-w-[600px]">
          <input type="search" placeholder="Search" className="rounded-l-full py-1 px-4 text-lg w-full border border-secondary-border shadow-inner shadow-secondary focus:border-blue-500 outline-none" />
          <Button type="button" onClick={() => setShowFullWidthSearch(true)} className="py-2 px-4 rounded-r-full border-secondary-border border border-l-0 
          flex-shrink-0">
            <Search />
          </Button>
        </div>
        <Button type="button" size="icon" className="flex-shrink-0">
          <Mic />
        </Button>

      </form>
      <div className={`md:gap-2 flex-shrink-0 ${showFullWidthSearch ? "hidden" : "flex"}`}>
        <Button onClick={() => setShowFullWidthSearch(true)} className="md:hidden" variant="ghost" size="icon">
          <Search />
        </Button>
        <Button className="md:hidden" variant="ghost" size="icon">
          <Mic />
        </Button>
        <Button variant="ghost" size="icon">
          <Video />
        </Button>
        <Button variant="ghost" size="icon">
          <Bell />
        </Button>
        <Button variant="ghost" size="icon">
          <CircleUserRound />
        </Button>
      </div>
    </div>
  );
}

export default PageHeader;
