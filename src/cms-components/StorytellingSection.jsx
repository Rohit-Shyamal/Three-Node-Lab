import React from 'react';

const stories = [
  { num: '01', title: 'Practical', desc: 'Learn by building.' },
  { num: '02', title: 'Innovative', desc: 'Create real technology.' },
  { num: '03', title: 'Guided', desc: 'Step-by-step learning.' },
  { num: '04', title: 'Real-World', desc: 'Technology beyond the classroom.' },
];

const StorytellingSection = () => {
  return (
    <section className="bg-cms-charcoal text-white py-32 px-4 md:px-8 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-mono text-sm uppercase tracking-widest text-cms-orange mb-24 text-center">
          Why THREE NODE LAB
        </h2>

        {/* Horizontal Storytelling */}
        <div className="flex flex-col md:flex-row justify-between gap-16 md:gap-8">
          {stories.map((story) => (
            <div key={story.num} className="flex flex-col relative group">
              <div className="text-[6rem] md:text-[8rem] font-bold tracking-tighter text-white/5 mb-4 group-hover:text-white/20 transition-colors">
                {story.num}
              </div>
              <div className="absolute top-1/2 left-0 md:left-4">
                <h3 className="text-3xl font-bold uppercase mb-2 group-hover:text-cms-orange transition-colors">{story.title}</h3>
                <p className="font-mono text-sm uppercase tracking-widest text-cms-light-grey/50">
                  {story.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StorytellingSection;
