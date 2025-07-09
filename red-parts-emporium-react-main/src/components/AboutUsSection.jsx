import React from 'react';

export const AboutUsSection = () => {
    return (
        <section
            className="relative min-h-[600px] flex items-center justify-center bg-cover bg-center font-inter py-12 md:py-20"
            style={{
                // This is the background picture for the entire section
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
            }}
        >
            <div className="container mx-auto px-4 z-10">
                <div className="flex flex-col md:flex-row items-center justify-start md:justify-center gap-8">
                    {/* This is the "About Us" text content card */}
                    <div
                        className="bg-white p-6 md:p-8 flex flex-col justify-center rounded-lg shadow-2xl max-w-lg w-full min-h-[500px] text-center"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            About Us
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            RedParts is an international company with 30 years of history selling spare parts for cars, trucks and motorcycles. During our work we managed to create a unique service for the sale and delivery of spare parts around the world.
                        </p>
                        <p
                            className="text-gray-600 text-sm italic mb-4"
                        >
                            &mdash; Ryan Ford, CEO RedParts
                        </p>
                        <div className="pt-10 pb-3">
                            <img src="/signature.jpg" width="160" height="55" alt="Ryan Ford Signature" className="mx-auto" />
                        </div>
                    </div>

                    <div className="hidden md:block flex-1"></div>
                </div>
            </div>
        </section>
    );
};
