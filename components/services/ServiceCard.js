function ServiceCard({ image, title, description }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div
        style={{ backgroundImage: `url(${image})` }}
        className=" bg-cover group 0  max-w-[450px] min-h-[350px]  justify-center duration-1000 hover:backdrop-grayscale items-center flex hover:scale-105"
      >
        <div className="hover:backdrop-blur-sm hover:backdrop-grayscale-0 hover:bg-opacity-40 hover:bg-black flex justify-center items-center max-w-[450px] p-5 min-h-[350px]">
          <p className="group-hover:opacity-100   p-3 duration-700 text-justify text-white opacity-0">
            {description}
          </p>
        </div>
      </div>
      <div className="w-full bg-blue-300 py-3 mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
      <h5 className="text-center  font-bold">{title}</h5>
      </div>
    </div>
  );
}

export default ServiceCard;
