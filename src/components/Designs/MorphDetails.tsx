import { bannerimg } from "@/public";


const MorphDetails = () => {
  return (
    <section className="min-h-screen w-screen mx-auto max-w-7xl flex justify-center items-center">
      <div className="relative w-full max-w-3xl">
        <div className="border-2 relative aspect-w-4 aspect-h-3">
          <img src={bannerimg} alt="" className="object-cover object-center w-full h-full" />
        </div>
        <div className="absolute top-0 w-5/12 h-full border-2 border-red-400"></div>
      </div>
    </section>
  );
};

export default MorphDetails;