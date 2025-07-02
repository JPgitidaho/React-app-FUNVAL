import TeamCard from './TeamCards.jsx';
import { team } from './data.js';

export default function TeamGridMobile() {
  return (
    <div className="flex md:hidden gap-6 px-4 w-full">
      <div className="flex flex-col gap-6 flex-1">
        {team.filter((_, i) => i % 2 === 0).map((member, i) => (
          <TeamCard key={i} {...member} />
        ))}
      </div>
      <div className="flex flex-col gap-6 flex-1 translate-y-6">
        {team.filter((_, i) => i % 2 === 1).map((member, i) => (
          <TeamCard key={i} {...member} />
        ))}
      </div>
    </div>
  );
}