import Image from "next/image";
import BannerImg from "@/assets/hero_img.jpg";

const Banner = () => {
  return (
    <section className="px-4 py-8 md:px-6 lg:py-12">
      <div className="container mx-auto overflow-hidden rounded-3xl bg-linear-to-br from-indigo-50 via-white to-purple-50 px-6 py-10 shadow-sm md:px-10 lg:px-14 lg:py-14">
        <div className="flex flex-col-reverse items-center justify-between gap-10 md:flex-row md:gap-8">
          
          {/* Content */}
          <div className="w-full text-center md:w-1/2 md:text-left">
            {/* Small Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-indigo-600"></span>
              Discover your next favorite book
            </div>

            {/* Heading */}
            <h1 className="text-3xl font-extrabold leading-tight text-slate-900 md:text-5xl lg:text-4xl">
              Books to freshen up <br /> your bookshelf
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-500 md:text-lg">
              Explore a collection of amazing books, discover new stories,
              and find something special for your next reading adventure.
            </p>

            {/* Buttons */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
              <button className="rounded-xl bg-indigo-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-indigo-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-xl">
                View The List
              </button>

              <button className="rounded-xl border border-slate-200 bg-white px-7 py-3.5 font-semibold text-slate-700 transition-all duration-300 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600">
                Explore Categories
              </button>
            </div>

            {/* Small Stats */}
            <div className="mt-8 flex items-center justify-center gap-7 md:justify-start">
              <div>
                <p className="text-2xl font-bold text-slate-900">100+</p>
                <p className="text-sm text-slate-500">Books</p>
              </div>

              <div className="h-10 w-px bg-slate-200"></div>

              <div>
                <p className="text-2xl font-bold text-slate-900">20+</p>
                <p className="text-sm text-slate-500">Categories</p>
              </div>

              <div className="h-10 w-px bg-slate-200"></div>

              <div>
                <p className="text-2xl font-bold text-slate-900">4.8</p>
                <p className="text-sm text-slate-500">Avg. Rating</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative w-full md:w-1/2">
            {/* Background Decoration */}
            <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-indigo-200/50 blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-purple-200/50 blur-2xl"></div>

            {/* Image Container */}
            <div className="relative mx-auto max-w-md overflow-hidden rounded-3xl border border-white/70 bg-white/60 p-3 shadow-2xl shadow-indigo-100 backdrop-blur-sm">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={BannerImg}
                  width={600}
                  height={500}
                  alt="Books on a bookshelf"
                  className="h-auto w-full object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
              </div>

              {/* Floating Rating Card */}
              <div className="absolute bottom-6 left-6 flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100 text-lg">
                  ⭐
                </div>

                <div>
                  <p className="text-sm font-bold text-slate-800">
                    4.8 Rating
                  </p>
                  <p className="text-xs text-slate-500">
                    Loved by readers
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;

