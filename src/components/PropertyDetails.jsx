function PropertyDetails() {
    return (
      <section className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-14 ">
        {/* Cím + ár + helyszín */}
        <div className="flex flex-row justify-between items-center mb-6">
          <div>
            <h1 className="text-lg md:text-4xl font-bold text-gray-900">Modern Mansion</h1>
            <p className="text-sm md:text-lg text-gray-600 mt-4">Madrid, Spain</p>
          </div>
          <div className="text-right md:mt-0">
            <p className="text-lg md:text-4xl font-bold text-emerald-600">525.000 €</p>
            <p className="text-sm md:text-lg text-gray-400 mt-4">VAT included</p>
          </div>
        </div>
  
        {/* Specifikációk + térkép */}
        <div className="flex flex-col md:flex-row gap-2">
          {/* Táblázat (specifikációk) */}
          <div className="flex-1">
            <table className="w-full mb-16 md:mb-0 text-sm md:text-lg leading-10 text-left text-gray-700">
              <tbody>
                <tr>
                  <td className="py-2"><strong>Size:</strong> 150 m²</td>
                  <td className="py-2"><strong>Bedrooms:</strong> 4</td>
                </tr>
                <tr>
                  <td className="py-2"><strong>Bathrooms:</strong> 3</td>
                  <td className="py-2"><strong>Garage:</strong> Yes</td>
                </tr>
                <tr>
                  <td className="py-2"><strong>Floors:</strong> 2nd</td>
                  <td className="py-2"><strong>Year Built:</strong> 2018</td>
                </tr>
                <tr>
                  <td className="py-2"><strong>Heating:</strong> Central</td>
                  <td className="py-2"><strong>Condition:</strong> Excellent</td>
                </tr>
                <tr>
                  <td className="py-2"><strong>Orientation:</strong> South</td>
                  <td className="py-2"><strong>Balcony:</strong> Yes</td>
                </tr>
                <tr>
                  <td className="py-2"><strong>Energy Rating:</strong> B+</td>
                  <td className="py-2"><strong>Internet:</strong> Fiber Optic</td>
                </tr>
                <tr>
                  <td className="py-2"><strong>Air Conditioning:</strong> Yes</td>
                  <td className="py-2"><strong>Public Transport:</strong> 3 min walk</td>
                </tr>
              </tbody>
            </table>
          </div>
  
          {/* Google Térkép */}
          <div className="flex-1 min-h-[300px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.509189307518!2d-3.695765084604415!3d40.43687797936316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228dcd556777b%3A0x57d20f1f7637b75a!2sChamart%C3%ADn%2C%20Madrid%2C%20Spain!5e0!3m2!1sen!2shu!4v1711825000000!5m2!1sen!2shu"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[300px] md:h-full rounded-xl border-0"
            ></iframe>
          </div>
        </div>

        <div className="mt-16 text-justify text-md md:text-xl leading-10 text-gray-800">
            <p>
            This elegant modern mansion is situated in the prestigious district of Chamartín, Madrid.
            Spanning 150 m² across two floors, it offers a spacious layout featuring four bedrooms and
            three bathrooms, ideal for families seeking style, comfort, and practicality.
            </p>
            <br />
            <p>
            Built in 2018, the property boasts high-end finishes, central heating, fiber optic internet,
            and air conditioning throughout. Sunlight floods the interior through south-facing windows,
            and a private balcony adds the perfect touch for relaxing mornings or evening views.
            </p>
            <br />
            <p>
            The home includes a secure garage, excellent energy efficiency (B+ rating), and is just a
            3-minute walk from public transport, connecting you quickly to the heart of the city.
            </p>
        </div>

        <div className="text-center mt-10">
            <button className="bg-emerald-600 text-white text-lg px-8 py-4 rounded-lg hover:bg-emerald-700 transition-transform hover:scale-105">
            I'm Interested
            </button>
        </div>
        
      </section>
      
    );
  }
  
  export default PropertyDetails;
  