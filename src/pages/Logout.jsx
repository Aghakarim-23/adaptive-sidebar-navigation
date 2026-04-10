import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // fake auth clear (later real token olacaq)
    localStorage.removeItem("token");

    // short delay (UX feel)
    setTimeout(() => {
      navigate("/");
    }, 1500);
  }, [navigate]);

  return (
    <div className="h-full flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow text-center space-y-2">
        <h1 className="text-xl font-bold">Logging out...</h1>
        <p className="text-gray-500 text-sm">
          You will be redirected shortly
        </p>
      </div>
    </div>
  );
};

export default Logout;