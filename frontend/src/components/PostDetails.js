
function PostDetails() {
  return (
    <p className="inline-flex items-center justify-start gap-2">
      <span className="text-xs leading-none text-slate-400">Categories</span>
      <span className="size-1.5 rounded-full bg-blue-700" />
      <span className="text-xs leading-none text-slate-400">4 min. read</span>
    </p>
  );
}

function PostImageCard({ src, className }) {
  return (
    <div className="flex max-w-[600px] flex-col items-start gap-6 overflow-hidden">
      <div className="flex h-[280px] w-full items-center justify-center overflow-hidden rounded-3xl bg-slate-100 md:h-[310px] center">
        <img src={src} alt="" className={className} />
      </div>
      <div className="flex flex-col items-start gap-3">
        <PostDetails />
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-semibold">Blog Post Heading</h3>
          <h4 className="max-w-[90%] text-sm leading-tight text-slate-400">
            We've done it carefully and simply. Combined with the ingredients
            makes for beautiful landings.
          </h4>
        </div>
        <button className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200">
          <span className="mr-2">Read More</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-6 stroke-current"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16l4-4-4-4" />
            <path d="M8 12h8" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function Preview() {
  return (
    <section className="max-w-screen-2xl m-auto w-full px-3 sm:px-8 lg:px-16 xl:px-32 flex flex-col gap-12 py-12 2xl:py-16">
      <div className="flex justify-between">
        <h3 className="text-4xl font-semibold text-slate-950">Blog</h3>
        <batton size="large">See More</batton>
      </div>
      <div className="grid w-full grid-flow-row gap-x-0 gap-y-6 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
        <PostImageCard
          src="https://www.tailframes.com/images/illustration-2.webp"
          className="h-[134px] w-[235px] -translate-x-1/4"
        />
        <PostImageCard
          src="https://www.tailframes.com/images/illustration.webp"
          className="h-[220px] w-[116px]"
        />
        <PostImageCard
          src="https://www.tailframes.com/images/illustration-3.webp"
          className="h-[217px] w-[111px]"
        />
      </div>
    </section>
  );
}
