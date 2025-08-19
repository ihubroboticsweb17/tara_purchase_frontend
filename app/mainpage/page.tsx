import Navbar from "@/components/Navbar";
import MenuDropdown from "@/components/MenuDropdown";
import BikeCard from "@/components/RoboCart";

export default function mainpage() {
  const bikes = [
    { name: "Thara 1", image: "/images/hunter350.jpg" },
    { name: "Thara 2", image: "/images/classic650.jpg" },
    { name: "Thara 3", image: "/images/scram440.jpg" },
    { name: "Thara 4", image: "/images/goanclassic350.jpg" },
    { name: "Thara 5", image: "/images/bear650.jpg" },
    { name: "Thara 6", image: "/images/classic350.jpg" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex flex-1">
        {/* Sidebar */}
        <MenuDropdown/>

        {/* Main Grid */}
        <main className="flex-1 p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {bikes.map((bike) => (
            <BikeCard key={bike.name} name={bike.name} image={bike.image} />
          ))}
        </main>
      </div>
    </div>
  );
}
