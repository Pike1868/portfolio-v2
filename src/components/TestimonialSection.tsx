import TestimonialCard from "./TestimonialCard";

export default function TestimonialSection() {
    const testimonials = [
        {
            name: "Robert Fish",
            testimonial: `"I have had the pleasure of working with Luis on multiple projects, and he consistently demonstrates exceptional qualities that make him an invaluable asset. Luis is not only adept and proficient in his work but also brings a level of creativity and innovation that sets him apart. His dependability and reliability ensure that every project is completed to the highest standard. Luis's skills extend beyond the tasks at hand, showcasing his capability in tackling complex challenges. His perceptive and helpful approach has been instrumental in our marketing and web development work, making the process smooth and efficient. In every interaction, Luis proves to be trustworthy and smart, with an innate ability to solve problems creatively. I highly recommend Luis for any marketing or web development work."`,
            role: "Managing Partner",
            company: "Voluntary Benefits at Work",
            image: "/bob-fish-img.png",
        },
    ];
    return (
        <section
            className="bg-white dark:bg-gray-800 p-6 py-16 rounded-lg shadow mb-8"
            id="testimonials"
        >
            <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white text-center">
                Testimonials
            </h2>
            <div className="grid grid-cols-1 gap-8 justify-items-center mx-auto">
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard
                        key={index}
                        name={testimonial.name}
                        role={testimonial.role}
                        company={testimonial.company}
                        testimonial={testimonial.testimonial}
                        image={testimonial.image}
                    />
                ))}
            </div>
        </section>
    );
}
