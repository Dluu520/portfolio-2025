"use client";
import { useState, ChangeEvent, FormEvent } from "react";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

interface Employee {
  phone: string;
  email: string;
  company: string;
  position: string;
  message: string;
  jobDescription: [string];
}

export default function ContactMe() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<string>("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("Failed to send message. Admin notified.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("An error occurred while sending the message.");
    }
  };

  return (
    <div className="h-screen  items-center w-full   flex flex-col justify-center ">
      <h1 className="text-4xl underline font-bold ">Let's talk!</h1>
      <form className="w-full md:w-[50%] p-6 space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block mb-1 font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 border rounded-lg"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1 font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 border rounded-lg"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="subject" className="block mb-1 font-semibold">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="w-full px-4 py-2 border rounded-lg"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1 font-semibold">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full px-4 py-2 border rounded-lg"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className={`w-full bg-blue-600 text-white py-2 rounded-lg `}
          title="In Progress"
        >
          Send Message
        </button>
        {status && <p className="mt-4 text-center">{status}</p>}
      </form>
    </div>
  );
}
