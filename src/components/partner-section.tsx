import Image from "next/image"

export function PartnerSection() {
  return (
    <div className="mb-12">
      <h2 className="text-xl font-semibold mb-6 text-center">Partners</h2>
      <div className="flex justify-center space-x-8">
        <a
          href="https://xtreme-jumps.eu/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <Image
            src="https://ext.same-assets.com/3864282553/3993539506.png"
            alt="Xtreme Jumps"
            width={200}
            height={50}
            className="object-contain"
          />
        </a>
        <a
          href="#"
          className="hover:opacity-80 transition-opacity"
        >
          <Image
            src="https://ext.same-assets.com/3864282553/2517468259.png"
            alt="Kreedz.com Partner"
            width={200}
            height={50}
            className="object-contain"
          />
        </a>
      </div>
    </div>
  )
}
