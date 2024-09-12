

export async function SignUp(data, userType) {
  try {
    const response = await fetch(`https://skillhub-1.onrender.com/signup/${userType}`, {
      method: 'POST',
      credentials: 'include',
      body: data,
    });

    if (response.ok) {
      console.log('Signup successful');
      const rData = await response.json();
      return {result: true, rData};
    } else {
      const rData = await response.json();
      console.error('Signup failed:', rData.error);
      return {result: false, rData: rData.error};
    }
  } catch (error) {
    console.error('Signup failed:', response.statusText);
    return false;
  }
}

export async function SingIn(data) {
  try {
    const response = await fetch(`https://skillhub-1.onrender.com/signin`, {
      method: 'POST',
      credentials: 'include',
      body: data,
    });

    if (response.ok) {
      console.log('Signup successful');
      const data = await response.json();
      return {
        logInState: true,
        credentials: 'include',
        data: data,
      };
    } else {
      console.error('Signup failed:', response.statusText);
      return false;
    }
  } catch (error) {
    console.error('Error:', error);
    return false;
  }
}


export async function LoadLogInState(data) {
  try {
    const response = await fetch(`https://skillhub-1.onrender.com/loginStat`, {
      method: 'POST',
      credentials: 'include',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      return true;
    } else {
      console.error('Signup failed:', response.statusText);
      return false;
    }
  } catch (error) {
    console.error('Error:', error);
    return false;
  }
}


export async function LogOut(data) {
  try {
    const response = await fetch(`https://skillhub-1.onrender.com/logout`, {
      method: 'POST',
      credentials: 'include',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      return true;
    } else {
      console.error('Signup failed:', response.statusText);
      return false;
    }
  } catch (error) {
    console.error('Error:', error);
    return false;
  }
}

export async function getuserInfo() {
  try {
    const response = await fetch('https://skillhub-1.onrender.com/user', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        {
          user_id: localStorage.getItem('user_id')
        }
      ),
    });

    if (response.ok) {
      return  response.json();
    } else {
      console.error('Signup failed:', response.statusText);
      return false;
    }
  } catch (error) {
    console.error('Error:', error);
    return false;
  }
} 


export async function sendComment(data) {
  try {
    const response = await fetch('https://skillhub-1.onrender.com/comment', {
      method: 'POST',
      body: data,
    });

    if (response.ok) {
      return  true;
    } else {
      console.error('Signup failed:', response.statusText);
      return false;
    }
  } catch (error) {
    console.error('Error:', error);
    return false;
  }
}


export async function getComments(data) {
  try {
    const response = await fetch('https://skillhub-1.onrender.com/comments', 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

    if (response.ok) {
      const jsonData = await response.json();
      return  jsonData;
    } else {
      console.error('Signup failed:', response.statusText);
      return false;
    }
  } catch (error) {
    console.error('Error:', error);
    return false;
  }
}

export async function updateProfile(data) {
  // this function will send data for updating the profile
  try {
    const response = await fetch('https://skillhub-1.onrender.com/update_profile', {
      method: 'POST',
      body: data,
    });

    if (response.ok) {
      return  true;
    } else {
      console.error('update failed:', response.statusText);
      return false;
    }
  } catch (error) {
    console.error('Error:', error);
    return false;
  }
}