import React from "react";

const featuredIntro = [
  `As part of my Dinosaur Series, I had a conversation with Jaweed Shaikh, who has decades of experience across India and the Middle East, about early career lessons, site intuition, mistakes that stay with you, and what young engineers need to learn if they want to grow.`,
  `What stood out was how simply he explained things that usually take years to understand. His perspective comes from years on site, dealing with real work, real pressure, and real responsibility.`,
];

const featuredQA = [
  {
    question:
      "What initially sparked your interest in civil engineering, and what was the milestone project that defined your early career?",
    answer: `Civil just felt like the most interesting branch at the time. Admission was based on merit, and I got into it, but once I started working, I realised how much responsibility this field carries.

My first project was the Bhabha Atomic Research Centre in Kota. That was my starting point. It gave me my first real exposure to how projects actually run and how serious the work is.

Another important project I worked on was in Saudi Arabia, on the eastern coast. That is where I really learned how to handle people, understand drawings properly, and take ownership of work. These were all time-bound projects, and the speed and pressure taught me discipline early in my career. Those experiences shaped me as an engineer.`,
  },
  {
    question:
      "Looking back at your first decade, what was the biggest gap between university learning and actual site experience?",
    answer: `The gap is very large. Theory and practice are completely different.

In college, you learn concepts, formulas, and codes. But on site, the work is very different. You are dealing with execution, coordination, sequencing, and real-time problem solving. None of that is properly taught in university.

Unless you go into structural design, most of what you study does not directly match what you see on site. Real learning begins when you step into the field and start dealing with actual work conditions.`,
  },
  {
    question:
      "Have you ever walked onto a site and sensed something was wrong without checking drawings or data?",
    answer: `Yes, but that comes with experience.

In my first six years, I mostly worked in the office. After that, I spent more time on site, and that is when I started developing this understanding.

Now, when I walk onto a site, I can often sense if something is wrong even without checking drawings or books. That comes from repeatedly seeing the same work and understanding how it should look.

For example, after concreting, even the colour of the concrete can sometimes tell you whether something is right or not. That kind of judgement is not taught anywhere. It develops only through site experience.`,
  },
  {
    question:
      "What are 2–3 unwritten rules of engineering that you won’t find in textbooks?",
    answer: `It is simple.

You have to be on site. That is the first thing. You cannot understand engineering properly without being there.

Second, you have to be honest with your learning. If you do not know something, accept it and learn it properly.

Third, you need patience. In this field, we repeat the same processes again and again. Many people lose interest because of that. But that repetition is what builds perfection and confidence.

So patience and consistency are very important.`,
  },
  {
    question:
      "How do you balance gut feeling with technical data when they don’t match?",
    answer: `On site, the condition itself tells you a lot.

When you observe the work closely, you can understand what is right and what is wrong. That understanding becomes your instinct over time.

But this is not guesswork. It comes from experience. If something feels off, it means you need to check it more carefully.

So gut feeling and technical knowledge are not separate. Your gut feeling is built from your technical experience on site.`,
  },
  {
    question:
      "Can you share a mistake or near-miss that changed how you approach engineering?",
    answer: `Yes, one incident I clearly remember was in Saudi Arabia.

I almost missed including a pumphouse building in the final billing. It was a big amount, around 3.5 million dollars, and I realised it very late.

To correct it, I worked continuously for 72 hours to complete the structure before inspection. My team supported me, and we managed to finish it on time.

That experience taught me how important it is to pay attention to every detail. Small oversights can turn into major problems. It also showed me the importance of teamwork when you are under pressure.`,
  },
  {
    question: "How have you handled pressure when things don’t go as planned?",
    answer: `Only patience.

Problems cannot be solved in panic. You need to stay calm and keep working towards the solution.

Along with patience, determination is important. If you stay focused and keep moving towards your target, things eventually get resolved.

In this field, problems will always come. What matters is how you handle them.`,
  },
  {
    question:
      "What important skill do you think is disappearing in the new generation of engineers?",
    answer: `I feel sincerity is reducing.

Earlier, people used to keep their word and take responsibility seriously. That is becoming less common now.

Also, practical knowledge is lacking. Many engineers come to site and realise that what they learned in college is not directly applicable. Because of that, they lose interest in site work.

Basic things like measurements, supervision, and execution are not well understood. These are very important, but they are not taught properly in college.`,
  },
  {
    question: "Where do you see a “ticking time bomb” in the industry today?",
    answer: `The biggest issue is lack of practical exposure.

Many students come for internships just to complete reports, not to actually learn. That mindset is a problem.

If this continues, we will have engineers who have degrees but are not ready for real work.

This field depends heavily on practical understanding. Without that, it becomes very difficult to handle real responsibilities.`,
  },
  {
    question:
      "What is your survival advice for graduate engineers entering the industry today?",
    answer: `Ask questions. That is the most important thing.

Take interest in drawings and learn how to read them properly. Understand how work is executed on site. Observe how labour and teams are managed.

Many engineers hesitate to ask questions or do not pay attention. Because of that, even after working for years, they still do not understand how things are actually done.

If you stay curious, ask questions, and learn from the site, you can achieve a lot in this field.`,
  },
];

