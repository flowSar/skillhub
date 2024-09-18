

export async function SignUp(data, userType) {
  // sing up : this function will send a reques to the back end to regesiter the user in the database with it info
  // that was sent in the body of the request
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
  // sign in send sign in request to the backend 
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
  // fetch log in state from backend , this function will send requet to the back end to check if this user still logged in
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
  // sent request to backend to logout the user
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
  // get user info using user_id the was sent to the backedn via http hbody
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
  // add comment to the database
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
  // fetch all comments from database
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