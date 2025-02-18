import React, { useEffect, useState } from "react";
interface RegisterProps {
  setShowRegisterForm: React.Dispatch<React.SetStateAction<boolean>>;
}
interface Country {
  name: string;
  code: string;
  dialCode: string;
}
const Register = ({ setShowRegisterForm }: RegisterProps) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const handleLogin = () => {};
  useEffect(() => {
    const fetchCoutryCode = async () => {
      const countryList = await fetch(
        `${process.env.VITE_COUNTRY_CODE_API_URL}`
      );
      const result = await countryList.json();
      const countryData = await result
        .map((country: any) => ({
          name: country.name.common,
          code: country.cca2, // Country Code (e.g., IN)
          dialCode:
            country.idd?.root +
            (country.idd?.suffixes ? country.idd.suffixes[0] : ""), // Dial Code (+91)
        }))
        .sort((a: any, b: any) => a.name.localeCompare(b.name));
      setCountries(countryData);
    };

    fetchCoutryCode();
  }, []);
  return (
    <div className="flex justify-center flex-col">
      <span className="text-center pb-3 text-4xl my-4">Register Youself</span>
      {/* <div className=" text-center text-sm mb-8">with Phone Number</div> */}
      <div className="w-full flex flex-col items-center">
        <div className=" w-full">
          <input
            type="text"
            className=" w-full my-2 border p-2 focus:border-2 rounded"
            placeholder=" Enter Your Full Name"
          />
          <input
            type="email"
            className=" w-full my-2 border p-2 focus:border-2 rounded"
            placeholder=" Enter Your Email"
          />
        </div>
        <span className=" border rounded-lg  w-full flex rounded-r-xl">
          <select
            name=""
            id=""
            className=" w-3/12  border-0 outline-0 py-3 cursor-pointer ml-2"
          >
            <option selected value={"91"}>
              IN +91
            </option>
            {countries.map((country: Country) => (
              <option
                value={country.dialCode}
              >{`${country.code} ${country.dialCode}`}</option>
            ))}
          </select>
          <input
            type="tel"
            placeholder="Enter your Phone Number "
            maxLength={10}
            className=" w-6/12 px-3 border-none outline-none focus:ring-0 focus:border-transparent py-3 "
          />
          <button className=" flex justify-center bg-blue-600 rounded-r-xl py-3 w-3/12 border-r-3xl hover:bg-blue-700 duration-300 text-white font-bold">
            Verify OTP
          </button>
        </span>
        <div className="w-full">
          <input
            type="text"
            placeholder="Enter your OTP"
            className=" w-full border focus:border-2 p-2 my-3"
          />
        </div>
        <button
          onClick={handleLogin}
          className="text-center my-8 w-2/5 py-2 bg-blue-600 hover:bg-blue-800 duration-300 rounded-lg font-bold text-white"
        >
          Create Account
        </button>
      </div>
      <span
        className=" text-blue-500 text-center cursor-pointer hover:text-blue-800"
        onClick={() => setShowRegisterForm(false)}
      >
        Already have an Account
      </span>
    </div>
  );
};

export default Register;
