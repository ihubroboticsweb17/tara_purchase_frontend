interface BikeCardProps {
  name: string;
  image: string;
}

export default function RoboCart({ name, image }: BikeCardProps) {
  return (
   
       <div className="bg-black text-white relative group w-80 h-60 overflow-hidden rounded-lg shadow-lg">
  {/* Background Image */}
  <img
    src="/images/transparen2t.png"
    alt="bike"
    className="w-full h-full object-cover"
  />

  {/* Overlay Box */}
  <div
    className="absolute bottom-0 left-0 right-0 bg-black/80 
               p-4 transition-all duration-500 group-hover:h-28 h-12"
  >
    {/* Name (always visible) */}
    <h3 className="text-lg font-semibold text-center">{name}</h3>

    {/* Buttons (hidden by default, show on hover) */}
    <div
      className="mt-2 flex gap-2 justify-center opacity-0 
                 group-hover:opacity-100 transition-opacity duration-500"
    >
      <button className="bg-red-600 px-3 py-1 text-sm rounded hover:bg-red-700">
        Explore
      </button>
      <button className="bg-gray-700 px-3 py-1 text-sm rounded hover:bg-gray-600">
        Book a Test
      </button>
    </div>
  </div>
</div>
  );
}
