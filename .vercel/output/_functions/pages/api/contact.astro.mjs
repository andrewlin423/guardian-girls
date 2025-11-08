import { z } from 'zod';
export { renderers } from '../../renderers.mjs';

const ContactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(1, "Phone is required"),
  age: z.string().optional(),
  experience: z.string().optional(),
  goals: z.string().optional(),
  availability: z.string().optional(),
  message: z.string().optional()
});
const POST = async ({ request }) => {
  try {
    const body = await request.json();
    const validatedData = ContactFormSchema.parse(body);
    console.log("Contact form submission received:", validatedData);
    return new Response(
      JSON.stringify({
        success: true,
        message: "Form submitted successfully! (Email integration pending - check server logs)"
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    if (error instanceof z.ZodError) {
      return new Response(
        JSON.stringify({
          error: "Validation failed",
          details: error.errors
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
