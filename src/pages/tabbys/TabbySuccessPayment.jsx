import { useNavigate } from "react-router-dom";

function TabbySuccessPayment() {
  const navigate = useNavigate();

  const gotohome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center max-w-md w-full">
        {/* Success Icon */}
        <div className="mx-auto mb-5 flex items-center justify-center w-16 h-16 rounded-full bg-green-100">
          <svg
            className="w-8 h-8 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="text-2xl font-bold text-gray-800">Payment Successful</h1>

        <p className="mt-3 text-gray-600">
          Your Tabby payment has been completed successfully.
        </p>

        <p className="mt-2 text-sm text-gray-500">
          Redirecting you to the home page...
        </p>

        <button
          onClick={gotohome}
          className="mt-6 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
}

export default TabbySuccessPayment;
