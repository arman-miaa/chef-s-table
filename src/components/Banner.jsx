

const Banner = () => {
    return (
      <div
        className="bg-cover bg-no-repeat rounded-3xl md:w-full h-full md:h-[34.4rem] mb-10"
        style={{
          backgroundImage: "url('https://i.ibb.co/H4C3kCY/Rectangle-1.png')",
        }}
      >
        <div className="w-9/12 mx-auto flex flex-col justify-center items-center text-center h-full space-y-6 py-4">
          <h1 className="font-bold text-white md:text-[3.25rem]">
            Discover an exceptional cooking class tailored for you!
          </h1>
          <p className="text-lg text-white font-normal">
            Learn from the best chefs in the world and discover new flavors and
            techniques to elevate your cooking skills Learn from the best chefs
            in the world and discover new flavors and techniques to elevate your
            cooking skills
          </p>
          <div className="flex gap-4 text-xl font-semibold">
            <button className="btn bg-green-400 rounded-full border-none">
              Explore Now
            </button>
            <button className="btn btn-outline text-white hover:bg-green-400 rounded-full">
              Our Feedback
            </button>
          </div>
        </div>
      </div>
    );
};

export default Banner;