function FAQSection() {
  const faqs = [
    {
      question: "How do I customize the content later?",
      answer:
        "You can replace the text, images, and buttons from the component files without changing the layout."
    },
    {
      question: "Is this responsive for mobile and tablet?",
      answer:
        "Yes, the layout is built to adapt nicely on mobile, tablet, and desktop screens."
    },
    {
      question: "Can I connect Firebase later?",
      answer:
        "Yes, the structure is already prepared for Firebase Authentication and Firestore integration."
    }
  ];

  return (
    <section id="faq" className="section section--alt">
      <div className="section__header">
        <p className="section__eyebrow">FAQ</p>
        <h2 className="section__title">Frequently asked questions</h2>
        <p className="section__subtitle">
          Useful answers for the most common setup questions.
        </p>
      </div>

      <div className="faq">
        {faqs.map((item) => (
          <details key={item.question} className="faq__item">
            <summary className="faq__question">{item.question}</summary>
            <p className="faq__answer">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export default FAQSection;
