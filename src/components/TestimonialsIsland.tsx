import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah M.",
    age: 14,
    quote: "I used to be scared of walking home alone. Now I'm just annoyed when people get in my way. Thanks Lissy for making me both safer AND more sarcastic.",
    avatar: "SM"
  },
  {
    name: "Jessica L.",
    age: 16,
    quote: "My mom made me do this because she was worried about me going to college. Joke's on her - I actually love it. Now she's worried I'm too confident. Can't win.",
    avatar: "JL"
  },
  {
    name: "Emma K.",
    age: 12,
    quote: "The bully at school grabbed my backpack and I instinctively went for an arm bar. I stopped myself because Lissy said 'legal consequences are real,' but the look on his face was priceless. He doesn't bother me anymore.",
    avatar: "EK"
  },
  {
    name: "Rachel T.",
    age: 15,
    quote: "I thought self-defense classes would be awkward and boring. Turns out choking your instructor is both empowering and therapeutic. 10/10 recommend.",
    avatar: "RT"
  },
  {
    name: "Mia P.",
    age: 13,
    quote: "Best part? My dad tried to test me and I absolutely wrecked him. He's proud and also slightly terrified. Perfect.",
    avatar: "MP"
  },
  {
    name: "Amanda R.",
    age: 17,
    quote: "I came in thinking I'd learn some basic self-defense moves. I left my first month knowing I could handle myself better than most guys my age. The confidence boost alone is worth it.",
    avatar: "AR"
  }
];

export default function TestimonialsIsland() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const next = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-[#6143a5] to-[#4a3380] text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 fade-up">
          <p className="text-purple-200 font-bold text-sm uppercase tracking-wide mb-2">
            Don't Just Take Our Word For It
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Student Success Stories
          </h2>
          <p className="text-xl text-purple-100">
            Real testimonials from real students (yes, we checked).
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto fade-up">
          <div className="relative">
            {/* Testimonial Card */}
            <div className="bg-white text-gray-900 rounded-2xl shadow-2xl p-8 md:p-12 min-h-[300px] flex flex-col justify-between">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-[#6143a5] text-white flex items-center justify-center text-xl font-bold mr-4">
                    {testimonials[current].avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-xl">{testimonials[current].name}</h4>
                    <p className="text-gray-500">Age {testimonials[current].age}</p>
                  </div>
                </div>

                <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed italic">
                  "{testimonials[current].quote}"
                </blockquote>
              </div>

              {/* Dots Navigation */}
              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setCurrent(index);
                    }}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === current
                        ? 'bg-[#6143a5] w-8'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 bg-white text-[#6143a5] rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 bg-white text-[#6143a5] rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 fade-up">
          <p className="text-purple-100 mb-6 text-lg">
            Ready to write your own success story?
          </p>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('open-contact-dialog'))}
            className="bg-white text-[#6143a5] px-8 py-4 rounded-lg font-bold text-lg hover:bg-purple-50 transition-all shadow-xl hover:shadow-2xl"
          >
            Start Training Today
          </button>
        </div>
      </div>
    </section>
  );
}
