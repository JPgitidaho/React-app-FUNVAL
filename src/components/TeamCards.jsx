export default function TeamCard({ name, role, image }) {
  return (
    <div className="relative">
      
      <p className="absolute top-40 right-[-30px]  text-xs md:text-xl uppercase text-gray-400 rotate-90 origin-top-right">
        {role}
      </p>

   
      <div className="flex flex-col items-start">
        <img
          src={image}
          alt={name}
          className="w-full h-auto object-cover rounded-md shadow-md"
        />
        <h3 className="mt-2 font-bold text-white text-sm md:text-base">
          {name}
        </h3>
      </div>
    </div>
  );
}
