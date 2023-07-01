import Testimonials from "./Testimonials";


const AllTesti = () => {
  return (
    <>

      <section id="testimonials">
        <div className="bg-[#F5F5F5] py-5">
            <div className="mb-8 mt-8 text-center">
              <h2 className="text-4xl font-JosefinSans pb-3 px-12 md:px-0 text-gray-600">
                Our Soap Fans Speak !
              </h2>
              <p className="font-JosefinSans text-lg text-gray-400">
                What others say about us
              </p>
            </div>
            <div className="grid grid-cols-1  md:grid-cols-3 gap-6 px-7 lg:px-10 mb-6 ">
              <Testimonials
                name="LAMNOUAR Imane"
                text="I'm absolutely thrilled with your Honey & Argan Oil soap!
                    The scent is heavenly, and it has done wonders for my skin.
                    I love that it's gentle, vegan-friendly, and free from harsh additives.
                    Thank you for creating such an exceptional product that has made my skin care
                    routine a joy!"
                job="Cosmetologist"
              />
              <Testimonials
                name="AAOUITA Jalal "
                text="I am incredibly impressed by TADEFI and its members. Their passion, attention to detail, and high-quality products make them a true standout in the industry."
                job="Entrepreneur "
              />
              <Testimonials
                name="SEHAKI Iliyas"
                text="I want to thank you so much for making such a fine product. I'm
                        currently using the Argan Hibiscus soap and it is fabulous. It is
                        great to know that your soap is vegan-friendly with no harsh
                        additives or chemicals."
                job="Engineer"
              />
            </div>
        </div>
      </section>
    </>
  );
};

export default AllTesti;
