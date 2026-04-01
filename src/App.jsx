export default function DinosaurSeries() {
  const featuredQA = [
    {
      question: "What sparked your interest in civil engineering?",
      answer:
        "Civil just felt like the most interesting choice at the time. My first project was the Bhabha Atomic Research Centre in Kota.",
    },
    {
      question: "What was the biggest gap between university and site experience?",
      answer:
        "Theory and practice are very different. Execution and coordination are learned through field experience.",
    },
    {
      question: "What are a few unwritten rules of engineering?",
      answer:
        "Be on site. Stay honest with your learning. Be patient and consistent.",
    },
  ];

  const archive = [
    {
      title: "Jaweed Shaikh",
      subtitle: "Decades of experience across India and the Middle East",
      note: "Site experience, patience, and practical judgment.",
    },
    {
      title: "Next conversation",
      subtitle: "Coming soon",
      note: "A place for the next engineer in the series.",
    },
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <div className="max-w-4xl mx-auto px-6 py-8 md:py-12">
        <nav className="flex items-center justify-between border-b border-stone-200 pb-4 mb-10">
          <div>
            <p className="text-lg font-semibold">Dinosaur Series</p>
            <p className="text-sm text-stone-500">A personal archive of conversations with senior engineers</p>
          </div>
          <div className="hidden md:flex gap-6 text-sm text-stone-600">
            <a href="#about" className="hover:text-stone-900 transition-colors">About</a>
            <a href="#featured" className="hover:text-stone-900 transition-colors">Featured</a>
            <a href="#archive" className="hover:text-stone-900 transition-colors">Archive</a>
          </div>
        </nav>

        <header className="mb-14">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500 mb-3">Conversations with experienced engineers</p>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight max-w-3xl">
            Lessons from engineers who built their knowledge long before it became a headline.
          </h1>
          <p className="mt-5 text-base md:text-lg leading-8 text-stone-700 max-w-2xl">
            This is a simple personal webpage for my Dinosaur Series. Each conversation captures practical lessons,
            judgement, mistakes, and insights that rarely appear in textbooks but shape real engineering work.
          </p>
        </header>

        <section id="about" className="mb-14">
          <div className="bg-white rounded-3xl border border-stone-200 shadow-sm p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4">About the series</h2>
            <div className="space-y-4 text-stone-700 leading-8">
              <p>
                I started this series to document conversations with senior engineers whose experience spans decades,
                countries, projects, and challenges.
              </p>
              <p>
                The goal is to understand what young engineers often do not hear enough about: site judgement,
                accountability, practical learning, and the habits that make someone dependable in the field.
              </p>
            </div>
          </div>
        </section>

        <section id="featured" className="mb-14">
          <div className="mb-5">
            <p className="text-sm uppercase tracking-[0.18em] text-stone-500 mb-2">Featured conversation</p>
            <h2 className="text-2xl font-semibold">Jaweed Shaikh</h2>
            <p className="text-stone-600 mt-1">Decades of experience across India and the Middle East</p>
          </div>

          <article className="bg-white rounded-3xl border border-stone-200 shadow-sm p-6 md:p-8">
            <p className="text-stone-700 leading-8 mb-8">
              As part of my Dinosaur Series, I had a conversation with Jaweed Shaikh about early career lessons,
              site intuition, mistakes that stay with you, and what young engineers need to learn if they want to grow.
            </p>

            <div className="space-y-8">
              {featuredQA.map((item, index) => (
                <div key={index}>
                  <p className="text-sm uppercase tracking-[0.14em] text-stone-500 mb-2">Question {index + 1}</p>
                  <h3 className="text-lg font-medium mb-2">{item.question}</h3>
                  <p className="text-stone-700 leading-8">{item.answer}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-6 border-t border-stone-200">
              <h3 className="text-lg font-medium mb-2">Takeaway</h3>
              <p className="text-stone-700 leading-8">
                Site experience, patience, and curiosity sound simple, but they take years to build and even longer to
                recognise in others.
              </p>
            </div>
          </article>
        </section>

        <section id="archive" className="mb-10">
          <div className="mb-5">
            <p className="text-sm uppercase tracking-[0.18em] text-stone-500 mb-2">Archive</p>
            <h2 className="text-2xl font-semibold">All conversations</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {archive.map((item, index) => (
              <div key={index} className="bg-white rounded-3xl border border-stone-200 shadow-sm p-6">
                <h3 className="text-lg font-medium mb-1">{item.title}</h3>
                <p className="text-sm text-stone-500 mb-3">{item.subtitle}</p>
                <p className="text-stone-700 leading-7">{item.note}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
