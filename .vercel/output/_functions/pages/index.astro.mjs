import { e as createComponent, f as createAstro, h as addAttribute, k as renderHead, l as renderSlot, n as renderScript, r as renderTemplate, m as maybeRenderHead, o as renderComponent } from '../chunks/astro/server_Bd0Fur7x.mjs';
import { clsx } from 'clsx';
/* empty css                                 */
import { jsx, jsxs } from 'react/jsx-runtime';
import * as React from 'react';
import { useState, useEffect } from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title = "Guardian Girls - Private BJJ & Self-Defense for Girls",
    description = "Empowering girls through private Brazilian Jiu-Jitsu and self-defense training with black belt instructor Lissy."
  } = Astro2.props;
  return renderTemplate`<html lang="en" class="scroll-smooth"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="description"${addAttribute(description, "content")}><title>${title}</title><!-- Open Graph / Social Media --><meta property="og:type" content="website"><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><!-- Preload critical fonts if needed -->${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} ${renderScript($$result, "/Users/andrewlin/Darkfield Code/guardian-girls/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "/Users/andrewlin/Darkfield Code/guardian-girls/src/layouts/BaseLayout.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header id="header" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-sm shadow-md" data-astro-cid-3ef6ksr2> <nav class="container mx-auto px-4 py-4 flex items-center justify-between" data-astro-cid-3ef6ksr2> <a href="#hero" class="text-2xl font-bold text-[#6143a5] hover:text-[#4a3380] transition-colors" data-astro-cid-3ef6ksr2>
Guardian Girls
</a> <!-- Desktop Navigation --> <ul class="hidden md:flex items-center gap-8" data-astro-cid-3ef6ksr2> <li data-astro-cid-3ef6ksr2><a href="#hero" class="nav-link" data-astro-cid-3ef6ksr2>Home</a></li> <li data-astro-cid-3ef6ksr2><a href="#about" class="nav-link" data-astro-cid-3ef6ksr2>About</a></li> <li data-astro-cid-3ef6ksr2><a href="#kids" class="nav-link" data-astro-cid-3ef6ksr2>Training</a></li> <li data-astro-cid-3ef6ksr2><a href="#gallery" class="nav-link" data-astro-cid-3ef6ksr2>Gallery</a></li> <li data-astro-cid-3ef6ksr2><a href="#faq" class="nav-link" data-astro-cid-3ef6ksr2>FAQ</a></li> <li data-astro-cid-3ef6ksr2><a href="#testimonials" class="nav-link" data-astro-cid-3ef6ksr2>Testimonials</a></li> </ul> <!-- CTA Button --> <button id="header-cta" class="bg-[#6143a5] text-white px-6 py-2 font-medium hover:bg-[#4a3380] transition-colors shadow-md hover:shadow-lg" data-astro-cid-3ef6ksr2>
Book Intro Class
</button> <!-- Mobile Menu Button --> <button id="mobile-menu-btn" class="md:hidden p-2" data-astro-cid-3ef6ksr2> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-3ef6ksr2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" data-astro-cid-3ef6ksr2></path> </svg> </button> </nav> <!-- Mobile Menu --> <div id="mobile-menu" class="hidden md:hidden bg-white border-t" data-astro-cid-3ef6ksr2> <ul class="flex flex-col p-4 gap-4" data-astro-cid-3ef6ksr2> <li data-astro-cid-3ef6ksr2><a href="#hero" class="nav-link block" data-astro-cid-3ef6ksr2>Home</a></li> <li data-astro-cid-3ef6ksr2><a href="#about" class="nav-link block" data-astro-cid-3ef6ksr2>About</a></li> <li data-astro-cid-3ef6ksr2><a href="#kids" class="nav-link block" data-astro-cid-3ef6ksr2>Training</a></li> <li data-astro-cid-3ef6ksr2><a href="#gallery" class="nav-link block" data-astro-cid-3ef6ksr2>Gallery</a></li> <li data-astro-cid-3ef6ksr2><a href="#faq" class="nav-link block" data-astro-cid-3ef6ksr2>FAQ</a></li> <li data-astro-cid-3ef6ksr2><a href="#testimonials" class="nav-link block" data-astro-cid-3ef6ksr2>Testimonials</a></li> </ul> </div> </header>  ${renderScript($$result, "/Users/andrewlin/Darkfield Code/guardian-girls/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/andrewlin/Darkfield Code/guardian-girls/src/components/Header.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="hero" class="relative h-screen w-full overflow-hidden"> <!-- Background Image with Ken Burns effect --> <div class="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 z-10"></div> <div class="absolute inset-0 ken-burns"> <div class="relative w-full h-full bg-gray-800 flex items-center justify-center text-white text-2xl font-bold">
[Img1: Hero - Lissy teaching girl students BJJ]
</div> </div> <!-- Content --> <div class="relative z-20 h-full flex items-center"> <div class="container mx-auto px-4"> <div class="max-w-3xl fade-up"> <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
Because "Just Scream Louder" <br> <span class="text-[#7d5bc7]">Isn't a Defense Strategy</span> </h1> <p class="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
Private Brazilian Jiu-Jitsu & Self-Defense classes for girls who are tired of
          being told to "just be careful" and want actual skills instead.
</p> <div class="flex flex-col sm:flex-row gap-4"> <button id="hero-cta" class="bg-[#6143a5] text-white px-8 py-4 font-bold text-lg hover:bg-[#4a3380] transition-all shadow-xl hover:shadow-2xl hover:scale-105">
Book Your Free Intro Class
</button> <a href="#about" class="border-2 border-white text-white px-8 py-4 font-bold text-lg hover:bg-white/10 transition-all text-center">
Learn More
</a> </div> <p class="text-sm text-gray-300 mt-6">
* No previous experience required. Yes, even if you "can't even do a push-up" (we'll work on that).
</p> </div> </div> </div> <!-- Scroll indicator --> <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce"> <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path> </svg> </div> </section> ${renderScript($$result, "/Users/andrewlin/Darkfield Code/guardian-girls/src/components/Hero.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/andrewlin/Darkfield Code/guardian-girls/src/components/Hero.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="about" class="py-24 bg-white"> <div class="container mx-auto px-4"> <div class="grid md:grid-cols-2 gap-12 items-center"> <!-- Image Column --> <div class="fade-up"> <div class="relative overflow-hidden shadow-2xl aspect-[3/4] bg-gray-800 flex items-center justify-center text-white text-xl font-bold">
[Img2: Lissy in gi, looking badass]
<div class="absolute top-4 right-4 bg-[#6143a5] text-white px-4 py-2 font-bold">
Black Belt
</div> </div> </div> <!-- Content Column --> <div class="fade-up space-y-6"> <div> <p class="text-[#6143a5] font-bold text-sm uppercase tracking-wide mb-2">
Your Instructor
</p> <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
Meet Lissy
</h2> <p class="text-xl text-[#6143a5] font-semibold">
Black Belt in Brazilian Jiu-Jitsu & Sarcasm
</p> </div> <div class="space-y-4 text-gray-700 leading-relaxed"> <p>
Lissy isn't your typical "girl power" instructor who thinks a firm handshake and a
            confident smile will stop an attacker. She's a Brazilian Jiu-Jitsu black belt who
            believes in actual, practical self-defense techniques that work even if you're
            5'2" and weigh 110 lbs.
</p> <p>
With over 15 years of experience choking people (consensually, in controlled
            environments), Lissy has dedicated her life to teaching girls that they don't need
            to be bigger or stronger - they just need to be smarter. And maybe a little meaner.
</p> <p>
Her philosophy is simple: <strong>Nobody should ever feel helpless.</strong> Whether
            it's dealing with a bully at school, walking alone at night, or just wanting to feel
            more confident in your own skin, Lissy provides private, personalized training that
            actually prepares you for real-world situations.
</p> <p class="italic text-gray-600">
"I don't teach my students to fight. I teach them to win. There's a difference." - Lissy
</p> </div> <!-- Credentials --> <div class="grid grid-cols-2 gap-4 pt-4"> <div class="bg-gray-50 p-4"> <p class="text-3xl font-bold text-[#6143a5]">15+</p> <p class="text-sm text-gray-600">Years Training</p> </div> <div class="bg-gray-50 p-4"> <p class="text-3xl font-bold text-[#6143a5]">200+</p> <p class="text-sm text-gray-600">Students Trained</p> </div> <div class="bg-gray-50 p-4"> <p class="text-3xl font-bold text-[#6143a5]">100%</p> <p class="text-sm text-gray-600">Badass Rating</p> </div> <div class="bg-gray-50 p-4"> <p class="text-3xl font-bold text-[#6143a5]">0</p> <p class="text-sm text-gray-600">Tolerance for BS</p> </div> </div> <div> <button class="bg-[#6143a5] text-white px-8 py-3 font-semibold hover:bg-[#4a3380] transition-colors shadow-lg hover:shadow-xl cta-button">
Train With Lissy
</button> </div> </div> </div> </div> </section> ${renderScript($$result, "/Users/andrewlin/Darkfield Code/guardian-girls/src/components/About.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/andrewlin/Darkfield Code/guardian-girls/src/components/About.astro", void 0);

const $$KidsLearn = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="kids" class="py-24 bg-white" data-astro-cid-gqhhofa7> <div class="container mx-auto px-4" data-astro-cid-gqhhofa7> <!-- Section Header --> <div class="text-center mb-16 fade-up" data-astro-cid-gqhhofa7> <h2 class="text-4xl md:text-5xl font-bold text-gray-900" data-astro-cid-gqhhofa7>
What You'll Learn
</h2> </div> </div> <!-- Images Wrapper - for positioning orange rectangle --> <div class="learn-images-wrapper" data-astro-cid-gqhhofa7> <!-- Orange rectangle behind images --> <div class="orange-rectangle" data-astro-cid-gqhhofa7></div> <!-- Images Container - outside container to allow full viewport width --> <div class="learn-images-container" data-astro-cid-gqhhofa7> <div class="learn-images-grid" data-astro-cid-gqhhofa7> <!-- Image5: Escape technique demo --> <div class="fade-up learn-image-item" data-astro-cid-gqhhofa7> <div class="learn-image learn-image-5" data-astro-cid-gqhhofa7> <div class="w-full h-full flex items-center justify-center text-white font-bold text-sm" data-astro-cid-gqhhofa7>
[Image5: Escape technique demo]
</div> </div> <div class="learn-text-content" data-astro-cid-gqhhofa7> <h3 class="text-xl font-bold text-gray-900 mb-3" data-astro-cid-gqhhofa7>
Escape Techniques
</h3> <p class="text-gray-600 text-sm leading-relaxed" data-astro-cid-gqhhofa7>
Learn how to get out of holds, grabs, and uncomfortable situations. Because "freeze
            and hope for the best" is not a strategy we endorse.
</p> </div> </div> <!-- Image6: Ground fighting position --> <div class="fade-up learn-image-item" data-astro-cid-gqhhofa7> <div class="learn-image learn-image-6" data-astro-cid-gqhhofa7> <div class="w-full h-full flex items-center justify-center text-white font-bold text-sm" data-astro-cid-gqhhofa7>
[Image6: Ground fighting position]
</div> </div> <div class="learn-text-content" data-astro-cid-gqhhofa7> <h3 class="text-xl font-bold text-gray-900 mb-3" data-astro-cid-gqhhofa7>
Ground Defense
</h3> <p class="text-gray-600 text-sm leading-relaxed" data-astro-cid-gqhhofa7>
Most real fights end up on the ground. We'll teach you how to defend yourself from the
            worst positions, not just the pretty ones that look good in movies.
</p> </div> </div> <!-- Image7: Submission hold --> <div class="fade-up learn-image-item" data-astro-cid-gqhhofa7> <div class="learn-image learn-image-7" data-astro-cid-gqhhofa7> <div class="w-full h-full flex items-center justify-center text-white font-bold text-sm" data-astro-cid-gqhhofa7>
[Image7: Submission hold]
</div> </div> <div class="learn-text-content" data-astro-cid-gqhhofa7> <h3 class="text-xl font-bold text-gray-900 mb-3" data-astro-cid-gqhhofa7>
Control Techniques
</h3> <p class="text-gray-600 text-sm leading-relaxed" data-astro-cid-gqhhofa7>
Master chokes and joint locks that leverage technique over strength. You don't need
            muscles when you have physics and the element of surprise.
</p> </div> </div> <!-- Image8: Striking practice --> <div class="fade-up learn-image-item" data-astro-cid-gqhhofa7> <div class="learn-image learn-image-8" data-astro-cid-gqhhofa7> <div class="w-full h-full flex items-center justify-center text-white font-bold text-sm" data-astro-cid-gqhhofa7>
[Image8: Striking practice]
</div> </div> <div class="learn-text-content" data-astro-cid-gqhhofa7> <h3 class="text-xl font-bold text-gray-900 mb-3" data-astro-cid-gqhhofa7>
Striking Basics
</h3> <p class="text-gray-600 text-sm leading-relaxed" data-astro-cid-gqhhofa7>
Sometimes you need to throw hands. We'll teach you how to punch, elbow, and kick
            effectively - not the limp-wristed slaps you see in bad action movies.
</p> </div> </div> </div> </div> </div> </section> `;
}, "/Users/andrewlin/Darkfield Code/guardian-girls/src/components/KidsLearn.astro", void 0);

