import TeamCard from './TeamCards.jsx';
import { team } from './data.js';

export default function TeamGridDesktop() {
  return (
    <div className="hidden md:grid grid-cols-3 gap-8 px-4 w-full">
      <div className="flex flex-col gap-6">
        <TeamCard {...team[0]} />
        <TeamCard {...team[3]} />
      </div>
      <div className="flex flex-col gap-6 translate-y-6">
        <TeamCard {...team[1]} />
        <TeamCard {...team[4]} />
      </div>
      <div className="flex flex-col gap-6">
        <TeamCard {...team[2]} />
        <TeamCard {...team[5]} />
      </div>
    </div>
  );
}
