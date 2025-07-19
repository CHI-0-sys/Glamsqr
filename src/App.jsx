import React, { useState } from 'react';
import { Star, Clock, Phone, MapPin, Camera, Calendar, Gift, Heart, Share2, ChevronLeft, ChevronRight } from 'lucide-react';
import  a from "./assets/hair1.jpeg";
import  b from "./assets/hair2.jpeg"
import  c from "./assets/bride1.jpeg"
import  d from "./assets/bride2.jpeg"
import  e from "./assets/cut1.jpeg"
import  f from "./assets/cut2.jpeg"
import  g from "./assets/skin1.jpeg"
import  h from "./assets/skin2.jpeg"
import  i from "./assets/nail1.jpeg"
import  j from "./assets/nail2.jpeg"
import  k from "./assets/eye1.jpeg";
import  l from "./assets/eye2.jpeg";
import  m from "./assets/relax.jpeg";
import  n from "./assets/style1.jpeg";
import  o from "./assets/style2.jpeg";
import  p from "./assets/style3.jpeg";


const SalonQRSolution = () => {
  const [activeTab, setActiveTab] = useState('services');
  const [selectedGalleryImage, setSelectedGalleryImage] = useState(null);
  const [loyaltyPoints, setLoyaltyPoints] = useState(0);

  const services = [
    { name: 'Hair Cut & Style', price: '₦3,000', duration: '45 min', image:e },
    { name: 'Hair Wash & Blow Dry', price: '₦2,500', duration: '30 min', image: a },
    { name: 'Hair Coloring', price: '₦8,000', duration: '2 hours', image: b },
    { name: 'Manicure & Pedicure', price: '₦4,500', duration: '60 min', image: i },
    { name: 'Facial Treatment', price: '₦6,000', duration: '90 min', image: g },
    { name: 'Eyebrow Threading', price: '₦1,500', duration: '15 min', image: k },
    { name: 'Bridal Package', price: '₦25,000', duration: '4 hours', image: c },
    { name: 'Relaxer Treatment', price: '₦7,500', duration: '2 hours', image: m }
  ];

  const galleryImages = [
    { id: 1, before: a , after:b, title: 'Hair Color Transformation', description: 'From dark to blonde highlights' },
    { id: 2, before: c, after: d, title: 'Bridal Makeover', description: 'Complete wedding look' },
    { id: 3, before: e, after: f, title: 'Hair Cut & Style', description: 'Modern bob cut' },
    { id: 4, before: g, after : h, title: 'Facial Glow Up', description: 'Skin brightening treatment' },
    { id: 5, before: i, after: j, title: 'Nail Art Design', description: 'Custom nail decoration' },
    { id: 6, before: k, after: l, title: 'Eyebrow Shaping', description: 'Perfect arch definition' }
  ];

  const stylists = [
    { name: 'Sarah Johnson', specialty: 'Hair Coloring Expert', experience: '8 years', rating: 4.9, image: n },
    { name: 'Grace Adebayo', specialty: 'Bridal Specialist', experience: '6 years', rating: 4.8, image: o },
    { name: 'Mike Williams', specialty: 'Men\'s Cuts', experience: '10 years', rating: 4.9, image: p }
  ];

  const reviews = [
    { name: 'Amina K.', rating: 5, comment: 'Amazing service! Love my new look!', date: '2 days ago' },
    { name: 'David M.', rating: 5, comment: 'Best haircut I\'ve ever had. Highly recommend!', date: '1 week ago' },
    { name: 'Funmi O.', rating: 5, comment: 'Sarah is incredible with color. Perfect highlights!', date: '2 weeks ago' }
  ];

  const handleBookAppointment = (service) => {
    const message = `Hi! I'd like to book an appointment for ${service.name} (${service.price}). Please let me know your available times.`;
    window.open(`https://wa.me/2348123456789?text=${encodeURIComponent(message)}`, '_blank');
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-lg">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Glam Beauty Salon</h1>
            <p className="text-gray-600 mb-4">Your Beauty, Our Passion</p>
            <div className="flex justify-center items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                <span>123 Beauty Street, Lagos</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-1" />
                <span>+234 812 345 6789</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span>Mon-Sat: 9AM-7PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="flex space-x-1 bg-white rounded-lg shadow-md p-2">
          {[
            { id: 'services', label: 'Services', icon: '💄' },
            { id: 'gallery', label: 'Gallery', icon: '📸' },
            { id: 'stylists', label: 'Stylists', icon: '👩‍💼' },
            { id: 'reviews', label: 'Reviews', icon: '⭐' },
            { id: 'loyalty', label: 'Loyalty', icon: '🎁' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-pink-500 text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 pb-8">
        {/* Services Tab */}
        {activeTab === 'services' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img src={service.image} alt={service.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
                    <span className="text-2xl font-bold text-pink-500">{service.price}</span>
                  </div>
                  <div className="flex items-center text-gray-500 mb-4">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{service.duration}</span>
                  </div>
                  <button
                    onClick={() => handleBookAppointment(service)}
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 px-4 rounded-lg font-medium hover:from-pink-600 hover:to-purple-600 transition-all transform hover:scale-105"
                  >
                    Book Appointment
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Gallery Tab */}
        {activeTab === 'gallery' && (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Before & After Gallery</h2>
              <p className="text-gray-600">See our amazing transformations</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((item) => (
                <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative">
                    <div className="grid grid-cols-2 gap-1">
                      <div className="relative">
                        <img src={item.before} alt="Before" className="w-full h-48 object-cover" />
                        <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                          BEFORE
                        </div>
                      </div>
                      <div className="relative">
                        <img src={item.after} alt="After" className="w-full h-48 object-cover" />
                        <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                          AFTER
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <button
                        onClick={() => setSelectedGalleryImage(item)}
                        className="flex items-center text-pink-500 hover:text-pink-600 text-sm font-medium"
                      >
                        <Camera className="w-4 h-4 mr-1" />
                        View Details
                      </button>
                      <button className="flex items-center text-gray-500 hover:text-gray-600 text-sm">
                        <Share2 className="w-4 h-4 mr-1" />
                        Share
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Stylists Tab */}
        {activeTab === 'stylists' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stylists.map((stylist, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6 text-center">
                  <img src={stylist.image} alt={stylist.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{stylist.name}</h3>
                  <p className="text-pink-500 font-medium mb-2">{stylist.specialty}</p>
                  <div className="flex items-center justify-center mb-2">
                    {renderStars(Math.floor(stylist.rating))}
                    <span className="ml-2 text-gray-600">{stylist.rating}</span>
                  </div>
                  <p className="text-gray-500 text-sm mb-4">{stylist.experience} experience</p>
                  <button
                    onClick={() => handleBookAppointment({ name: `Appointment with ${stylist.name}`, price: 'Call for pricing' })}
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 px-4 rounded-lg font-medium hover:from-pink-600 hover:to-purple-600 transition-all"
                  >
                    Book with {stylist.name.split(' ')[0]}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Reviews Tab */}
        {activeTab === 'reviews' && (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Customer Reviews</h2>
              <div className="flex items-center justify-center mb-4">
                {renderStars(5)}
                <span className="ml-2 text-gray-600">4.9 out of 5 stars</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reviews.map((review, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-pink-500 font-semibold">{review.name.charAt(0)}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{review.name}</h4>
                      <div className="flex items-center">
                        {renderStars(review.rating)}
                        <span className="ml-2 text-gray-500 text-sm">{review.date}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">{review.comment}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <button
                onClick={() => window.open('https://wa.me/2348123456789?text=I%20would%20like%20to%20leave%20a%20review', '_blank')}
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 px-6 rounded-lg font-medium hover:from-pink-600 hover:to-purple-600 transition-all"
              >
                Write a Review
              </button>
            </div>
          </div>
        )}

        {/* Loyalty Tab */}
        {activeTab === 'loyalty' && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Beauty Rewards Program</h2>
              <p className="text-gray-600">Earn points with every visit and get amazing rewards!</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-6 rounded-xl">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold">Your Points</h3>
                    <Gift className="w-6 h-6" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{loyaltyPoints} Points</div>
                  <p className="text-pink-100">Keep earning to unlock rewards!</p>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">How to Earn Points:</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                      <span className="text-gray-600">₦100 spent = 1 point</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                      <span className="text-gray-600">Referral = 50 points</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                      <span className="text-gray-600">Birthday bonus = 100 points</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Reward Tiers:</h4>
                <div className="space-y-3">
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">500 Points</span>
                      <span className="text-pink-500">₦2,000 OFF</span>
                    </div>
                    <p className="text-gray-600 text-sm">Any service above ₦10,000</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">1000 Points</span>
                      <span className="text-pink-500">Free Manicure</span>
                    </div>
                    <p className="text-gray-600 text-sm">Complete manicure service</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">2000 Points</span>
                      <span className="text-pink-500">VIP Package</span>
                    </div>
                    <p className="text-gray-600 text-sm">Hair + Nails + Facial combo</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <button
                onClick={() => setLoyaltyPoints(loyaltyPoints + 100)}
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 px-6 rounded-lg font-medium hover:from-pink-600 hover:to-purple-600 transition-all mr-4"
              >
                Join Loyalty Program
              </button>
              <button
                onClick={() => window.open('https://wa.me/2348123456789?text=I%20want%20to%20redeem%20my%20loyalty%20points', '_blank')}
                className="border border-pink-500 text-pink-500 py-3 px-6 rounded-lg font-medium hover:bg-pink-50 transition-all"
              >
                Redeem Points
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Gallery Modal */}
      {selectedGalleryImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-gray-900">{selectedGalleryImage.title}</h3>
                <button
                  onClick={() => setSelectedGalleryImage(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <img src={selectedGalleryImage.before} alt="Before" className="w-full h-80 object-cover rounded-lg" />
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full font-semibold">
                    BEFORE
                  </div>
                </div>
                <div className="relative">
                  <img src={selectedGalleryImage.after} alt="After" className="w-full h-80 object-cover rounded-lg" />
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full font-semibold">
                    AFTER
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mt-4">{selectedGalleryImage.description}</p>
              <div className="flex space-x-4 mt-6">
                <button
                  onClick={() => handleBookAppointment({ name: selectedGalleryImage.title, price: 'Call for pricing' })}
                  className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 px-6 rounded-lg font-medium hover:from-pink-600 hover:to-purple-600 transition-all"
                >
                  Book Similar Service
                </button>
                <button className="border border-pink-500 text-pink-500 py-2 px-6 rounded-lg font-medium hover:bg-pink-50 transition-all">
                  Share This Look
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => window.open('https://wa.me/2348123456789?text=Hello%20Glam%20Beauty%20Salon!%20I%20have%20a%20question.', '_blank')}
          className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all transform hover:scale-110"
        >
          <Phone className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default SalonQRSolution;