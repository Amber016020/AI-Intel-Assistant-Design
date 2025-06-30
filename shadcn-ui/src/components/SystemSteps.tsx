import { useState } from 'react';

const steps = [
  {
    src: '/images/step1.png',
    alt: 'Step 1: Input Prompt',
    caption: 'Step 1: User enters a task prompt to start the agent system.',
  },
  {
    src: '/images/step2.png',
    alt: 'Step 2: Agents Collaborate',
    caption: 'Step 2: Multiple AI agents analyze and divide the task.',
  },
  {
    src: '/images/step3.png',
    alt: 'Step 3: Integrated Insight',
    caption: 'Step 3: Final result is presented as a summarized insight.',
  },
];

export default function SystemSteps() {
  const [modalImage, setModalImage] = useState<string | null>(null);

  return (
    <section className="py-12 px-4 md:px-16 bg-black relative">
      <h2 className="text-2xl font-bold mb-8 text-center">System Walkthrough</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <div
            key={i}
            className="text-center overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer"
            onClick={() => setModalImage(step.src)}
          >
            <img
              src={step.src}
              alt={step.alt}
              className="rounded-xl mx-auto mb-4 w-full max-w-xs"
            />
            <p className="text-sm text-muted-foreground">{step.caption}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur z-50 flex items-center justify-center"
          onClick={() => setModalImage(null)}
        >
          <img src={modalImage} alt="Enlarged" className="max-w-full max-h-full rounded-lg" />
        </div>
      )}
    </section>
  );
}
