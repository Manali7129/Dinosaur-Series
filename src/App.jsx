import React from "react";

const featuredQA = [
  {
    q: "What initially sparked your interest in civil engineering, and what was the milestone project that defined your early career?",
    a: `Civil just felt like the most interesting branch at the time. Admission was based on merit, and I got into it, but once I started working, I realised how much responsibility this field carries.

My first project was the Bhabha Atomic Research Centre in Kota. That was my starting point. It gave me my first real exposure to how projects actually run and how serious the work is.

Another important project I worked on was in Saudi Arabia, on the eastern coast. That is where I really learned how to handle people, understand drawings properly, and take ownership of work. These were all time-bound projects, and the speed and pressure taught me discipline early in my career. Those experiences shaped me as an engineer.`
  },
  {
    q: "Looking back at your first decade, what was the biggest gap between university learning and actual site experience?",
    a: `The gap is very large. Theory and practice are completely different.

In college, you learn concepts, formulas, and codes. But on site, the work is very different. You are dealing with execution, coordination, sequencing, and real-time problem solving. None of that is properly taught in university.

Unless you go into structural design, most of what you study does not directly match what you see on site. Real learning begins when you step into the field and start dealing with actual work conditions.`
  },
  {
    q: "Have you ever walked onto a site and sensed something was wrong without checking drawings or data?",
    a: `Yes, but that comes with experience.

In my first six years, I mostly worked in the office. After that, I spent more time on site, and that is when I started developing this understanding.

Now, when I walk onto a site, I can often sense if something is wrong even without checking drawings or books. That comes from repeatedly seeing the same work and understanding how it should look.

For example, after concreting, even the colour of the concrete can sometimes tell you whether something is right or not. That kind of judgement is not taught anywhere. It develops only through site experience.`
  },
  {
    q: "What are 2–3 unwritten rules of engineering that you won’t find in textbooks?",
    a: `It is simple.

You have to be on site. That is the first thing. You cannot understand engineering properly without being there.

Second, you have to be honest with your learning. If you do not know something, accept it and learn it properly.

Third, you need patience. In this field, we repeat the same processes again and again. Many people lose interest because of that. But that repetition is what builds perfection and confidence.

So patience and consistency are very important.`
  },
  {
    q: "How do you balance gut feeling with technical data when they don’t match?",
    a: `On site, the condition itself tells you a lot.

When you observe the work closely, you can understand what is right and what is wrong. That understanding becomes your instinct over time.

But this is not guesswork. It comes from experience. If something feels off, it means you need to check it more carefully.

So gut feeling and technical knowledge are not separate. Your gut feeling is built from your technical experience on site.`
  },
  {
    q: "Can you share a mistake or near-miss that changed how you approach engineering?",
    a: `Yes, one incident I clearly remember was in Saudi Arabia.

I almost missed including a pumphouse building in the final billing. It was a big amount, around 3.5 million dollars, and I realised it very late.

To correct it, I worked continuously for 72 hours to complete the structure before inspection. My team supported me, and we managed to finish it on time.

That experience taught me how important it is to pay attention to every detail. Small oversights can turn into major problems. It also showed me the importance of teamwork when you are under pressure.`
  },
  {
    q: "How have you handled pressure when things don’t go as planned?",
    a: `Only patience.

Problems cannot be solved in panic. You need to stay calm and keep working towards the solution.

Along with patience, determination is important. If you stay focused and keep moving towards your target, things eventually get resolved.

In this field, problems will always come. What matters is how you handle them.`
  },
  {
    q: "What important skill do you think is disappearing in the new generation of engineers?",
    a: `I feel sincerity is reducing.

Earlier, people used to keep their word and take responsibility seriously. That is becoming less common now.

Also, practical knowledge is lacking. Many engineers come to site and realise that what they learned in college is not directly applicable. Because of that, they lose interest in site work.

Basic things like measurements, supervision, and execution are not well understood. These are very important, but they are not taught properly in college.`
  },
  {
    q: "Where do you see a “ticking time bomb” in the industry today?",
    a: `The biggest issue is lack of practical exposure.

Many students come for internships just to complete reports, not to actually learn. That mindset is a problem.

If this continues, we will have engineers who have degrees but are not ready for real work.

This field depends heavily on practical understanding. Without that, it becomes very difficult to handle real responsibilities.`
  },
  {
    q: "What is your survival advice for graduate engineers entering the industry today?",
    a: `Ask questions. That is the most important thing.

Take interest in drawings and learn how to read them properly. Understand how work is executed on site. Observe how labour and teams are managed.

Many engineers hesitate to ask questions or do not pay attention. Because of that, even after working for years, they still do not understand how things are actually done.

If you stay curious, ask questions, and learn from the site, you can achieve a lot in this field.`
  }
];

export default function App() {
  return (
    <div style={{ maxWidth: "800px", margin: "40px auto", fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>
      
      <h5 style={{ letterSpacing: "2px", color: "#888" }}>FEATURED CONVERSATION</h5>
      <h1>Jaweed Shaikh</h1>
      <p style={{ color: "#666" }}>Decades of experience across India and the Middle East</p>

      <p>
        As part of my Dinosaur Series, I had a conversation with Jaweed Shaikh, who has decades of experience across India and the Middle East, about early career lessons, site intuition, mistakes that stay with you, and what young engineers need to learn if they want to grow.
      </p>
      <p>
        What stood out was how simply he explained things that usually take years to understand. His perspective comes from years on site, dealing with real work, real pressure, and real responsibility.
      </p>

      {featuredQA.map((item, index) => (
        <div key={index} style={{ marginTop: "30px" }}>
          <h4 style={{ color: "#999" }}>QUESTION {index + 1}</h4>
          <h3>{item.q}</h3>
          <p style={{ whiteSpace: "pre-line" }}>{item.a}</p>
        </div>
      ))}

      <hr style={{ margin: "40px 0" }} />

      <h3>Takeaway</h3>
      <p>
        What stayed with me after this conversation is how strongly he emphasised simple things like being on site, asking questions, staying patient, and actually wanting to learn.
      </p>
      <p>
        They sound basic, but clearly they are not easy to practice. And over time, they seem to be what really shape an engineer.
      </p>

      <p style={{ marginTop: "50px", fontSize: "14px", color: "#777" }}>
        © Manali Lokare. All rights reserved. This interview is part of the Dinosaur Series. Content published with permission. Not for reuse or distribution without consent.
      </p>

    </div>
  );
}
