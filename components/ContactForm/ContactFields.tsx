export default function ContactFields() {
  return (
    <form className="space-y-4 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Full Name"
          className="border border-gray-300 p-3 rounded w-full"
          required
        />
        <input
          type="email"
          placeholder="Corporate Email"
          className="border border-gray-300 p-3 rounded w-full"
          required
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="tel"
          placeholder="Phone Number"
          className="border border-gray-300 p-3 rounded w-full"
          required
        />
        <div className="relative w-full">
          <select
            className="appearance-none border border-gray-300 p-3 pr-10 rounded w-full text-sm focus:outline-none"
            required
          >
            <option value="">Select your industry</option>
            <option value="it">IT</option>
            <option value="healthcare">Healthcare</option>
            <option value="education">Education</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
            <svg
              className="w-4 h-4 text-gray-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      <textarea
        placeholder="Tell us about your project or how we can help..."
        rows={5}
        className="border border-gray-300 p-3 rounded w-full"
        required
      />

      <div className="flex items-start gap-2">
        <input type="checkbox" className="mt-1" />
        <label className="text-sm text-gray-600">
          I want to protect my data by signing an NDA.
        </label>
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition w-full cursor-pointer"
      >
        Send Message →
      </button>
    </form>
  );
}
