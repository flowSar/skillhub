Here’s a sample README file for your Skillhub project:

---

# Skillhub

**Skillhub** is a web application that connects service providers with potential customers or clients. It enables customers to browse service providers' information and facilitates account creation for both service providers and customers.

## Features
- Customers can create an account, log in, and view service providers' personal information.
- Service providers can also create an account to offer their services.
- Frontend built with **React** and **Tailwind CSS**, deployed on **Vercel**.
- Backend built with **Python Flask**, deployed on **Render**.
- Firebase is used for authentication, database, and storage.
- Domain name registered via **Namecheap**.

You can check and access the live app at: [Skillhub](https://skill-hub.site)

## Technologies Used
- **Frontend**: React, Tailwind CSS, Vercel
- **Backend**: Flask, Render
- **Database & Authentication**: Firebase
- **Domain**: Namecheap

## Setup for Local Development

### Requirements:
- Node.js
- Python 3.12.8 (Make sure to install Python 3.12.8 to avoid compatibility issues)
- Firebase account

### Steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/flowSar/skillhub.git
   cd skillhub
   ```

2. **Firebase Setup:**
   - Create a Firebase project.
   - Enable **Email/Password** authentication.
   - Set up **Realtime Database** and **Storage** with the following rules:

   **Realtime Database Rules:**
   ```json
   {
     "rules": {
       "users": {
         "$uid": {
           ".read": "$uid === auth.uid",
           ".write": "$uid === auth.uid"
         }
       },
       "service_providers": {
         ".read": "auth != null",
         "$uid": {
           ".write": "$uid === auth.uid"
         }
       },
       "comments": {
         ".read": "auth != null",
         ".write": "auth != null"
       }
     }
   }
   ```

   **Storage Rules:**
   ```txt
   rules_version = '2';

   service firebase.storage {
     match /b/{bucket}/o {
       match /{allPaths=**} {
         allow read;
         allow write: if request.auth != null;
       }
     }
   }
   ```
3. **Admin Account Setup (Critical for Testing):**

	To view the service providers' information, you need an authenticated user due to Firebase's security rules.
	Create an admin account with email and password in Firebase.
	Store the email and password in environment variables to access the service providers' data:
	bash
	Copy code
	export email="your_email@example.com"
	export password="your_password"
	This step is necessary because Firebase rules allow only authenticated users to read the service providers' information.
4. **Backend Setup:**
   - Navigate to the `server/` directory:
     ```bash
     cd server/
     ```
   - Create a virtual environment and install the required packages:
     ```bash
     python3 -m venv venv
     source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
     pip3 install -r requirements.txt
     ```
   - Run the backend:
     ```bash
     python3 app.py  # or chmod u+x app.py ./app.py
     ```
   - Backend should run on: `http://localhost:3333`

5. **Frontend Setup:**
   - Navigate to the `client/` directory:
     ```bash
     cd client/
     ```
   - Install frontend dependencies:
     ```bash
     npm install
     ```
   - Update the backend URL in the frontend:
     - In `client/src/data/cards.js`, replace `https://skillhub-1.onrender.com` with `http://localhost:3333`
     - In `client/src/utils/HTTPRequest.jsx`, replace all instances of `https://skillhub-1.onrender.com` with `http://localhost:3333`
   - Run the frontend:
     ```bash
     npm run dev
     ```
   - Open the app in your browser at: `http://localhost:5173/`

## Contributing

Feel free to contribute to this project by creating issues or submitting pull requests.

## Author

- **Brahim Sarouri**
- Email: brahim.sar151@gmail.com

