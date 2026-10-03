
import { useNavigate } from "react-router-dom";

function TabbyFailedPayment() {
  const navigate = useNavigate();

  const gotohome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center max-w-md w-full">
        {/* Failed Icon */}
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

        <h1 className="text-2xl font-bold text-gray-800">Payment Failed</h1>

        <p className="mt-3 text-gray-600">
          Unfortunately, your Tabby payment could not be completed.
        </p>

        <p className="mt-2 text-sm text-gray-500">
          Please try again or choose another payment method.
        </p>

        <div className="flex gap-3 justify-center mt-6">
          <button
            onClick={() => navigate(-1)}
            className="px-5 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition"
          >
            Try Again
          </button>

          <button
            onClick={gotohome}
            className="px-5 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          >
            Go to Home
          </button>
        </div>

        <p className="mt-5 text-xs text-gray-400">
          Redirecting to home page...
        </p>
      </div>
    </div>
  );
}

export default TabbyFailedPayment;
