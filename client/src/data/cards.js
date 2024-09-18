
const servicesUrl = 'https://skillhub-1.onrender.com/api/users';

export const loadAllServiceProviders = async () => {
  // load all service providers data from database
  const response = await fetch(servicesUrl);

  if (response.ok) {
    const data = await response.json()  
    return data;  
  } else {
    return [];
  }
};

export const cards = [];
