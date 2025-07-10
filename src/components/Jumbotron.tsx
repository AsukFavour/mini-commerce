import Image from "next/image";

export default function Jumbotron() {
  return (
    
    <section className="relative bg-[#f7f6f7] min-h-[400px] md:min-h-[600px] flex items-center overflow-hidden rounded-b-3xl mb-10 px-0 pt-0">
      {/* Banner Text */}
      <div className="absolute left-0 top-0 w-full h-full flex flex-col justify-center pl-6 md:pl-20 z-10">
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 max-w-xl mb-4">
          Discover Your <span className="text-primary">Style</span>
        </h1>
        <p className="text-gray-700 text-lg md:text-2xl max-w-lg mb-6">
          Shop the latest trends in fashion for men and women. Quality, comfort,
          and style—delivered to your door.
        </p>
        <a
          href="#catalogue"
          className="inline-block bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-900 transition w-[140px] text-center"
        >
          Shop Now
        </a>
      </div>
      {/* Banner Image */}
      <div className="ml-auto w-full md:w-2/3 h-[400px] md:h-[600px] relative">
        <Image
          src="/images/banner-fashion.png"
          alt="Fashionable couple in trendy clothing"
          fill
          className="object-cover object-right"
          priority
          sizes="(max-width: 768px) 100vw, 66vw"
        />
      </div>
      {/* Overlay for mobile readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#f7f6f7] via-[#f7f6f7]/80 to-transparent md:hidden"></div>
     
    </section>

     
  );
}
