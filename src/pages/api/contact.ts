import type { APIRoute } from 'astro';
import { z } from 'zod';

// Validation schema for contact form
const ContactFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(1, 'Phone is required'),
  age: z.string().optional(),
  experience: z.string().optional(),
  goals: z.string().optional(),
  availability: z.string().optional(),
  message: z.string().optional(),
});

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();

    // Validate form data
    const validatedData = ContactFormSchema.parse(body);

    // TODO: Set up Resend API
    //
    // INSTRUCTIONS FOR FUTURE SETUP:
    // 1. Get your Resend API key from https://resend.com/api-keys
    // 2. Add RESEND_API_KEY to your Vercel environment variables
    // 3. Add CONTACT_TO_EMAIL (where you want to receive emails) to Vercel env vars
    // 4. Uncomment the code below and remove this TODO block
    //
    // Example Resend implementation:
    /*
    import { Resend } from 'resend';

    const resend = new Resend(import.meta.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: 'Guardian Girls <onboarding@resend.dev>',
      to: [import.meta.env.CONTACT_TO_EMAIL || 'lissy@guardiangirls.com'],
      subject: `New Contact Form Submission from ${validatedData.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Phone:</strong> ${validatedData.phone}</p>
        ${validatedData.age ? `<p><strong>Student Age:</strong> ${validatedData.age}</p>` : ''}
        ${validatedData.experience ? `<p><strong>Previous Experience:</strong> ${validatedData.experience}</p>` : ''}
        ${validatedData.goals ? `<p><strong>Training Goals:</strong> ${validatedData.goals}</p>` : ''}
        ${validatedData.availability ? `<p><strong>Availability:</strong> ${validatedData.availability}</p>` : ''}
        ${validatedData.message ? `<p><strong>Additional Message:</strong> ${validatedData.message}</p>` : ''}
      `
    });

    if (error) {
      console.error('Resend error:', error);
      return new Response(JSON.stringify({ error: 'Failed to send email' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    */

    // For now, just log the form submission
    console.log('Contact form submission received:', validatedData);

    // Return success response
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Form submitted successfully! (Email integration pending - check server logs)'
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );

  } catch (error) {
    console.error('Contact form error:', error);

    if (error instanceof z.ZodError) {
      return new Response(
        JSON.stringify({
          error: 'Validation failed',
          details: error.errors
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
};
