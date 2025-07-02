import TeamCard from './TeamCards.jsx';
import { team } from './data.js';

export default function TeamGrid() {
  return (
    <div className="grid grid-cols-2 gap-x-8 gap-y-6 px-4 md:grid-cols-3 md:gap-15">
      {team.map((member, index) => (
<div
  key={index}
  className={`
    ${index % 2 === 1 ? 'translate-y-6' : 'translate-y-0'} 
    md:${index % 3 === 1 ? 'translate-y-6' : 'translate-y-0'}
  `}
>
  <TeamCard {...member} />
</div>


      ))}
    </div>
  );
}
