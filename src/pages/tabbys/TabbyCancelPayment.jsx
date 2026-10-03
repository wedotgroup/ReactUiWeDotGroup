import { useNavigate } from "react-router-dom";

function TabbyCancelPayment() {
  const navigate = useNavigate();
  const handelHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center max-w-md w-full">
        <div className="mx-auto mb-5 flex items-center justify-center w-16 h-16 rounded-full bg-red-100">
          <svg
            className="w-8 h-8 text-red-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>

        <h1 className="text-2xl font-bold text-gray-900">Payment Cancelled</h1>

        <p className="text-gray-500 mt-3">Your Tabby payment was cancelled.</p>

        <p className="text-sm text-gray-400 mt-2">
          Redirecting you to the home page...
        </p>

        <button
          onClick={handelHome}
          className="mt-6 px-6 py-3 bg-[#011810] text-white rounded-lg hover:opacity-90 transition"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
}

export default TabbyCancelPayment;
