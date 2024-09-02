import React, { useEffect, useState } from "react";
import { SignUp } from '../utils/HTTPRequest.jsx'

import { services } from "../data/services.js";
import { Link } from "react-router-dom";

const SignUpFreelancer = ({ display }) => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'friday', 'saturday', 'sunday'];
  const [firstName , setFirstName] = useState("");
  const [lastName , setLastName] = useState("");
  const [email , setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("Morocco");
  const [workingDays, setWorkingDays] = useState([]);
  const [profileImage, setProfileImage] = useState(null);
  const [thumbnailmage, setThumbnailImage] = useState("");
  const [service, setSevice] = useState("");
  const [gender, setGender] = useState("");
  const [description, setDescription] = useState("");
  const [errroVisible, setErrroVisible] = useState("hidden");
  const [subService, setSubservices] = useState([]);

  const handleFirstNameChnage = (event) => setFirstName(event.target.value);
  const handlelastNameChange = (event) => setLastName(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setpassword(event.target.value);
  const handleAddressChange = (event) => setAddress(event.target.value);
  const handlePhoneNumberChange = (event) => setPhoneNumber(event.target.value);
  const handleCityChange = (event) => setCity(event.target.value);
  const handleCountryChange = (event) => setCountry(event.target.value);
  const handleDaysChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setWorkingDays([...workingDays, value]);
    } else {
      setWorkingDays(workingDays.filter((item) => item !== value));
    }
  }
  const handleProfileImageChange = (event) => setProfileImage(event.target.files[0]);
  const handleThumbnailImageChange = (event) => setThumbnailImage(event.target.files[0]);
  const handleServiceChange = (event) => setSevice(event.target.value);
  const handleGenderChange = (event) => setGender(event.target.value);
  const handleDescriptionChange = (event) => setDescription(event.target.value);

  const handleSubServiceSelected = (event) => {
    const value = event.target.value;
    if (!subService.includes(value)) {
      if (value !== '')
        setSubservices([...subService, value]);
    }
  };

  const removeSelectedService = (event) => {
    const indexToRemove = +event.target.dataset.index;
    const updatedSubService = subService.filter((item, index) => index !== indexToRemove);
    // Update the state with the new array
    setSubservices(updatedSubService);
    console.log('cliked');
  };

  const formData = new FormData()
  formData.append('first_name', firstName)
  formData.append('last_name', lastName)
  formData.append('email', email)
  formData.append('password', password)
  formData.append('phone_number', phoneNumber)
  formData.append('address', address)
  formData.append('city', city)
  formData.append('country', country)
  formData.append('working_days', workingDays)
  formData.append('profile_img', profileImage)
  formData.append('thumbnail_img', thumbnailmage)
  formData.append('service', service)
  formData.append('sub_service', subService)
  formData.append('gender', gender)
  formData.append('description', description)

  // this function handle sign up click
  const handleSignup = () => {
    // when we click on sign up we call this fuction with data and usertype (customer, serviceProvider)
    const result = SignUp(formData, 'serviceProvider')
    if (!result) {
      setErrroVisible('block');
      alert('Sign up failed try again');
    } else {
      setFirstName('');
      setLastName('');
      setEmail('');
      setpassword('');
      setAddress('');
      setPhoneNumber('');
      setCity('');
      setCountry('Morocco');
      setProfileImage('');
      setThumbnailImage('');
      setGender('Gender');
      setDescription('');
    }
  };

  return (
    <>
      <div className={`border-2 border-slate-400 p-6 rounded-xl ${display}`}>
        <div className="space-y-2 md:space-y-4">
          <p className={`text-center text-red-500 ${errroVisible}`}>please ensure that you filled all the required information</p>
          <p className={`text-center text-red-500 ${errroVisible}`}>sign up failed this email is already exist</p>
          <div className="flex gap-2 md:gap-8 flex-col md:flex-row">
            <div>
              <p>First name</p>
              <input
                type="text"
                placeholder="First Name"
                className="input-style w-[20rem]"
                value={firstName}
                onChange={handleFirstNameChnage}
              />
            </div>
            <div>
              <p>Last Name</p>
              <input
                type="text"
                placeholder="last Name"
                className="input-style w-[20rem]"
                value={lastName}
                onChange={handlelastNameChange}
              />
            </div>
          </div>
          <div className="flex gap-2 md:gap-8 flex-col md:flex-row">
            <div>
              <p>Email</p>
              <input
                type="email"
                placeholder="Email"
                className="input-style w-[20rem]"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div>
              <p>Password</p>
              <input
                type="password"
                placeholder="First Name"
                className="input-style w-[20rem]"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
          </div>
          <div className="flex gap-2 md:gap-8 flex-col md:flex-row">
            <div>
              <p>Address</p>
              <input
                type="text"
                placeholder="address"
                className="input-style w-[20rem]"
                value={address}
                onChange={handleAddressChange}
              />
            </div>
            <div>
              <p>Phone Number</p>
              <input
                type="tel"
                placeholder="Phone Number"
                className="input-style w-[20rem]"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
              />
            </div>
          </div>
          <div className="flex gap-2 md:gap-8 flex-col md:flex-row">
            <div>
              <p>City</p>
              <input
                type="text"
                placeholder="City"
                className="input-style w-[20rem]"
                value={city}
                onChange={handleCityChange}
              />
            </div>
            <div>
              <p>Country</p>
              <select className="input-style w-[20rem] bg-white">
                <option>Morocco</option>
              </select>
            </div>
          </div>
          <div className="border-t-2 border-t-slate-600 pt-2">
            <label id="days" className="">
              Select Working Days:
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4  bg-gray-200 p-2">

              { days.map((day, index) => (
                <label key={day}>
                <input key={`${day}$-${index}`} type="checkbox" name="day" 
                value={day}
                onChange={handleDaysChange}
                /> {day}
              </label>
              ))}
            </div>
          </div>
          <div className="flex flex-col w-[20rem] md:w-auto border-t-2 border-t-slate-600 pt-2">
            <label>
            Upload Profile Image:
              <input type="file" name="profile" accept="image/*" className="ml-4" onChange={handleProfileImageChange}/>
            </label>
            <label className="my-2">
            Upload Thumbnail for Service: 
              <input type="file" name="thumbnail" accept="image/*" required className="ml-4" onChange={handleThumbnailImageChange}/>
            </label>
          </div>
          <div className="space-y-2 md:flex-row gap-2 items-center w-[20rem] md:w-auto border-t-2 border-t-slate-600">
              <select
                id="services"
                className="w-[20rem] md:w-[10rem] h-[2.5rem] p-2 text-center"
                onChange={handleServiceChange}
              >
              <option value="">Select Service</option>
              {subService.length === 0 ?
              Object.keys(services).map((service, index) => (
                <option key={index} value={service}>
                  {service}
                </option>
              ))
              :
              <option>{service}</option>
              }
            </select>

            <select className="w-[20rem] md:w-[10rem] h-[2.5rem] p-2 text-center " onChange={handleSubServiceSelected}>
              <option value="">Sub-Service</option>
              {service &&
                services[service].map((subService, index) => (
                  <option key={index} value={subService}>
                    {subService}
                  </option>
                ))}
            </select>
            <div className={`border border-slate-700 w-[20rem] md:w-auto flex flex-col md:flex-row gap-2 p-2 ${subService.length === 0? 'hidden': 'block'}`}>

              {
                subService.map((item, index) => (
                    <div className="flex border border-slate-400 rounded-r-[0.5rem] justify-around md:justify-normal" key={`div${item}`}>
                    <p className="text-[0.8rem] p-[0.2rem]" key={`item${item}`}>{item}</p>
                    <p className="cursor-pointer text-[0.8rem] p-[0.1rem] px-[0.5rem] hover:bg-slate-200 hover:rounded-[50%] duration-300 hover:font-bold" key={`close${item}`} onClick={removeSelectedService} data-index={`${index}`}>x</p>
                  </div>
                ))
              }
              
            </div>
          </div>

          <div className="flex gap-4 flex-col md:flex-row border-t-2 border-t-slate-600 pt-2">
            <div className="flex flex-col gap-4 w-[20rem] md:w-[10rem]">
              <select id="sex" className="md:w-[10rem] h-[2.5rem] p-2 text-center" onChange={handleGenderChange}>
                <option>Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>

            <div>
              <p className="mb-2">Description</p>
              <textarea
                placeholder="Tell Us who you're and what you can"
                className="w-[20rem] md:w-[30rem] h-[10rem] p-2 border border-slate-500"
                value={description}
                onChange={handleDescriptionChange}
              />
            </div>
          </div>
          <div className="flex justify-center ">
            <button className="button-style" onClick={handleSignup}>Sign up</button>
          </div>
          <div className="flex justify-center">
            <p>
              Already Have an account{" "}
              <span className="text-green-700 underline text-lg font-semibold">
                <Link to="/">Log In</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpFreelancer;
