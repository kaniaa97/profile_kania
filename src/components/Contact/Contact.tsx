import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { log } from "console";

export default function Contact() {
  const [state] = useForm("myyrezze");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  const handleSend = async () => {
    try {
      const response = await fetch("https://formspree.io/f/myyrezze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      if (response.ok) {
        // Permintaan berhasil
        alert("Permintaan telah dikirim!");
        window.location.reload();
      } else {
        // Permintaan gagal
        alert("Terjadi kesalahan. Silakan coba lagi.");
      }
    } catch (error) {
      console.error("Error sending request:", error);
      alert("error.");
    }
  };

  return (
    <div
      id="contact"
      className="min-h-screen bg-gray-100 flex items-center justify-center"
    >
      <div className="container mx-auto p-8">
        <h1 className="text-4xl md:text-4xl font-bold mb-8 text-center">
          Contact Us!
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-4 border border-gray-300 rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Email"
              className="w-full p-4 border border-gray-300 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <textarea
            placeholder="Message"
            className="w-full h-40 p-4 border border-gray-300 rounded"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div className="flex justify-center mt-8">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer"
            onClick={handleSend}
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}
