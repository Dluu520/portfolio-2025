/* eslint-disable */
"use client";
import { useState } from "react";
const devPhase = false;
const DevRecruiterDB = "https://portfolio-dluu-dev.vercel.app/api/recruiters";
const ProdRecruiterDB = "https://portfolio-dluu-dev.vercel.app/api/recruiters";
interface Employee {
  phone: string;
  email: string;
  company: string;
  position: string;
  message: string;
  jobDescription: [string];
}

export default function ContactMe() {
  const [recruiters, setRecruiters] = useState<Employee[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  // const [submitted, setSubmitted] = useState(false);

  // const [editEmployee, setEditEmployee] = useState<Employee | null>(null);
  // const [newEmail, setNewEmail] = useState("");
  // const [newUsername, setNewUsername] = useState("");
  // const [newPassword, setNewPassword] = useState("");
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const newRecruiter = { email, name, message, subject };
    try {
      if (devPhase) {
        const res = await fetch(`${DevRecruiterDB}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newRecruiter),
        });
        if (!res.ok) {
          console.error("Error submitting data during development phase");
          return;
        }

        console.log("Successfully submitted");

        // Fetch the updated list of recruiters
        const updatedRecruiter = await fetch(`${DevRecruiterDB}`).then((res) =>
          res.json()
        );

        // Update the state with the new list and visually refresh the component
        setRecruiters(updatedRecruiter);

        // Clear form fields
        setEmail("");
        setName("");
        setSubject("");
        setMessage("");
      } else {
        const res = await fetch(`${ProdRecruiterDB}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newRecruiter),
        });
        if (!res.ok) {
          console.error("Error submitting data");
          return;
        }

        console.log("Successfully submitted");

        // Fetch the updated list of recruiters
        const updatedRecruiter = await fetch(`${ProdRecruiterDB}`).then((res) =>
          res.json()
        );

        // Update the state with the new list and visually refresh the component
        setRecruiters(updatedRecruiter);

        // Clear form fields
        setEmail("");
        setName("");
        setSubject("");
        setMessage("");
      }
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.error("Catch error: ", err);
    }
  };

  return (
    <div
      id="contact"
      className="flex-1 flex flex-col gap-10 justify-center items-center "
    >
      {/* {status && <p className="mt-4 text-center">{status}</p>} */}
      {/* <div className=" border-[1px] border-dotted w-[80%] "></div> */}
      {isLoading ? (
        <div className="h-screen  items-center text-center w-full flex flex-col justify-center ">
          Loading...
        </div>
      ) : (
        <div className="h-screen  items-center w-full   flex flex-col justify-center">
          <h1 className="flex text-4xl font-bold underline justify-center decoration-blue-500 mb-4">
            Let&apos;s chat!
          </h1>
          <form
            className="w-full md:w-[30%] p-10 space-y-4 "
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor="name" className="block mb-1 font-semibold">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border rounded-lg text-black"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                className="w-full px-4 py-2 border rounded-lg text-black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            {/* <div>
              <label htmlFor="subject" className="block mb-1 font-semibold">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-2 border rounded-lg text-black"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div> */}
            <div>
              <label htmlFor="message" className="block mb-1 font-semibold ">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full h-24 px-4 py-2 border rounded-lg text-black"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className={`w-full bg-blue-600 text-white py-2 rounded-lg ease-in hover:bg-blue-400  `}
              title="In Progress"
            >
              Send Message
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
