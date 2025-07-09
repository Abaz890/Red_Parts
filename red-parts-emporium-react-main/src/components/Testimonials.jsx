// components/Testimonials.jsx
import React, { useState } from 'react';
import { Star } from 'lucide-react'; // Using Lucide React for star icons

export const Testimonials = () => {
    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

    const testimonials = [
        {
            id: 1,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTXVNBrOtjOIlFHVYv1RAZNb9GwtTaE5lD_g&s", 
            review: "This division is not obsolete but has changed. Natural philosophy has split into the various natural sciences, especially astronomy, and cosmology.",
            author: "Jessica Moore",
            title: "CEO Mebliya",
            rating: 4, 
        },
        {
            id: 2,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa1jF7upqqqySaeaxt6rxnIb-T-azRZEuzLQ&s", 
            review: "The service provided by RedParts is exceptional! Their wide range of auto parts and quick delivery truly saved me a lot of time and hassle.",
            author: "John Doe",
            title: "Satisfied Customer",
            rating: 5,
        },
        {
            id: 3,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjd2Sj7xafyV96H1KfPD62vvnwE-1bv-E2Iw&s", 
            review: "Finding original auto parts has never been easier. RedParts has an impressive inventory, and their team is very knowledgeable.",
            author: "Jane Smith",
            title: "Mechanic",
            rating: 3,
        },
    ];

    const handleDotClick = (index) => {
        setCurrentTestimonialIndex(index);
    };

    return (
        <section className="container mx-auto px-4 py-12 md:py-20 font-inter bg-gray-50">
            {/* Section Header */}
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    Testimonials
                </h2>
                <p className="text-lg text-gray-700">
                    During our work we have accumulated hundreds of positive reviews.
                </p>
            </div>

            {/* Testimonial Card */}
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl p-8 md:p-12 flex flex-col md:flex-row items-center md:items-start gap-8 mt-4"> {/* Changed shadow-xl to shadow-2xl */}
                {/* Testimonial Image */}
                <div className="flex-shrink-0 w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center shadow-lg"> {/* Changed shadow-md to shadow-lg */}
                    <img
                        src={testimonials[currentTestimonialIndex].image}
                        alt={testimonials[currentTestimonialIndex].author}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = `https://placehold.co/100x100/cccccc/000000?text=Image+Error`;
                        }}
                    />
                </div>

                {/* Testimonial Content */}
                <div className="flex-1 text-center md:text-left">
                    <p className="text-lg md:text-xl italic text-gray-800 mb-6 leading-relaxed">
                        "{testimonials[currentTestimonialIndex].review}"
                    </p>
                    <div className="flex justify-center md:justify-start mb-4">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className={`h-5 w-5 ${i < testimonials[currentTestimonialIndex].rating
                                        ? 'text-yellow-400 fill-current'
                                        : 'text-gray-300'
                                    }`}
                            />
                        ))}
                    </div>
                    <p className="text-base font-semibold text-gray-900">
                        &mdash; {testimonials[currentTestimonialIndex].author}, <span className="text-gray-600">{testimonials[currentTestimonialIndex].title}</span>
                    </p>
                </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-12 space-x-3">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${index === currentTestimonialIndex
                                ? 'bg-red-500 border-red-500'
                                : 'bg-transparent border-gray-400'
                            }`}
                        onClick={() => handleDotClick(index)}
                        aria-label={`Go to testimonial ${index + 1}`}
                    ></button>
                ))}
            </div>

        </section>
    );
};
