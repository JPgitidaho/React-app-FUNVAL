export default function TeamCard({ name, role, image, rolePosition }) {
  return (
    <div className="grid grid-cols-[1fr_auto] grid-rows-[auto_auto] items-center gap-x-2 relative">
      <img
        src={image}
        alt={name}
        className="w-full h-auto object-cover rounded-md shadow-md row-span-2"
      />

<p
  className={`text-md -right-1 text-bold uppercase text-gray-400 tracking-widest absolute rotate-90 origin-right ${rolePosition}`}
>
  {role}
</p>


      <h3 className="font-bold text-white text-sm md:text-base col-span-2 mt-2">
        {name}
      </h3>
    </div>
  );
}
