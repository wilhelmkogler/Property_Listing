function Reviews() {
    const reviews = [
      {
        stars: "★★★★★",
        text: "LINEVO helped us find our dream home in Madrid. The process was smooth and professional.",
        author: "– Ana R., Madrid",
      },
      {
        stars: "★★★★☆",
        text: "The agent was helpful and friendly, and we love our new apartment!",
        author: "– Javier L., Valencia",
      },
      {
        stars: "★★★★★",
        text: "I was surprised how fast and easy it was to book a viewing and close the deal.",
        author: "– Clara M., Seville",
      },
    ];
  
    return (
      <section
        className="relative bg-cover bg-center py-10 px-8 text-white"
        style={{ backgroundImage: "url('/img/7.jpg')" }}
      >
        <div className="absolute inset-0 backdrop-blur-sm bg-black/30 z-0"></div>
  
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center font-bold mb-12">What Our Clients Say</h2>
  
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r, i) => (
              <div key={i} className="bg-white text-gray-800 rounded-xl p-6 shadow-lg text-center">
                <div className="text-yellow-500 text-xl mb-2">{r.stars}</div>
                <p className="text-sm mb-4 leading-relaxed">{r.text}</p>
                <span className="text-sm italic text-gray-500">{r.author}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default Reviews;
  