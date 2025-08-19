import React, { useEffect, useState } from "react";
import { CircleCheck } from "lucide-react";
import emailjs from "@emailjs/browser";

export const BookingForm = () => {
  useEffect(() => {
    emailjs.init("sodcVdGb3izkIkZsZ");
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: 2,
    occasion: "",
  });

  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [bookedTimes, setBookedTimes] = useState([]);

  const occasions = [
    { value: "", label: "Select an Occasion" },
    { value: "birthday", label: "Birthday" },
    { value: "anniversary", label: "Anniversary" },
    { value: "engagement", label: "Engagement" },
    { value: "other", label: "Other Special Occasion" },
  ];

  const getBookings = () => JSON.parse(localStorage.getItem("bookings") || "[]");

  const saveBooking = (booking) => {
    const bookings = getBookings();
    bookings.push(booking);
    localStorage.setItem("bookings", JSON.stringify(bookings));
  };

  useEffect(() => {
    if (formData.date) {
      const bookings = getBookings().filter((b) => b.date === formData.date);
      setBookedTimes(bookings.map((b) => b.time));
    }
  }, [formData.date]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.date) newErrors.date = "Date is required";
    if (!formData.time) newErrors.time = "Time is required";
    else {
      const [hours] = formData.time.split(":").map(Number);
      if (hours < 17 || hours >= 22) newErrors.time = "We are only open from 17:00 to 22:00";
    }
    if (formData.guests < 1 || formData.guests > 10) newErrors.guests = "Number of guests must be between 1-10";

    if (formData.date && formData.time) {
      const bookings = getBookings();
      if (bookings.some((b) => b.date === formData.date && b.time === formData.time)) {
        newErrors.time = "This time slot is already booked. Please choose another time.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsLoading(true);

      try {
        const formattedDate = new Date(formData.date).toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        });

        const templateParams = {
          to_name: formData.name,
          to_email: formData.email,
          reservation_date: formattedDate,
          reservation_time: formData.time,
          number_of_guests: formData.guests,
          occasion: formData.occasion || "None specified",
          restaurant_name: "Little Lemon",
          restaurant_phone: "(555) 123-4567",
          restaurant_address: "123 Main Street, Chicago, IL",
        };

        const response = await emailjs.send(
          "service_978sufr",
          "template_qaj6771",
          templateParams
        );

        if (response.status === 200) {
          saveBooking({ date: formData.date, time: formData.time }); 
          setShowModal(true);
          setFormData({
            name: "",
            email: "",
            phone: "",
            date: "",
            time: "",
            guests: 2,
            occasion: "",
          });
        } else {
          alert(`Failed to send confirmation. Status: ${response.status}`);
        }
      } catch (error) {
        console.error("Error sending email:", error);
        alert(`Error: ${error.text || "Failed to send email"}`);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const generateTimeOptions = () => {
    const startHour = 17;
    const endHour = 22;

    return Array.from({ length: endHour - startHour + 1 }, (_, i) => startHour + i)
      .reduce((options, hour) => {
        if (hour < endHour) {
          [":00", ":30"].forEach((min) => {
            const time = `${hour.toString().padStart(2, "0")}${min}`;
            if (!bookedTimes.includes(time)) {
              options.push(
                <option key={time} value={`${hour.toString().padStart(2, "0")}${min}`}>
                  {hour}{min}
                </option>
              );
            }
          });
        } else {
          const time = "22:00";
          if (!bookedTimes.includes(time)) options.push(<option key={time} value={time}>{time}</option>);
        }
        return options;
      }, []);
  };

  return (
    <main className="min-h-screen min-w-full bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Make a Reservation</h1>
          <p className="mt-4 text-lg text-gray-600">
            Book your table at our restaurant for an unforgettable dining experience
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                alt="Restaurant interior"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-8 md:w-1/2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary ${errors.name ? "border-red-500" : "border-gray-300"}`}
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary ${errors.email ? "border-red-500" : "border-gray-300"}`}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary ${errors.phone ? "border-red-500" : "border-gray-300"}`}
                  />
                  {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Date *</label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary ${errors.date ? "border-red-500" : "border-gray-300"}`}
                    />
                    {errors.date && <p className="mt-1 text-sm text-red-600">{errors.date}</p>}
                  </div>

                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">Time (17:00-22:00) *</label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary ${errors.time ? "border-red-500" : "border-gray-300"}`}
                    >
                      <option value="">Select a time</option>
                      {generateTimeOptions()}
                    </select>
                    {errors.time && <p className="mt-1 text-sm text-red-600">{errors.time}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">Number of Guests *</label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary ${errors.guests ? "border-red-500" : "border-gray-300"}`}
                    >
                      {[1,2,3,4,5,6,7,8,9,10].map(num => (
                        <option key={num} value={num}>{num} {num===1?"person":"people"}</option>
                      ))}
                    </select>
                    {errors.guests && <p className="mt-1 text-sm text-red-600">{errors.guests}</p>}
                  </div>

                  <div>
                    <label htmlFor="occasion" className="block text-sm font-medium text-gray-700 mb-1">Occasion</label>
                    <select
                      id="occasion"
                      name="occasion"
                      value={formData.occasion}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    >
                      {occasions.map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full mt-6 px-6 py-3 bg-primary text-black rounded-full font-semibold hover:bg-yellow-400 transition duration-300"
                  >
                    {isLoading ? "Processing..." : "Reserve Table"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6 text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
              <CircleCheck className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Reservation Confirmed!</h3>
            <p className="text-gray-600 mb-4">Your table has been successfully reserved. We've sent a confirmation to your email.</p>
            <button
              onClick={() => setShowModal(false)}
              className="w-full mt-6 px-6 py-3 bg-primary text-black rounded-full font-semibold hover:bg-yellow-400 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default BookingForm;
