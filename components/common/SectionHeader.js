function SectionHeader({ title, discription, cTitle }) {
  return (
    <div className="pt-16 pb-0 px-5  md:px-10    flex flex-col justify-center items-center text-center space-y-3">
      <h1 className="lg:text-4xl text-2xl capitalize font-bold">
        {title}
        <span className="text-orange">{cTitle}</span>
      </h1>
      <p className="text-lg text-orange font-bold font-serif  md:pb-6 ">
        {discription}
      </p>
    </div>
  );
}

export default SectionHeader;
