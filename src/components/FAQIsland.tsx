import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I need to be in shape to start?",
    answer: "Absolutely not. In fact, most people who think they're 'in shape' are humbled pretty quickly on the mats. BJJ is a different kind of fitness - it's functional, practical, and actually useful. You'll get in shape while learning to defend yourself. Win-win."
  },
  {
    question: "Is this just for girls who want to compete?",
    answer: "Nope! This is for any girl who wants to feel confident, capable, and less like a walking target. Whether you want to compete, just learn self-defense, or work through some stuff by choking people (again, consensually), you're welcome here. No judgment."
  },
  {
    question: "What should I wear to class?",
    answer: "Comfortable athletic clothes. Leggings, t-shirt, something you can move in. No jewelry (it'll get ripped off anyway). No baggy clothes with strings and pockets (choking hazards, ironically). And please, for the love of all that is holy, clip your toenails."
  },
  {
    question: "How is this different from the self-defense class my school offers?",
    answer: "Your school probably teaches you to yell 'NO!' really loud and poke someone in the eyes. While those aren't terrible ideas, they're incomplete. Here, you'll learn actual martial arts techniques that work against resisting opponents - not just compliant partners who pretend to be scared of your limp wrist strikes."
  },
  {
    question: "Will I get hurt?",
    answer: "You'll get bruises. You'll be sore. You'll discover muscles you didn't know existed. But actual injuries? Rare. We practice controlled techniques in a safe environment. BJJ is actually safer than most ball sports. And unlike soccer, you can tap out when you've had enough."
  },
  {
    question: "What's the difference between private and group classes?",
    answer: "Private classes mean personalized attention, customized curriculum, and training at your own pace. No keeping up with the class, no waiting your turn, no awkward partner rotations with strangers. Currently, we specialize in private sessions for maximum effectiveness."
  },
  {
    question: "How long does it take to get good?",
    answer: "Define 'good.' You'll learn useful self-defense techniques in your first few sessions. You'll feel confident after a few months. You'll be dangerous after a year. But remember: the goal isn't to become a cage fighter - it's to never feel helpless again."
  },
  {
    question: "What if I'm really small/weak?",
    answer: "PERFECT. That's literally the whole point of BJJ. It was designed for smaller people to defend themselves against larger opponents. Physics doesn't care about your bicep size. Leverage, timing, and technique beat strength every single time. Stop making excuses and book a class."
  },
  {
    question: "Do I need to buy a gi (uniform) right away?",
    answer: "Not immediately. Start in athletic wear and see if you actually like it first. If you stick around, yes, you'll want a gi. But don't be that person who buys all the gear on day one and quits after a week. We've seen it happen."
  },
  {
    question: "Can I bring a friend?",
    answer: "Sure! Training with friends is great for accountability. Just know that you'll probably choke each other at some point, and it might get weird. But hey, nothing says friendship like mutual strangulation practice, right?"
  }
];

export default function FAQIsland() {
  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-16 fade-up">
          <p className="text-[#6143a5] font-bold text-sm uppercase tracking-wide mb-2">
            Questions? We Got Answers.
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            The honest answers you won't find on other martial arts websites.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="fade-up">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 fade-up">
          <p className="text-gray-600 mb-6">
            Still have questions? Or ready to stop overthinking and just start?
          </p>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('open-contact-dialog'))}
            className="bg-[#6143a5] text-white px-8 py-4 font-bold text-lg hover:bg-[#4a3380] transition-all shadow-xl hover:shadow-2xl"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
}