const rightsNote = [
  "Interview conducted and curated by Manali Lokare.",
  "Published with permission from the interviewee.",
  "© 2026 Manali Lokare. All rights reserved.",
  "This interview is part of the Dinosaur Series. Content may not be reused or redistributed without permission.",
];

const archive = [
  {
    title: "Jaweed Shaikh",
    subtitle: "Decades of experience across India and the Middle East",
    note: "Site experience, patience, and practical judgement.",
  },
  {
    title: "Next conversation",
    subtitle: "Coming soon",
    note: "A place for the next engineer in the series.",
  },
];

const projectImages = [
  { src: "/images/jaweed-project1.jpg", alt: "Project 1 related to Jaweed Shaikh" },
  { src: "/images/jaweed-project2.jpg", alt: "Project 2 related to Jaweed Shaikh" },
  { src: "/images/jaweed-project3.jpg", alt: "Project 3 related to Jaweed Shaikh" },
];

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <div className="max-w-5xl mx-auto px-6 py-8 md:py-12">
        <nav className="flex items-center justify-between border-b border-stone-200 pb-4 mb-10">
          <div>
            <p className="text-lg font-semibold">Dinosaur Series</p>
            <p className="text-sm text-stone-500">
              A personal archive of conversations with senior engineers
            </p>
          </div>
          <div className="hidden md:flex gap-6 text-sm text-stone-600">
            <a href="#about" className="hover:text-stone-900 transition-colors">
              About
            </a>
            <a
              href="#featured"
              className="hover:text-stone-900 transition-colors"
            >
              Featured
            </a>
            <a
              href="#archive"
              className="hover:text-stone-900 transition-colors"
            >
              Archive
            </a>
          </div>
        </nav>

        <header className="mb-14">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500 mb-3">
            Conversations with experienced engineers
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight max-w-4xl">
            Lessons from engineers shaped by experience!
          </h1>
          <p className="mt-5 text-base md:text-lg leading-8 text-stone-700 max-w-3xl">
            This is a simple personal webpage for my Dinosaur Series. Each
            conversation captures practical lessons, judgement, mistakes, and
            insights that rarely appear in textbooks but shape real engineering
            work.
          </p>
        </header>

        <section id="about" className="mb-14">
          <div className="bg-white rounded-3xl border border-stone-200 shadow-sm p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4">About the series</h2>
            <div className="space-y-4 text-stone-700 leading-8">
              <p>
                I started this series to document conversations with senior
                engineers whose experience spans decades, countries, projects,
                and challenges.
              </p>
              <p>
                The goal is to understand what young engineers often do not hear
                enough about: site judgement, accountability, practical
                learning, and the habits that make someone dependable in the
                field.
              </p>
            </div>
          </div>
        </section>

        <section id="featured" className="mb-14">
          <div className="mb-5">
            <p className="text-sm uppercase tracking-[0.18em] text-stone-500 mb-2">
              Featured conversation
            </p>
            <h2 className="text-2xl font-semibold">Jaweed Shaikh</h2>
            <p className="text-stone-600 mt-1">
              Decades of experience across India and the Middle East
            </p>
          </div>

          <article className="bg-white rounded-3xl border border-stone-200 shadow-sm p-6 md:p-8">
            <div className="mb-8">
              <img
                src="/images/jaweed.jpg"
                alt="Jaweed Shaikh"
                className="w-full max-h-[520px] object-cover rounded-2xl border border-stone-200"
              />
            </div>

            <div className="space-y-4 text-stone-700 leading-8 mb-10">
              <p className="text-sm uppercase tracking-[0.14em] text-stone-500">
                Interview by Manali Lokare
              </p>
              {featuredIntro.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="mb-12">
              <p className="text-sm uppercase tracking-[0.14em] text-stone-500 mb-3">
                Project gallery
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {projectImages.map((image, index) => (
                  <div
                    key={index}
                    className="overflow-hidden rounded-2xl border border-stone-200 bg-stone-100"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-10">
              {featuredQA.map((item, index) => (
                <div key={index}>
                  <p className="text-sm uppercase tracking-[0.14em] text-stone-400 mb-2">
                    Question {index + 1}
                  </p>
                  <h3 className="text-xl font-semibold mb-3 leading-8">
                    {item.question}
                  </h3>
                  <div className="text-stone-700 leading-8 whitespace-pre-line">
                    {item.answer}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-stone-200">
              <h3 className="text-xl font-semibold mb-4">My Takeaway</h3>
              <div className="space-y-4 text-stone-700 leading-8">
                <p>
                  What stayed with me after this conversation is how strongly he
                  emphasised simple things like being on site, asking questions,
                  staying patient, and actually wanting to learn.
                </p>
                <p>
                  They sound basic, but clearly they are not easy to practice.
                  And over time, they seem to be what really shape an engineer.
                </p>
              </div>

              <div className="mt-10 pt-6 border-t border-stone-200 space-y-3 text-sm text-stone-500 leading-7">
                {rightsNote.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
            </div>
          </article>
        </section>

        <section id="archive" className="mb-10">
          <div className="mb-5">
            <p className="text-sm uppercase tracking-[0.18em] text-stone-500 mb-2">
              Archive
            </p>
            <h2 className="text-2xl font-semibold">All conversations</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {archive.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl border border-stone-200 shadow-sm p-6"
              >
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
