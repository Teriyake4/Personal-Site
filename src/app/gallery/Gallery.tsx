export type Image = {
  src: string;
  orientation: "landscape" | "portrait" | "pano";
};

export default function gallery(galleryTitle: string, images: Image[]): React.ReactNode {
    return (
      <div className="flex flex-col items-center h-screen bg-base m-1 md:m-4">
            <h1 className="text-[2rem] text-textcolor mb-4 font-spaceMono m-[6rem]">
                {galleryTitle}
            </h1>
            {/* auto-rows-[90vh] */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-auto md:mx-[4rem]">
                {images.map((img, idx) => {
                    // Determine col-span based on orientation
                    let colSpan = img.orientation === "portrait" ? 1 : img.orientation === "landscape" ? 2 : img.orientation === "pano" ? 4 : 1;
                    return (
                    <div
                        key={idx}
                        className={`flex items-center justify-center relative overflow-hidden row-span-1 bg-white/5 backdrop-blur-md border border-white/20 rounded-[20px] p-1 my-[1rem]
                            ${colSpan === 1 ? "col-span-1 md:col-span-1" : ""}
                            ${colSpan === 2 ? "col-span-1 md:col-span-2" : ""}
                            ${colSpan === 4 ? "col-span-1 md:col-span-4" : ""}
                        `}
                    >
                    <div className="h-full w-full flex items-center justify-center">
                        <img
                            src={img.src}
                            className="h-full w-full object-cover rounded-[15px]"
                        />
                    </div>
                    </div>
                    );
                })}
            </div>
        </div>
    )
}