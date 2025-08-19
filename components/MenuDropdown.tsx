// export default function MenuDropdown() {
//   return (
//     <aside className="bg-white w-64 border-r border-gray-200 p-4 space-y-4">
//       <ul className="space-y-3 text-gray-700 font-medium">
//         <li><a href="#">Configure Now</a></li>
//         <li><a href="#">Find A Dealer</a></li>
//         <li><a href="#">Find A Service Centre</a></li>
//         <li><a href="#">Finance</a></li>
//         <li><a href="#">Owner's Manual</a></li>
//         <li><a href="#">Quick Start Guide</a></li>
//       </ul>
//     </aside>
//   );
// }
import Link from "next/link";

export default function MenuDropdown() {
  return (
    <aside className="bg-white w-64 border-r border-gray-200 p-4 space-y-4">
      <ul className="space-y-3 text-gray-700 font-medium">
        <li>
          <Link
            href="/configure"
            className="block px-3 py-2 rounded-md hover:bg-gray-100 hover:text-black transition"
          >
            Configure Now
          </Link>
        </li>
        <li>
          <Link
            href="/dealer"
            className="block px-3 py-2 rounded-md hover:bg-gray-100 hover:text-black transition"
          >
            Find A Dealer
          </Link>
        </li>
        <li>
          <Link
            href="/service"
            className="block px-3 py-2 rounded-md hover:bg-gray-100 hover:text-black transition"
          >
            Find A Service Centre
          </Link>
        </li>
        <li>
          <Link
            href="/finance"
            className="block px-3 py-2 rounded-md hover:bg-gray-100 hover:text-black transition"
          >
            Finance
          </Link>
        </li>
        <li>
          <Link
            href="/manual"
            className="block px-3 py-2 rounded-md hover:bg-gray-100 hover:text-black transition"
          >
            Owner&apos;s Manual
          </Link>
        </li>
        <li>
          <Link
            href="/quickstart"
            className="block px-3 py-2 rounded-md hover:bg-gray-100 hover:text-black transition"
          >
            Quick Start Guide
          </Link>
        </li>
      </ul>
    </aside>
  );
}
