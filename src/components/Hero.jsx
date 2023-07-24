import { useState } from "react";
import { hero_mob, search_img } from "../assets";
import { categories } from "../constants";
import Category from "./Category";
import Searchlist from "./Searchlist";

function Hero() {
  const [search, setSearch] = useState(false);



  return (
    <div className="hero  pb-3 bg-hero-mobile bg-no-repeat bg-cover  border-b-color-grey-500 border-b-2  lg:bg-hero-desk ">
      <div className="header-bg-img absolute top-0 left-0 right-0 -z-10 overflow-hidden h-full">
        {/* <img src={hero_mob} alt="background" className="w-full "/> */}
      </div>
      <div className="content lg:max-w-screen-lg mx-auto w-full pt-32 flex flex-col justify-around gap-24">
        <h1 className="hero-heading text-white text-center text-4xl font-semibold lg:text-6xl">
          <span className="block">Gasetenlijst</span>
          <span className="block">Amsterdam</span>
        </h1>
        <div className="search-bar w-11/12 mx-auto  px-2 lg:px-0 flex justify-center items-center gap-3 bg-color-grey-100 rounded-md border border-b-2 border-color-border-linear-gradient max-w-screen-sm">
          <img src={search_img} alt="" className="w-1/12 lg:w-10" />
          <input
            type="text"
            id="search-input"
            placeholder="Zoek evenement, clubavond, festival"
            className="w-10/12 py-3 text-sm outline-none bg-color-grey-100 text-black"
            onFocus={()=>setSearch(true)}
            onBlur={()=>setSearch(false)}
          />
        </div>
        <Searchlist display={search}/>
        <div className="categories flex justify-left items-center gap-5 w-11/12 mx-auto">
          {categories.map((data, key) => {
            return <Category img={data.img} text={data.text} key={key} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Hero;
