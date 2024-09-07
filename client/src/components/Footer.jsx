
import whatsappIcon from "../assets/whatsapp-icon.ico"
import XIcon from "../assets/x-icon.png"
import metaIcon from "../assets/meta-icon.png"

const Footer = () => {
  return (
    <>
      <div className="bottom-0 right-0 left-0 xl:right-[10rem] xl:left-[10rem] z-40 h-[3rem] md:h-[4rem] bg-slate-50 flex items-center justify-center text-slate-950 gap-4 mb-2 border-t border-x border-slate-500 font-semibold text-lg shadow-lg shadow-black">
        <p className="">© 2024 skillHub</p>
        <p>Follow us</p>
        <div className="flex gap-2 items-center">
          <img src={XIcon} className="icon-scale h-[1.75rem] rounded-full cursor-pointer"/>
          <img src={whatsappIcon} className="icon-scale h-[2rem] rounded-full cursor-pointer"/>
          <img src={metaIcon} className="icon-scale h-[2rem] rounded-full cursor-pointer"/>
        </div>
      </div>
    </>
  );
};

export default Footer;
