import { SectionHeader } from '@/components/SectionHeader';
import { TestimonialCard } from '@/components/TestimonialCard';

export const metadata = {
  title: 'Client Testimonials | Hoi Wing Ng',
  description: 'Read placeholder testimonials highlighting the value of strategic, premium real estate guidance in Silicon Valley and the Bay Area.',
};

export default function TestimonialsPage() {
  return (
    <div className="space-y-20 px-6 py-16 md:py-20">
      <section className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Testimonials"
          title="Thoughtful feedback from clients who value a premium advisory experience"
          description="These cards are placeholders until verified reviews are available. They reflect the tone of trust, care, and strategic support that Hoi brings to every relationship."
        />
      </section>
      <section className="mx-auto max-w-6xl grid gap-6 lg:grid-cols-3">
        <TestimonialCard
          headline="Client testimonial placeholder"
          text="Replace this with verified review text from Zillow, Google, or another trusted source."
          note="Verified review placeholder"
        />
        <TestimonialCard
          headline="Client testimonial placeholder"
          text="Replace this with verified review text from Zillow, Google, or another trusted source."
          note="Verified review placeholder"
        />
        <TestimonialCard
          headline="Client testimonial placeholder"
          text="Replace this with verified review text from Zillow, Google, or another trusted source."
          note="Verified review placeholder"
        />
      </section>
    </div>
  );
}
