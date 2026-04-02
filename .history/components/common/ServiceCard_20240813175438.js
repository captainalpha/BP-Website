// import { Link } from "react-router-dom";

function ServiceCard({ title, discription, icon, link,target }) {
  return (
    <a href={link} target={`${!target?'_self':'_blank'}`}>
      <div className="p-8 shadow-lg group  bg-gradient-to-br from-primary to-secondary  space-y-5 text-white border-2 hover:border-primary hover:text-primary hover:bg-white duration-[20000] hover:scale-105 transition cursor-pointer hover:from-white hover:to-white">
        <div className="flex items-center space-x-5 ">
          {icon}
          <h2 className="text-3xl">{title}</h2>
        </div>
        <p>{discription}</p>
      </div>{" "}
    </a>
  );
}

export default ServiceCard;
