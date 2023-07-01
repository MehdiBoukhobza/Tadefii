interface Props {
  name: string;
  job: string;
  text: string;
}

const Testimonials = (props: Props) => {
  return (
    <>
      <div className="p-5 font-JosefinSans text-gray-800 rounded-lg shadow-md hover:translate-y-[-.5rem] ease-in-out duration-500 bg-white">
        <div className="mb-2">
          <p className="mb-3 md:text-lg text-center text-gray-600 ">{props.text}</p>
          <div className="flex flex-col items-center justify-center">
            <h5 className="font-bold md:text-lg  text-[#34746b]">{props.name}</h5>
            <p className="text-sm md:text-base  text-[#918061]">{props.job}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
