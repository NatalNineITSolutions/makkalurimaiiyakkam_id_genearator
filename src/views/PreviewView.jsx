import { useEffect, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function PreviewView() {
  const [member, setMember] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("memberData");
    if (data) {
      setMember(JSON.parse(data));
    }
  }, []);

  const handleDownload = async () => {
  const front = document.getElementById("idcard");
  const back = document.getElementById("idcard-back");

  const pdf = new jsPDF("p", "mm", "a4");

  // Front side
  const frontCanvas = await html2canvas(front, { scale: 2, backgroundColor: "#fff", useCORS: true });
  const frontImg = frontCanvas.toDataURL("image/png");
  const width = pdf.internal.pageSize.getWidth();
  const height = (frontCanvas.height * width) / frontCanvas.width;
  pdf.addImage(frontImg, "PNG", 0, 0, width, height);

  // Back side
  pdf.addPage();
  const backCanvas = await html2canvas(back, { scale: 2, backgroundColor: "#fff", useCORS: true });
  const backImg = backCanvas.toDataURL("image/png");
  const backHeight = (backCanvas.height * width) / backCanvas.width;
  pdf.addImage(backImg, "PNG", 0, 0, width, backHeight);

  pdf.save("member-id-card.pdf");
};




  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <p className="text-red-500 font-semibold animate-pulse">
          No member data found. Please register first.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 space-y-8">
      <div id="idcard-wrapper" className="space-y-8">
      {/*frontside*/} 
    <div id="idcard" className="relative w-full max-w-sm bg-white border-2 border-red-600 rounded-lg shadow-xl px-4 pt-2 pb-2 text-center"
>


          {/* Logo */}
          <img
            src="/logo.png"
            alt="Movement Logo"
            className="w-16 h-16 mx-auto mb-2"
          />

          {/* Tamil-English Title */}
          <h2 className="text-red-700 font-bold text-lg leading-tight font-sans">
            மக்கள் உரிமை இயக்கம்
          </h2>
          <h3 className="text-sm font-semibold text-black font-sans">
            People’s Rights Movement (Reg. 4/88/2024)
          </h3>

          {/* Quote */}
          <div className="bg-blue-900 text-white text-xs italic font-sans px-2 py-1 mt-2 rounded">
            “எல்லா மனிதர்களும் சுதந்திரமாகவும் கண்ணியத்திலும் உரிமைகளிலும் சமமாகப் பிறந்தவர்கள்”
          </div>

          {/* Vertical Label */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-red-600 text-white text-xs font-bold px-2 py-1 rotate-[-90deg] origin-left">
            Identity Card
          </div>

          {/* Photo Box */}
          <div className="w-28 h-28 mx-auto mt-4 border-4 border-red-500 bg-gray-200 rounded-md overflow-hidden shadow-md">
            {member.photo && (
              <img
                src={member.photo}
                alt="Member"
                className="w-full h-full object-cover"
              />
            )}
          </div>

          {/* Member Info */}
          <div className="mt-4 space-y-1 text-sm">
            <p className="text-lg font-bold text-yellow-600 tracking-wide font-sans">
              {member.name.toUpperCase()}
            </p>
            <p className="font-semibold text-black font-sans">{member.designation}</p>
            <p className="text-black font-sans">{member.location}</p>
          </div>
        </div>

        {/* BACK SIDE */}
        {/* BACK SIDE */}
<div
  id="idcard-back"
  className="w-full max-w-sm bg-white border-2 border-red-600 rounded-lg shadow-xl px-4 pt-6 pb-0 text-sm text-black"
>
  {/* Member Details */}
  <h4 className="text-red-600 font-bold mb-4 text-center text-base">Member Details</h4>
  <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[13px]">
    <p><strong>Father’s Name:</strong> {member.fatherName}</p>
    <p><strong>Gender:</strong> {member.gender}</p>
    <p><strong>DOB:</strong> {member.dob}</p>
    <p><strong>Blood Group:</strong> {member.bloodGroup}</p>
    <p><strong>Phone:</strong> {member.phone}</p>
    <p><strong>State:</strong> {member.state}</p>
    <p><strong>Pin Code:</strong> {member.pinCode}</p>
    <p><strong>Constituency:</strong> {member.constituency}</p>
  </div>
  <p className="mt-2 text-[13px]"><strong>Address:</strong> {member.address}</p>

   <div className="flex items-start justify-between">
    <div className="text-xs text-gray-800 space-y-1 text-left w-[70%]">
      <img
        src="/signature.png"
        alt="Signature"
        className="w-20 h-auto object-contain mb-1"
      />
      <p className="font-bold text-[13px]">Mount Gopaal SJ</p>
      <p className="font-semibold text-[13px]">Founder & President</p>
      <p className="font-semibold text-[13px]">People’s Rights Movement</p>
    </div>

    <div className="w-[30%] flex justify-end">
      <img
        src="/founder.png"
        alt="Founder"
        className="w-20 h-20 square-full object-cover"
      />
    </div>
  </div>
  <hr className="my-4 border-red-700" />

  <div className="mt-4 text-[13px] text-blue-900 text-center leading-snug font-bold">
    <p>No. 144, Gandhi Street, Kalaignar Nagar,</p>
    <p>St. Thomas Mount, Chennai - 600016</p>
    <p>peoplesrightsmovementoffice@gmail.com</p>
    <p>Cell: 9566245195 / 8072690599</p>
  </div>

  {/* Bottom Red Bar — Full Width, No Gaps */}
   <div className="w-full bg-red-600 text-white text-center text-sm font-bold py-2 rounded-b-lg">
    People’s Rights Movement
  </div>
</div>
</div>
      {/* Download Button */}
      <button
        onClick={handleDownload}
        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full shadow-lg transition duration-300 ease-in-out"
      >
        Download ID Card
      </button>
    </div>
  );
}
