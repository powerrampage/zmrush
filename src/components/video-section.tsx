"use client"

export function VideoSection() {
  return (
    <div className="mb-12">
      <h2 className="text-xl font-semibold mb-6 text-center">Example videos of the Kreedz</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="aspect-video w-full">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/UwNn2_w7JHc"
            title="siNz vs. fyksesh on bb1_hellinashop"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="aspect-video w-full">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/qydrjdn67J0"
            title="roqz 240 LJ (100aa World Record)"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  )
}
