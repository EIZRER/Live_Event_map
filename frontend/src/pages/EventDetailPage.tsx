const EventDetail = () => {
 

  // TODO: Fetch event details from backend using `id`

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">Event Title</h1>
      <p className="text-gray-700 mb-1">📍 Location: </p>
      <p className="text-gray-700 mb-1">🕒 Date & Time: </p>
      <p className="mt-4">Event description here...</p>
      <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md">
        Add to Google Calendar
      </button>
    </div>
  );
};

export default EventDetail;
