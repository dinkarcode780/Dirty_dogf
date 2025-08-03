import { useState, useEffect, useRef } from "react";
import { Phone, Mail, MapPin, Award, Users, CheckCircle, Star, ArrowRight } from "lucide-react";
import QuickBooksLogo from "../../assets/QuickBooksLogo.png";
import Button from "./items/Button";
import { NavLink } from "react-router-dom";

const Info = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeService, setActiveService] = useState(0);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const services = [
        { name: "Excavation", color: "bg-red-600", description: "Precision excavation for commercial and residential projects" },
        { name: "Grading", color: "bg-blue-600", description: "Expert land grading for optimal site preparation" },
        { name: "Trenching", color: "bg-green-600", description: "Specialized trenching for utilities and drainage" },
        { name: "Earth Moving", color: "bg-purple-600", description: "Efficient earth moving for large-scale projects" },
        { name: "Foundation Work", color: "bg-orange-600", description: "Reliable foundation excavation and preparation" },
        { name: "Horse Arenas", color: "bg-indigo-600", description: "Custom-built arenas for equestrian facilities" }
    ];

    const stats = [
        { icon: Award, label: "Years of Experience", value: "15+", color: "text-red-600" },
        { icon: Users, label: "Satisfied Clients", value: "500+", color: "text-blue-600" },
        { icon: CheckCircle, label: "Projects Completed", value: "1000+", color: "text-green-600" },
        { icon: Star, label: "Average Rating", value: "4.9/5", color: "text-yellow-600" }
    ];

    const serviceAreas = ["Elizabeth", "Franktown", "Parker", "Castle Rock"];

    return (
        <section ref={sectionRef} className="relative py-12 lg:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div
                    className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Dirt Dogs Grading & Land LLC
                    </h1>
                    <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                        Providing exceptional excavation and grading services with a commitment to quality and reliability.
                    </p>

                    {/* Contact Cards */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                        <a
                            href="tel:303-435-4774"
                            className="group flex items-center gap-3 bg-white rounded-lg px-6 py-4 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200"
                        >
                            <div className="p-2 bg-red-50 rounded-lg group-hover:bg-red-100">
                                <Phone size={18} className="text-red-600" />
                            </div>
                            <div className="text-left">
                                <p className="text-sm text-gray-500">Phone</p>
                                <p className="text-base font-semibold text-gray-900">303-435-4774</p>
                            </div>
                        </a>

                        <a
                            href="mailto:Garr@DirtDogsExcavating.com"
                            className="group flex items-center gap-3 bg-white rounded-lg px-6 py-4 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200"
                        >
                            <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100">
                                <Mail size={18} className="text-blue-600" />
                            </div>
                            <div className="text-left">
                                <p className="text-sm text-gray-500">Email</p>
                                <p className="text-base font-semibold text-gray-900">Garr@DirtDogsExcavating.com</p>
                            </div>
                        </a>
                    </div>
                </div>

                {/* Stats Section */}
                <div
                    className={`grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    {stats.map((stat, index) => (
                        <div
                            key={stat.label}
                            className="bg-white rounded-lg p-5 text-center shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className={`inline-flex p-2 rounded-full bg-gray-50 mb-3`}>
                                <stat.icon size={20} className={stat.color} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                            <p className="text-sm text-gray-600">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                    {/* Left Column - Description */}
                    <div
                        className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                            }`}
                    >
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
                            Expert Excavation & Grading Services
                        </h2>

                        <div className="prose prose-sm sm:prose-base text-gray-600 mb-6">
                            <p className="mb-4">
                                Dirt Dogs Grading & Land LLC is dedicated to delivering high-quality excavation and grading services for commercial and residential clients.
                            </p>
                            <p className="mb-4">
                                Our services include precision grading, trenching, earth moving, and foundation preparation, all executed with professionalism and attention to detail.
                            </p>
                            <p>
                                We prioritize client satisfaction through clear communication, timely project delivery, and exceptional craftsmanship.
                            </p>
                        </div>

                        {/* Service Areas */}
                        <div className="mb-6">
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                <MapPin size={18} className="text-red-600" />
                                Service Areas
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {serviceAreas.map((area, index) => (
                                    <span
                                        key={area}
                                        className="bg-red-50 text-red-600 px-3 py-1.5 rounded-full text-sm font-medium hover:bg-red-100 transition-colors"
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        {area}
                                    </span>
                                ))}
                                <span className="text-gray-500 px-3 py-1.5 text-sm">and surrounding areas</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Services */}
                    <div
                        className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                            }`}
                    >
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-5">Our Services</h3>
                        <div className="space-y-2">
                            {services.map((service, index) => (
                                <div
                                    key={service.name}
                                    className={`p-4 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition-all duration-300 cursor-pointer ${activeService === index ? 'border-red-300 shadow-md' : 'hover:shadow-md'
                                        }`}
                                    onMouseEnter={() => setActiveService(index)}
                                    onClick={() => setActiveService(index)}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className={`w-2.5 h-2.5 rounded-full ${service.color} transition-all duration-300 ${activeService === index ? 'scale-125' : ''
                                                }`}></div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900 hover:text-red-600 transition-colors">
                                                    {service.name}
                                                </h4>
                                                <p className="text-sm text-gray-600">{service.description}</p>
                                            </div>
                                        </div>
                                        <ArrowRight
                                            size={16}
                                            className={`text-gray-400 transition-all duration-300 ${activeService === index ? 'text-red-600 translate-x-1' : 'hover:translate-x-1'
                                                }`}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Financing Section */}
                <div
                    className={`mt-12 text-center transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 max-w-2xl mx-auto">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Financing Solutions</h3>
                        <img src={QuickBooksLogo} alt="QuickBooks Logo" className="w-24 h-auto mb-4 mx-auto" />
                        <p className="text-sm sm:text-base text-gray-600 mb-4 max-w-xl mx-auto">
                            We partner with QuickBooks to provide flexible financing options, ensuring your project is completed within budget.
                        </p>
                        <span className="inline-block bg-blue-50 text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold">
                            QuickBooks Financing Partner
                        </span>
                    </div>
                </div>

                {/* Call to Action */}
                <div
                    className={`mt-12 text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    <NavLink to="/quotes">
                        <Button
                            className="inline-flex"
                        >
                            Request a Free Quote
                            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                        </Button>
                    </NavLink>
                </div>
            </div>
        </section>
    );
};

export default Info;