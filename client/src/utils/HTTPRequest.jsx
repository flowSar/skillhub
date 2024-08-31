

export async function SignUp(data, userType) {
  try {
    const response = await fetch(`http://localhost:3333/signup/${userType}`, {
      method: 'POST',
      body: data,
    });

    if (response.ok) {
      console.log('Signup successful');
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

export async function SingIn(data) {
  try {
    const response = await fetch(`http://localhost:3333/signin`, {
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
    const response = await fetch(`http://localhost:3333/loginStat`, {
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
    const response = await fetch(`http://localhost:3333/logout`, {
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
