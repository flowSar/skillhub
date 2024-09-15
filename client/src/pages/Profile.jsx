import React, { useEffect, useState } from 'react'
import { services } from '../data/services';
import { Link, useNavigate } from 'react-router-dom';
import { getuserInfo, updateProfile } from '../utils/HTTPRequest';

import SimpleHeader from '../components/SimpleHeader'
import Footer from '../components/Footer';

const Profile = () => {
  const [userData, setUserData] = useState({});
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'friday', 'saturday', 'sunday'];
  const [firstName , setFirstName] = useState("");
  const [lastName , setLastName] = useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [workingDays, setWorkingDays] = useState([]);
  const [service, setSevice] = useState("");
  const [description, setDescription] = useState("");
  const [errroVisible, setErrroVisible] = useState("hidden");
  const [subService, setSubservices] = useState([]);

  const handleFirstNameChnage = (event) => setFirstName(event.target.value);
  const handlelastNameChange = (event) => setLastName(event.target.value);
  const handleAddressChange = (event) => setAddress(event.target.value);
  const handlePhoneNumberChange = (event) => setPhoneNumber(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
  const handleCityChange = (event) => setCity(event.target.value);
  const handleCountryChange = (event) => setCountry(event.target.value);
  const navigate = useNavigate()
  const [dataLoaded, setDateLoaded] = useState(false);
  const handleDaysChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setWorkingDays([...workingDays, value]);
    } else {
      setWorkingDays(workingDays.filter((item) => item !== value));
    }
  }
 
  const handleServiceChange = (event) => setSevice(event.target.value);
  const handleDescriptionChange = (event) => setDescription(event.target.value);


  const formData = new FormData()
  formData.append('first_name', firstName)
  formData.append('last_name', lastName)
  formData.append('email', email)
  formData.append('password', password)
  formData.append('phone_number', phoneNumber)
  formData.append('city', city)
  formData.append('country', country)
  formData.append('address', address)
  formData.append('working_days', workingDays)
  formData.append('sub_service', subService)
  formData.append('description', description)
  formData.append('uid', localStorage.getItem('user_id'));

  // this function handle sign up click
  const handleSignup = async () => {
    // when we click on sign up we call this fuction with data and usertype (customer, serviceProvider)
    //updateServiceProvider(formData)
    
    const result = await updateProfile(formData);
    if (result === true) {
      alert('your profile has been updated');
      navigate('/profile');
    } else {
      alert('update failed be sure your password is correct');
    }
  };

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


  useEffect(() => {
    const fetchData = async () => {
      const data = await getuserInfo();
      if (data) {
        setUserData(data);
        setFirstName(data.first_name);
        setLastName(data.last_name);
        setEmail(data.email);
        setAddress(data.address);
        setPhoneNumber(data.phone_number);
        setCity(data.city);
        setCountry(data.country)
        setDescription(data.description);
        setWorkingDays(data.working_days.split(','));
        setDateLoaded(true);
        setSevice(data.service)
        setSubservices(data.sub_service.split(','))
      } else {
        alert("if you're not a service provider you can't see your profile information but if you're please wait or reload the page or check you connection");
      }
    };
    
    fetchData();
  }, []);
  
  return (
    <>
      <SimpleHeader />
      <div className='relative h-full flex justify-center items-center'>
      <div className={` p-6 rounded-xl w-[46rem] mt-[3rem]`}>
        <div className="space-y-2 md:space-y-4">
          <p className={`text-center text-red-500 ${errroVisible}`}>please ensure that you filled all the required information</p>
          <p className={`text-center text-red-500 ${errroVisible}`}>sign up failed this email is already exist</p>
          <div className='gap-2 flex'>
              <p className='w-[21.5rem]'>Enter your current Password to so you can save changes</p>
              <input 
              type='password' 
              className="input-style w-[20rem] shadow-lg"
              value={password} 
              onChange={handlePasswordChange} />
          </div>
          <div className="flex gap-2 md:gap-8 flex-col md:flex-row">
            <div className='shadow-lg'>
              <p>First name</p>
              <input
                type="text"
                placeholder="First Name"
                className="input-style w-[20rem]"
                value={firstName}
                onChange={handleFirstNameChnage}
              />
            </div>
            <div className='shadow-lg'>
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
            <div className='shadow-lg'>
              <p>Address</p>
              <input
                type="text"
                placeholder="address"
                className="input-style w-[20rem]"
                value={address}
                onChange={handleAddressChange}
              />
            </div>
            <div className='shadow-lg'>
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
            <div className='shadow-lg'>
              <p>City</p>
              <input
                type="text"
                placeholder="City"
                className="input-style w-[20rem]"
                value={city}
                onChange={handleCityChange}
              />
            </div>
            <div className='shadow-lg'>
              <p>Country</p>
              <select className="input-style w-[20rem] bg-white">
                <option>{ country }</option>
              </select>
            </div>
          </div>
          <div className='shadow-lg'>
            <label id="days" className="">
              Select Working Days:
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4  bg-gray-200 p-2">

              { days.map((day, index) => (
                <label key={day}>
                <input key={`${day}$-${index}`} type="checkbox" name="day" 
                value={day}
                checked={workingDays.includes(day)}
                onChange={handleDaysChange}
                /> {day}
              </label>
              ))}
            </div>
          </div>
          <div className="flex gap-4 flex-col border-t-4 border-x-black pt-2 shadow-lg">
          <div className="space-y-2 space-x-2 md:flex-row gap-2 items-center w-[20rem] md:w-auto">
              <select
                id="services"
                className="w-[20rem] md:w-[10rem] h-[2.5rem] p-2 text-center"
                onChange={handleServiceChange}
              >
              <option>
                {service}
              </option>
            </select>

            <select className="w-[20rem] md:w-[10rem] h-[2.5rem] p-2 text-center " onChange={handleSubServiceSelected}>
              <option value="">Sub-Service</option>
              {service &&
                services[service].map((subs, index) => (
                  <option key={index} value={subs}>
                    {subs}
                  </option>
                ))}
            </select>


            <div className={`border border-slate-700 w-[20rem] md:w-auto flex gap-2 p-2 ${subService.length === 0? 'hidden': 'block'}`}>
              {
                subService.map((item, index) => (
                    <div className="flex  border border-slate-400 rounded-lg " key={`div${item}`}>
                    <p className="text-[0.8rem] p-[0.2rem]" key={`item${item}`}>{item}</p>
                    <p className="cursor-pointer text-[0.8rem] p-[0.2rem]" onClick={removeSelectedService} key={`close${item}`} data-index={`${index}`}>x</p>
                  </div>
                ))
              }
              
            </div>
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
          <div className="flex justify-center">
            <button className="button-style shadow-lg" onClick={handleSignup}>Save Changes</button>
          </div>
        </div>
      </div>
        {
          !dataLoaded?
            <div className={`loading absolute inset-0 flex items-center justify-center bg-white ${dataLoaded}`}>
            <p className="w-[8rem] text-center">Please wait...</p>
            <div className="spinner"></div>
          </div>
          :
          ""
        }
      </div>
      <Footer />
    </>
  );
}

export default Profile