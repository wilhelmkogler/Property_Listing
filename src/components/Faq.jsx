function FAQ() {
    const faqs = [
      {
        question: "How do I book a property viewing?",
        answer: "Click on 'View' and fill the form or contact the agent directly.",
      },
      {
        question: "Are the listings verified?",
        answer: "Yes, all properties are manually reviewed by our team.",
      },
      {
        question: "Do I have to pay any commission?",
        answer: "No, buyers pay no additional fees using LINEVO.",
      },
      {
        question: "Can foreigners buy properties?",
        answer: "Yes, we assist international buyers throughout the process.",
      },
      {
        question: "Can I request a virtual tour?",
        answer: "Yes, many listings offer video or live virtual tours.",
      },
      {
        question: "Is mortgage assistance available?",
        answer: "Yes, we connect you with trusted mortgage advisors.",
      },
    ];
  
    return (
      <section
        className="relative bg-cover bg-center py-10 text-white"
        style={{ backgroundImage: "url('/img/2.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40 z-0 backdrop-blur-sm"></div>
  
        <div className="relative z-10 max-w-6xl mx-auto px-4 ">
          <h2 className="text-3xl md:text-4xl text-center font-bold mb-12">Frequently Asked Questions</h2>
  
          <div className="grid gap-6 sm:grid-cols-2">
            {faqs.map((faq, i) => (
              <div key={i} className=" text-gray-800 rounded-xl p-6 ">
                <h3 className="text-xl font-semibold text-white mb-4">{faq.question}</h3>
                <p className="text-sm text-white">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default FAQ;
  