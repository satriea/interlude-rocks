import StoryCard from "./StoryCard"

// Tambahkan onOpenArticle sebagai props
const StoriesSection = ({ onOpenArticle }) => {
  const stories = [
    {
      id: 1,
      title: "Midnight Amplifier",
      excerpt:
        "Distorsi gitar membelah malam, meninggalkan gema yang tak pernah benar-benar mati. Di antara asap dan lampu redup, kenangan ikut berteriak.",
      date: "OCT 1985"
    },
    {
      id: 2,
      title: "Neon Feedback",
      excerpt:
        "Suara feedback mengalir seperti doa yang rusak. Di panggung kecil itu, ia menemukan dirinya sendiri—dan kehilangannya sekaligus.",
      date: "NOV 1985"
    },
  ]

  return (
    <section id="stories" className="relative py-32 bg-black border-t-4 border-zinc-900">
      
      {/* BACKGROUND TEXT DECORATION */}
      <div className="absolute top-10 right-0 select-none opacity-[0.02] pointer-events-none">
        <h1 className="text-[200px] font-black italic leading-none">THE<br/>JOURNAL</h1>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* SECTION HEADER - Newspaper Style */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between border-b-2 border-white/10 pb-10">
          <div className="max-w-2xl">
            <span className="text-red-600 font-black tracking-[0.4em] text-[10px] uppercase">
              // Deep Archives
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic mt-2">
              SHORT <span className="text-blue-600">STORIES</span>
            </h2>
          </div>

          <p className="mt-6 md:mt-0 text-zinc-500 max-w-xs text-xs font-mono leading-relaxed uppercase">
            Cerita pendek tentang musik, malam, dan ingatan yang tertinggal 
            di antara distorsi dan cahaya neon.
          </p>
        </div>

        {/* STORIES LIST */}
        <div className="grid gap-16 md:grid-cols-2">
          {stories.map((story) => (
            <StoryCard
              key={story.id}
              title={story.title}
              excerpt={story.excerpt}
              date={story.date}
              // Teruskan fungsi ke StoryCard
              onOpen={onOpenArticle} 
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default StoriesSection