import React, { useState } from "react";

// Sample initial data for events
const initialEvents = [
  {
    id: 1,
    title: "Bench Press Competition",
    date: "January 15, 2025",
    time: "10:00 AM - 2:00 PM",
    description:
      "A strength competition focused on bench press. Participants will compete in different weight categories. Winners will receive prizes like T-shirts and certificates.",
    categories: [
      { weightCategory: "Under 60kg", prize: "Gold T-Shirt" },
      { weightCategory: "60kg - 80kg", prize: "Silver Certificate" },
      { weightCategory: "Over 80kg", prize: "Gold Certificate" },
    ],
    image: "https://via.placeholder.com/600x400", // Replace with actual image path
  },
  {
    id: 2,
    title: "Deadlift Competition",
    date: "February 5, 2025",
    time: "1:00 PM - 4:00 PM",
    description:
      "Compete in different categories based on weight to see who can lift the heaviest. Winners will receive prizes like T-shirts and certificates.",
    categories: [
      { weightCategory: "Under 70kg", prize: "Gold T-Shirt" },
      { weightCategory: "70kg - 100kg", prize: "Silver Certificate" },
      { weightCategory: "Over 100kg", prize: "Gold Certificate" },
    ],
    image: "https://via.placeholder.com/600x400", // Replace with actual image path
  },
  {
    id: 3,
    title: "Push -ups",
    date: "February 15, 2025",
    time: "10:00 AM - 2:00 PM",
    description:
      "A strength competition focused on bench press. Participants will compete in different weight categories. Winners will receive prizes like T-shirts and certificates.",
    categories: [
      { weightCategory: "Under 60kg", prize: "Gold T-Shirt" },
      { weightCategory: "60kg - 80kg", prize: "Silver Certificate" },
      { weightCategory: "Over 80kg", prize: "Gold Certificate" },
    ],
    image: "https://via.placeholder.com/600x400", // Replace with actual image path
  },
];

const Events = () => {
  const [events, setEvents] = useState(initialEvents);
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    time: "",
    description: "",
    categories: "",
    image: "",
  });



  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-6">
        {/* Heading Section */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-15 mt-10">
          Events 
        </h1>

    
        {/* Google Calendar Embed */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Upcoming Events on Google Calendar
          </h2>
          <div className="flex justify-center">
            <iframe
              src="https://calendar.google.com/calendar/embed?src=YOUR_CALENDAR_ID&ctz=YOUR_TIMEZONE"
              style={{ border: 0 }}
              width="800"
              height="600"
              frameBorder="0"
              scrolling="no"
              title="Google Calendar"
            ></iframe>
          </div>
        </div>

        {/* Events List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  {event.title}
                </h2>
                <p className="text-gray-600 mb-4">{event.date}</p>
                <p className="text-gray-600 mb-4">{event.time}</p>
                <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                  {event.description}
                </p>
                {/* Display Categories and Prizes */}
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-800">Categories</h3>
                  {event.categories.map((category, idx) => (
                    <p key={idx} className="text-gray-600">
                      {category.weightCategory}: {category.prize}
                    </p>
                  ))}
                </div>
             
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
