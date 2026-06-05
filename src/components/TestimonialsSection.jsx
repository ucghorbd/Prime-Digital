function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rahim Ahmed",
      role: "Active User",
      text: "The interface feels clean, fast, and easy to navigate on mobile."
    },
    {
      name: "Nusrat Jahan",
      role: "Member",
      text: "The layout is simple but premium, and everything is well organized."
    },
    {
      name: "Md Hasan",
      role: "User",
      text: "Perfect for a modern earning platform with a professional look."
    }
  ];

  return (
    <section id="testimonials" className="section">
      <div className="section__header">
        <p className="section__eyebrow">Testimonials</p>
        <h2 className="section__title">What users say</h2>
        <p className="section__subtitle">
          Placeholder testimonials you can replace later with real content.
        </p>
      </div>

      <div className="testimonials">
        {testimonials.map((item) => (
          <article key={item.name} className="testimonialCard">
            <p className="testimonialCard__text">“{item.text}”</p>
            <div className="testimonialCard__meta">
              <strong>{item.name}</strong>
              <span>{item.role}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSection;
