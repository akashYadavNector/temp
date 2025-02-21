import React, { useEffect, useState } from "react";

// Define an interface for country data
interface Country {
  name: string;
  code: string;
  dialCode: string;
}
interface LoginProps {
  setShowRegisterForm: React.Dispatch<React.SetStateAction<boolean>>;
}
const Login = ({ setShowRegisterForm }: LoginProps) => {
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
  console.log("below is the country code api");
  console.log(countries);
  // console.log(process.env.VITE_COUNTRY_CODE_API_URL);
  return (
    <div className="flex justify-center flex-col w-full max-w-lg mx-auto px-4 sm:px-6">
      <span className="text-center pb-3 text-2xl sm:text-3xl md:text-4xl my-4 font-bold">
        Login
      </span>

      <div className="w-full flex flex-col items-center">
        {/* Phone Input Container */}
        <span className="border rounded-lg w-full flex flex-wrap sm:flex-nowrap overflow-hidden">
          {/* Country Code Select */}
          <select
            name=""
            id=""
            className="w-full sm:w-3/12 border-0 outline-0 py-3 cursor-pointer px-2 text-sm sm:text-base bg-white"
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

          {/* Phone Number Input */}
          <input
            type="tel"
            placeholder="Enter your Phone Number"
            maxLength={10}
            className="w-full sm:w-6/12 border-none outline-none focus:ring-0 focus:border-transparent p-2 sm:p-4 text-sm sm:text-base"
          />

          {/* Send OTP Button */}
          <button
            className="w-full sm:w-3/12 mt-2 sm:mt-0 flex justify-center items-center bg-blue-600 p-2 sm:p-3 
        hover:bg-blue-700 duration-300 text-white font-semibold lg:text-sm sm:text-base rounded-lg sm:rounded-none sm:rounded-r-lg"
          >
            Send OTP
          </button>
        </span>

        {/* OTP Input */}
        <div className="w-full mt-4 flex justify-center">
          <input
            type="text"
            placeholder="Enter your OTP"
            className="w-full sm:w-4/6 md:w-3/6 lg:w-3/6 border p-2 sm:p-4 rounded-lg text-sm sm:text-base"
          />
        </div>

        {/* Submit Button */}
        <button
          onClick={handleLogin}
          className="text-center my-4 w-full sm:w-4/6 md:w-3/6 lg:w-2/5 py-2 sm:py-3 
        bg-blue-600 hover:bg-blue-800 duration-300 rounded-lg font-semibold text-white text-sm sm:text-base"
        >
          Submit
        </button>
      </div>

      {/* Register Link */}
      <span
        className="text-blue-500 text-center cursor-pointer hover:text-blue-800 text-sm mt-2"
        onClick={() => setShowRegisterForm(true)}
      >
        Don't have an Account?
      </span>
    </div>
  );
};

export default Login;
