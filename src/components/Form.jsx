import { useState } from "react";

const Form = () => {
  const [users, setUsers] = useState([]);
  const [fullName, setFullName] = useState("");
  const [dateOfBirth, setDateBirth] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [lang, setLang] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // guard
    if (!fullName || !dateOfBirth || !contact || !address || !lang) {
      alert("Please enter all information");
      return null;
    }

    const newUsers = { fullName, dateOfBirth, contact, address, lang };
    setUsers([...users, newUsers]);

    // reset
    setFullName("");
    setDateBirth("");
    setContact("");
    setAddress("");
    setLang("");
  };

  return (
    <div className="grid grid-cols-2 gap-20 min-h-screen w-full">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-20">
        <h2 className="text-3xl font-medium text-gray-700">
          Enter your information
        </h2>

        <div className="form__control flex flex-col gap-2.5 items-start ">
          <label
            htmlFor="fullName"
            className="cursor-pointer hover:text-gray-700 transition font-medium"
          >
            Full Name
          </label>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            type="text"
            id="fullName"
            placeholder="Black Berry"
            className="outline-none border p-5 w-full rounded-xl focus:border-black/50 transition"
          />
        </div>

        <div className="form__control flex flex-col gap-2.5 items-start ">
          <label
            htmlFor="dateOfBirth"
            className="cursor-pointer hover:text-gray-700 transition font-medium"
          >
            Date Of Birth
          </label>
          <input
            value={dateOfBirth}
            onChange={(e) => setDateBirth(e.target.value)}
            type="date"
            id="dateOfBirth"
            className="outline-none border p-5 w-full rounded-xl focus:border-black/50 transition"
          />
        </div>

        <div className="form__control flex flex-col gap-2.5 items-start ">
          <label
            htmlFor="number"
            className="cursor-pointer hover:text-gray-700 transition font-medium"
          >
            Contact
          </label>
          <input
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            type="number"
            id="number"
            placeholder="+81 000 00"
            className="outline-none border p-5 w-full rounded-xl focus:border-black/50 transition"
          />
        </div>

        <div className="form__control flex flex-col gap-2.5 items-start ">
          <label
            htmlFor="add"
            className="cursor-pointer hover:text-gray-700 transition font-medium"
          >
            Address
          </label>
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            id="add"
            placeholder="123 Tokyo,JP"
            className="outline-none border p-5 w-full rounded-xl focus:border-black/50 transition"
          />
        </div>

        <div className="form__control flex flex-col gap-2.5 items-start ">
          <label
            htmlFor="lang"
            className="cursor-pointer hover:text-gray-700 transition font-medium"
          >
            Programming Language
          </label>
          <input
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            type="text"
            id="lang"
            placeholder="JavaScript"
            className="outline-none border p-5 w-full rounded-xl focus:border-black/50 transition"
          />
        </div>

        <button
          type="submit"
          className="bg-black/80 text-xl font-medium text-white py-3 rounded-xl hover:bg-black/70"
        >
          Submit
        </button>
      </form>

      <div className="user__list p-20 flex flex-col gap-5">
        <h2 className="text-3xl font-medium text-gray-700">User List</h2>
        <div className="flex flex-col gap-5">
          {users.length > 0 &&
            users.map((user, index) => (
              <div key={index + fullName}>
                <h3 className="text-2xl font-medium text-gray-700">
                  {user.fullName}
                </h3>
                <p className="italic font-medium text-gray-500">
                  Date of Birth: {new Date(user.dateOfBirth).toDateString()}
                </p>
                <p className="italic font-medium text-gray-500">
                  Contact: {user.contact}
                </p>
                <p className="italic font-medium text-gray-500">
                  Address: {user.address}
                </p>
                <p className="italic font-medium text-gray-500">
                  Language: {user.lang}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Form;
