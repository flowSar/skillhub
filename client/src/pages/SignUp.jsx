import { useState } from "react";
import InputForm from "../components/InputForm";
import SingUpCustomer from "../components/SingUpCustomer";
import SignUpFreelancer from "../components/SignUpFreelancer";
import SimpleHeader from "../components/SimpleHeader";

const SignUp = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const [signupFreelancerdisplay, setSignupFreelancerdisplay] = useState(true);
  const [signupCustomerdisplay, setsignupCustomerdisplay] = useState(true);

  // Handle change event for radio buttons
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const CustomerSelected = () => {
    setSelectedOption("customer");
  };

  const FreelancerSelected = () => {
    setSelectedOption("servicep");
  };

  const ChooseAcountType = () => {
    const acountType = document.querySelector(".js-select-account");
    if (selectedOption === "customer") {
      acountType.classList.add("hidden");
      setsignupCustomerdisplay(false);
    } else if (selectedOption === "servicep") {
      acountType.classList.add("hidden");
      setSignupFreelancerdisplay(false);
    }
  };

  return (
    <>
      <SimpleHeader />
      <div className=" flex justify-center items-center flex-col w-full h-full py-[5rem]">
        <h1 className="text-4xl font-serif font-bold mb-10">
          Sign Up For free
        </h1>

        <div className="js-select-account flex flex-col items-center space-y-8">
          <div className="flex gap-4">
            <div
              className="bg-white flex justify-between p-4 gap-6 rounded-2xl border-2 border-slate-600 hover:border-red-700"
              onClick={CustomerSelected}
            >
              <p className="w-[6rem]">I'm a Client Hiring for a project</p>
              <input
                type="radio"
                value="customer"
                checked={selectedOption === "customer"}
                onChange={handleOptionChange}
                className="w-[1.5rem]"
              />
            </div>
            <div
              className="bg-white flex gap-6 p-4 justify-between rounded-2xl border-2 border-slate-600 hover:border-red-700"
              onClick={FreelancerSelected}
            >
              <p className="w-[6rem]">I'm a freelancer looking for work</p>
              <input
                type="radio"
                value="servicep"
                checked={selectedOption === "servicep"}
                onChange={handleOptionChange}
                className="w-[1.5rem]"
              />
            </div>
          </div>
          <button className="button-style" onClick={ChooseAcountType}>
            Create account
          </button>
        </div>
        <SingUpCustomer display={signupCustomerdisplay ? "hidden" : "block"} />
        <SignUpFreelancer
          display={signupFreelancerdisplay ? "hidden" : "block"}
        />
      </div>
    </>
  );
};

export default SignUp;
