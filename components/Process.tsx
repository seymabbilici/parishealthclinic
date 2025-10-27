'use client';

interface ProcessProps {
  title: string;
  steps: Array<{ step: string; title: string; description: string }>;
}

export default function Process({ title, steps }: ProcessProps) {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {steps.map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-clinic text-white rounded-full flex items-center justify-center font-bold text-xl">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1 pb-8 border-l-2 border-purple-clinic/20 pl-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

