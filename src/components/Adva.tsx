import Icon from "../components/Icon";
import { RiHandHeartLine } from "react-icons/ri";
import { LiaShippingFastSolid } from "react-icons/lia";
import { BiGift, BiLeaf } from "react-icons/bi";

const Adva = () => {
  return (
    <>
      <section id="advan">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-2 lg:py-12 gap-7 lg:px-5 justify-center items-center font-JosefinSans p-4 py-7">
          <Icon
            title="BEAUTIFULLY PACKED !"
            description="Each product is gently packed in a stylish colorful wrap."
            icon={BiGift}
          />
          <Icon
            title="TRULY HANDMADE !"
            description="All our products are mad by hand and with great care."
            icon={RiHandHeartLine}
          />
          <Icon
            title="100% Oragnic !"
            description="Our soap is free of anything synthetic or anything artificial."
            icon={BiLeaf}
          />
          <Icon
            title="FAST SHIPPING !"
            description="Our products are available with fast shipping to any city."
            icon={LiaShippingFastSolid}
          />
        </div>
      </section>
    </>
  );
};

export default Adva;
