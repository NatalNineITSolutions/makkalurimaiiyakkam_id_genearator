import { useNavigate } from "react-router-dom";

export default function HomeView() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-red-700 text-white flex items-center justify-center p-6">
      <div className="max-w-xl w-full text-center space-y-6">
        <div className="flex flex-col items-center space-y-3">
          <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
            <span className="text-2xl">⚖️</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold">மக்கள் உரிமை இயக்கம்</h1>
          <p className="text-lg font-semibold">People’s Rights Movement</p>
          <p className="text-sm opacity-90">(Reg. 4/88/2024)</p>
          <p className="text-sm sm:text-base max-w-xl">
            “எல்லா மனிதர்களும் சுதந்திரமாகவும் கண்ணியத்திலும் உரிமைகளிலும் சமமாகப் பிறந்தவர்கள்”
          </p>
        </div>

        <button
          onClick={() => navigate("/register")}
          className="inline-flex items-center justify-center px-6 py-3 bg-white text-red-700 font-semibold rounded-md shadow hover:bg-red-50 transition"
        >
          Generate Your ID Card →
        </button>
      </div>
    </div>
  );
}