const $$Gallery = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="gallery" class="py-24 bg-white" data-astro-cid-ihllb3az> <div class="container mx-auto px-4" data-astro-cid-ihllb3az> <!-- Section Header --> <div class="text-center mb-16 fade-up" data-astro-cid-ihllb3az> <p class="text-[#6143a5] font-bold text-sm uppercase tracking-wide mb-2" data-astro-cid-ihllb3az>
See It In Action
</p> <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4" data-astro-cid-ihllb3az>
Training Gallery
</h2> <p class="text-xl text-gray-600 max-w-2xl mx-auto" data-astro-cid-ihllb3az>
Real students, real progress, real empowerment. No stock photos of
        models pretending to know jiu-jitsu.
</p> </div> </div> <!-- Gallery Wrapper --> <div class="gallery-wrapper" data-astro-cid-ihllb3az> <!-- Purple rectangle behind A2, extends to viewport edge --> <div class="purple-rectangle" data-astro-cid-ihllb3az></div> <!-- Gallery Grid Container - handles overflow --> <div class="gallery-grid-container" data-astro-cid-ihllb3az> <!-- Gallery Grid --> <div class="gallery-grid" data-astro-cid-ihllb3az> <!-- Row 1 --> <!-- Image A1: Mat work wide shot (540x760) --> <div class="fade-up a1-container" data-astro-cid-ihllb3az> <div class="relative bg-gray-800 overflow-hidden shadow-lg cursor-pointer a1-image" data-astro-cid-ihllb3az> <div class="w-full h-full flex items-center justify-center text-white font-bold text-sm" data-astro-cid-ihllb3az>
[ImgA1: Mat work wide shot]
</div> </div> </div> <!-- Image A2: Group class (same height as A1) --> <div class="fade-up a2-container" data-astro-cid-ihllb3az> <div class="relative bg-gray-800 overflow-hidden shadow-lg cursor-pointer a2-image" data-astro-cid-ihllb3az> <div class="w-full h-full flex items-center justify-center text-white font-bold text-sm" data-astro-cid-ihllb3az>
[ImgA2: Group class]
</div> </div> </div> <!-- Row 2 --> <!-- Image A3: Same size as A2 (left side) --> <div class="fade-up a3-container" data-astro-cid-ihllb3az> <div class="relative bg-gray-800 overflow-hidden shadow-lg cursor-pointer a3-image" data-astro-cid-ihllb3az> <div class="w-full h-full flex items-center justify-center text-white font-bold text-sm" data-astro-cid-ihllb3az>
[ImgA3: Student success]
</div> </div> </div> <!-- Image A4: Same size as A1 (right side) --> <div class="fade-up a4-container" data-astro-cid-ihllb3az> <div class="relative bg-gray-800 overflow-hidden shadow-lg cursor-pointer a4-image" data-astro-cid-ihllb3az> <div class="w-full h-full flex items-center justify-center text-white font-bold text-sm" data-astro-cid-ihllb3az>
[ImgA4: Sparring session]
</div> </div> </div> </div> </div> </div> <div class="container mx-auto px-4" data-astro-cid-ihllb3az> <!-- Note --> <div class="text-center mt-12 fade-up" data-astro-cid-ihllb3az> <p class="text-gray-500 italic" data-astro-cid-ihllb3az>
* Photos of actual students who gave us permission to use them. Unlike those weird stock photo sites.
</p> </div> </div> </section> `;
}, "/Users/andrewlin/Darkfield Code/guardian-girls/src/components/Gallery.astro", void 0);

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Accordion = AccordionPrimitive.Root;
const AccordionItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AccordionPrimitive.Item,
  {
    ref,
    className: cn("border-b", className),
    ...props
  }
));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ jsxs(
  AccordionPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 shrink-0 text-gray-500 transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(
  AccordionPrimitive.Content,
  {
    ref,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsx("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

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
function FAQIsland() {
  return /* @__PURE__ */ jsx("section", { id: "faq", className: "py-24 bg-gradient-to-b from-gray-50 to-white", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16 fade-up", children: [
      /* @__PURE__ */ jsx("p", { className: "text-[#6143a5] font-bold text-sm uppercase tracking-wide mb-2", children: "Questions? We Got Answers." }),
      /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold text-gray-900 mb-4", children: "Frequently Asked Questions" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600", children: "The honest answers you won't find on other martial arts websites." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "fade-up", children: /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, className: "w-full", children: faqs.map((faq, index) => /* @__PURE__ */ jsxs(AccordionItem, { value: `item-${index}`, children: [
      /* @__PURE__ */ jsx(AccordionTrigger, { className: "text-lg font-semibold text-gray-900", children: faq.question }),
      /* @__PURE__ */ jsx(AccordionContent, { className: "text-gray-600 leading-relaxed", children: faq.answer })
    ] }, index)) }) }),
    /* @__PURE__ */ jsxs("div", { className: "text-center mt-16 fade-up", children: [
      /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-6", children: "Still have questions? Or ready to stop overthinking and just start?" }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => window.dispatchEvent(new CustomEvent("open-contact-dialog")),
          className: "bg-[#6143a5] text-white px-8 py-4 font-bold text-lg hover:bg-[#4a3380] transition-all shadow-xl hover:shadow-2xl",
          children: "Get in Touch"
        }
      )
    ] })
  ] }) });
}

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
function TestimonialsIsland() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrent((prev2) => (prev2 + 1) % testimonials.length);
    }, 5e3);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);
  const next = () => {
    setIsAutoPlaying(false);
    setCurrent((prev2) => (prev2 + 1) % testimonials.length);
  };
  const prev = () => {
    setIsAutoPlaying(false);
    setCurrent((prev2) => (prev2 - 1 + testimonials.length) % testimonials.length);
  };
  return /* @__PURE__ */ jsx("section", { id: "testimonials", className: "py-24 bg-gradient-to-b from-[#6143a5] to-[#4a3380] text-white", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16 fade-up", children: [
      /* @__PURE__ */ jsx("p", { className: "text-purple-200 font-bold text-sm uppercase tracking-wide mb-2", children: "Don't Just Take Our Word For It" }),
      /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-4", children: "Student Success Stories" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-purple-100", children: "Real testimonials from real students (yes, we checked)." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto fade-up", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-white text-gray-900 shadow-2xl p-8 md:p-12 min-h-[300px] flex flex-col justify-between", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-6", children: [
            /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-[#6143a5] text-white flex items-center justify-center text-xl font-bold mr-4", children: testimonials[current].avatar }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "font-bold text-xl", children: testimonials[current].name }),
              /* @__PURE__ */ jsxs("p", { className: "text-gray-500", children: [
                "Age ",
                testimonials[current].age
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("blockquote", { className: "text-xl md:text-2xl text-gray-700 leading-relaxed italic", children: [
            '"',
            testimonials[current].quote,
            '"'
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-center gap-2 mt-8", children: testimonials.map((_, index) => /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => {
              setIsAutoPlaying(false);
              setCurrent(index);
            },
            className: `w-3 h-3 rounded-full transition-all ${index === current ? "bg-[#6143a5] w-8" : "bg-gray-300 hover:bg-gray-400"}`,
            "aria-label": `Go to testimonial ${index + 1}`
          },
          index
        )) })
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: prev,
          className: "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 bg-white text-[#6143a5] rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110",
          "aria-label": "Previous testimonial",
          children: /* @__PURE__ */ jsx(ChevronLeft, { className: "w-6 h-6" })
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: next,
          className: "absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 bg-white text-[#6143a5] rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110",
          "aria-label": "Next testimonial",
          children: /* @__PURE__ */ jsx(ChevronRight, { className: "w-6 h-6" })
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "text-center mt-16 fade-up", children: [
      /* @__PURE__ */ jsx("p", { className: "text-purple-100 mb-6 text-lg", children: "Ready to write your own success story?" }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => window.dispatchEvent(new CustomEvent("open-contact-dialog")),
          className: "bg-white text-[#6143a5] px-8 py-4 font-bold text-lg hover:bg-purple-50 transition-all shadow-xl hover:shadow-2xl",
          children: "Start Training Today"
        }
      )
    ] })
  ] }) });
}

const Dialog = DialogPrimitive.Root;
const DialogPortal = DialogPrimitive.Portal;
const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxs(
    DialogPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxs(DialogPrimitive.Close, { className: "absolute right-4 top-4 opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-gray-100", children: [
          /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = DialogPrimitive.Content.displayName;
const DialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    ),
    ...props
  }
);
DialogHeader.displayName = "DialogHeader";
const DialogTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Title,
  {
    ref,
    className: cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
const DialogDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-gray-500", className),
    ...props
  }
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

const Input = React.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-9 w-full border border-gray-200 bg-white px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-gray-950 placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#6143a5] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    "textarea",
    {
      className: cn(
        "flex min-h-[60px] w-full border border-gray-200 bg-white px-3 py-2 text-base shadow-sm placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#6143a5] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      ),
      ref,
      ...props
    }
  );
});
Textarea.displayName = "Textarea";

const Label = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "label",
  {
    ref,
    className: cn(
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      className
    ),
    ...props
  }
));
Label.displayName = "Label";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[#6143a5] text-white shadow hover:bg-[#4a3380]",
        destructive: "bg-red-500 text-white shadow-sm hover:bg-red-600",
        outline: "border border-gray-200 bg-white shadow-sm hover:bg-gray-100",
        secondary: "bg-gray-100 text-gray-900 shadow-sm hover:bg-gray-200",
        ghost: "hover:bg-gray-100",
        link: "text-[#6143a5] underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-11 px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";

function ContactDialogIsland() {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    experience: "",
    goals: "",
    availability: "",
    message: ""
  });
  useEffect(() => {
    const handleOpen = () => setOpen(true);
    window.addEventListener("open-contact-dialog", handleOpen);
    return () => window.removeEventListener("open-contact-dialog", handleOpen);
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          age: "",
          experience: "",
          goals: "",
          availability: "",
          message: ""
        });
        setTimeout(() => {
          setOpen(false);
          setSubmitStatus("idle");
        }, 2e3);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  return /* @__PURE__ */ jsx(Dialog, { open, onOpenChange: setOpen, children: /* @__PURE__ */ jsxs(DialogContent, { className: "max-w-2xl max-h-[90vh] overflow-y-auto", children: [
    /* @__PURE__ */ jsxs(DialogHeader, { children: [
      /* @__PURE__ */ jsx(DialogTitle, { className: "text-2xl font-bold text-[#6143a5]", children: "Book Your Free Intro Class" }),
      /* @__PURE__ */ jsx(DialogDescription, { children: 'Fill out the form below and Lissy will get back to you faster than you can say "rear naked choke." Usually within 24 hours.' })
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6 mt-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "name", children: "Full Name *" }),
        /* @__PURE__ */ jsx(
          Input,
          {
            id: "name",
            name: "name",
            required: true,
            value: formData.name,
            onChange: handleChange,
            placeholder: "Your name (first and last, please)"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "email", children: "Email Address *" }),
        /* @__PURE__ */ jsx(
          Input,
          {
            id: "email",
            name: "email",
            type: "email",
            required: true,
            value: formData.email,
            onChange: handleChange,
            placeholder: "your.email@example.com"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "phone", children: "Phone Number *" }),
        /* @__PURE__ */ jsx(
          Input,
          {
            id: "phone",
            name: "phone",
            type: "tel",
            required: true,
            value: formData.phone,
            onChange: handleChange,
            placeholder: "(555) 123-4567"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "age", children: "Student Age" }),
        /* @__PURE__ */ jsx(
          Input,
          {
            id: "age",
            name: "age",
            type: "number",
            value: formData.age,
            onChange: handleChange,
            placeholder: "How old is the student?"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "experience", children: "Previous Martial Arts Experience" }),
        /* @__PURE__ */ jsx(
          Input,
          {
            id: "experience",
            name: "experience",
            value: formData.experience,
            onChange: handleChange,
            placeholder: "None, some karate, black belt in Mall Ninja, etc."
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "goals", children: "What are your training goals?" }),
        /* @__PURE__ */ jsx(
          Textarea,
          {
            id: "goals",
            name: "goals",
            value: formData.goals,
            onChange: handleChange,
            placeholder: "Self-defense, confidence, competition, general badassery...",
            rows: 3
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "availability", children: "Preferred Days/Times" }),
        /* @__PURE__ */ jsx(
          Input,
          {
            id: "availability",
            name: "availability",
            value: formData.availability,
            onChange: handleChange,
            placeholder: "Weekday evenings, Saturday mornings, etc."
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "message", children: "Anything else we should know?" }),
        /* @__PURE__ */ jsx(
          Textarea,
          {
            id: "message",
            name: "message",
            value: formData.message,
            onChange: handleChange,
            placeholder: "Questions, concerns, dietary restrictions for post-training snacks...",
            rows: 4
          }
        )
      ] }),
      submitStatus === "success" && /* @__PURE__ */ jsx("div", { className: "bg-green-50 border border-green-200 text-green-800 px-4 py-3", children: "Success! We'll be in touch soon." }),
      submitStatus === "error" && /* @__PURE__ */ jsx("div", { className: "bg-red-50 border border-red-200 text-red-800 px-4 py-3", children: "Oops! Something went wrong. Please try again or email us directly." }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
        /* @__PURE__ */ jsx(
          Button,
          {
            type: "submit",
            disabled: isSubmitting,
            className: "flex-1",
            children: isSubmitting ? "Sending..." : "Send Message"
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            type: "button",
            variant: "outline",
            onClick: () => setOpen(false),
            children: "Cancel"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 text-center", children: "* We respect your privacy. Your info won't be shared or sold. We're not monsters." })
    ] })
  ] }) });
}

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-gray-900 text-gray-300 py-16"> <div class="container mx-auto px-4"> <div class="grid md:grid-cols-4 gap-12 mb-12"> <!-- Brand Column --> <div class="md:col-span-2"> <h3 class="text-2xl font-bold text-white mb-4">Guardian Girls</h3> <p class="text-gray-400 leading-relaxed mb-6">
Private Brazilian Jiu-Jitsu and self-defense training for girls who refuse to be
          helpless. Taught by black belt instructor Lissy, because mediocre self-defense is
          worse than none.
</p> <div class="flex gap-4"> <!-- Social Media Icons (placeholders) --> <a href="#" class="w-10 h-10 bg-gray-800 hover:bg-[#6143a5] flex items-center justify-center transition-colors" aria-label="Instagram"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"></path> <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path> </svg> </a> <a href="#" class="w-10 h-10 bg-gray-800 hover:bg-[#6143a5] flex items-center justify-center transition-colors" aria-label="Facebook"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path> </svg> </a> <a href="#" class="w-10 h-10 bg-gray-800 hover:bg-[#6143a5] flex items-center justify-center transition-colors" aria-label="TikTok"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"></path> </svg> </a> </div> </div> <!-- Quick Links --> <div> <h4 class="text-white font-bold mb-4">Quick Links</h4> <ul class="space-y-2"> <li><a href="#hero" class="hover:text-[#6143a5] transition-colors">Home</a></li> <li><a href="#about" class="hover:text-[#6143a5] transition-colors">About Lissy</a></li> <li><a href="#kids" class="hover:text-[#6143a5] transition-colors">Training Programs</a></li> <li><a href="#gallery" class="hover:text-[#6143a5] transition-colors">Gallery</a></li> <li><a href="#faq" class="hover:text-[#6143a5] transition-colors">FAQ</a></li> <li><a href="#testimonials" class="hover:text-[#6143a5] transition-colors">Testimonials</a></li> </ul> </div> <!-- Contact Info --> <div> <h4 class="text-white font-bold mb-4">Get in Touch</h4> <ul class="space-y-3"> <li class="flex items-start gap-2"> <svg class="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> <span>123 Main Street<br>Your City, ST 12345</span> </li> <li class="flex items-center gap-2"> <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg> <a href="mailto:lissy@guardiangirls.com" class="hover:text-[#6143a5] transition-colors">
lissy@guardiangirls.com
</a> </li> <li class="flex items-center gap-2"> <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> <a href="tel:+15551234567" class="hover:text-[#6143a5] transition-colors">
(555) 123-4567
</a> </li> </ul> </div> </div> <!-- Bottom Bar --> <div class="border-t border-gray-800 pt-8 mt-8"> <div class="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500"> <p>
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Guardian Girls. All rights reserved.
<span class="block md:inline md:ml-2">
Don't steal our content. We know where you live. (Kidding. Mostly.)
</span> </p> <div class="flex gap-6"> <a href="#" class="hover:text-[#6143a5] transition-colors">Privacy Policy</a> <a href="#" class="hover:text-[#6143a5] transition-colors">Terms of Service</a> </div> </div> </div> </div> </footer>`;
}, "/Users/andrewlin/Darkfield Code/guardian-girls/src/components/Footer.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "About", $$About, {})} ${renderComponent($$result2, "Gallery", $$Gallery, {})} ${renderComponent($$result2, "KidsLearn", $$KidsLearn, {})} ${renderComponent($$result2, "FAQIsland", FAQIsland, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/andrewlin/Darkfield Code/guardian-girls/src/components/FAQIsland", "client:component-export": "default" })} ${renderComponent($$result2, "TestimonialsIsland", TestimonialsIsland, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/andrewlin/Darkfield Code/guardian-girls/src/components/TestimonialsIsland", "client:component-export": "default" })} </main> ${renderComponent($$result2, "Footer", $$Footer, {})}  ${renderComponent($$result2, "ContactDialogIsland", ContactDialogIsland, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/andrewlin/Darkfield Code/guardian-girls/src/components/ContactDialogIsland", "client:component-export": "default" })} ` })}`;
}, "/Users/andrewlin/Darkfield Code/guardian-girls/src/pages/index.astro", void 0);

const $$file = "/Users/andrewlin/Darkfield Code/guardian-girls/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
