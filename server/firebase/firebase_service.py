#!/usr/bin/python3
import pyrebase
from firebase.config import firebaseConfig
from datetime import datetime
import json
import os

firebase = pyrebase.initialize_app(firebaseConfig)

class Customer:

    def __init__(self, username, email, password, gender):
        self.__username = username
        self.__email = email
        self.__password = password
        self.__gender = gender
        self.auth = firebase.auth()
        self.db = firebase.database()
        if self.__gender == 'Male':
            self.__profile_img = 'https://avatar.iran.liara.run/public/boy'
        else:
            self.__profile_img = 'https://avatar.iran.liara.run/public/girl'
    

    def create_user(self):
        """create user"""
        try:
            user = self.auth.create_user_with_email_and_password(self.__email, self.__password)
            if user:
                return True
            else:
                return False
        except:
            return False
    
    def sign_in(self):
        """sign in"""
        try:
            user = self.auth.sign_in_with_email_and_password(self.__email, self.__password)
            return user
        except Exception as e:
            return False


    def create_account(self, user):
        """create account"""
        try:
            id_token = user['idToken']
            uid = user['localId']
            if user:
                user_data = {
                    "uid": uid,
                    "username": self.__username,
                    "email": self.__email,
                    "gender": self.__gender,
                    "profile_img": self.__profile_img,
                    "created_at": datetime.now().isoformat(),
                    "updated_at": datetime.now().isoformat(),
                    }
                self.db.child('users').child(uid).set(user_data, id_token)
                return True
        except Exception as e:
            print(e)
            return False

class ServiceProvider:

    def __init__(self, first_name,
                 last_name, email,
                 password, address,
                 phone_number, city,
                 country, working_days,
                 services, sub_service,description,
                 gender,
                 profile_img="",
                 thumbnail_img="",
                 ):
        self.__first_name = first_name
        self.__last_name = last_name
        self.__email = email
        self.__password = password
        self.__address = address
        self.__phone_number = phone_number
        self.__city = city
        self.__country = country
        self.__working_days = working_days
        self.__services = services
        self.__sub_service = sub_service
        self.__description = description
        self.__gender = gender
        self.__profile_img = profile_img
        self.__thumbnail_img = thumbnail_img
        if self.__profile_img == '':
            if self.__gender == 'Male':
                self.__profile_img = 'https://avatar.iran.liara.run/public/boy'
            else:
                self.__profile_img = 'https://avatar.iran.liara.run/public/girl'
        self.auth = firebase.auth()
        self.db = firebase.database()

    def create_user(self):
        """create user account"""
        try:
            user = self.auth.create_user_with_email_and_password(self.__email, self.__password)
            print('crete user in function', user)
            if user:
                return True
            else:
                return False
        except:
            print('creat user exception')
            return False

    def sign_in(self):
        """sign in """
        try:
            user = self.auth.sign_in_with_email_and_password(self.__email, self.__password)
            return user
        except Exception as e:
            return False

    def create_account(self, user):
        """create nre account if doesn;t exist"""
        try:
            # user = self.auth.refresh(user['refreshToken'])
            id_token = user['idToken']
            uid = user['localId']
            if user:
                user_data = {
                    "uid": uid,
                    "first_name": self.__first_name,
                    "last_name": self.__last_name,
                    "email": self.__email,
                    "address": self.__address,
                    "phone_number": self.__phone_number,
                    "city": self.__city,
                    "country": self.__country,
                    "working_days": self.__working_days,
                    "service": self.__services,
                    "sub_service": self.__sub_service,
                    "description": self.__description,
                    "gender": self.__gender,
                    "profile_img": self.__profile_img,
                    "thumbnail_img": self.__thumbnail_img,
                    "created_at": datetime.now().isoformat(),
                    "updated_at": datetime.now().isoformat(),
                    }
                self.db.child('service_providers').child(uid).set(user_data, id_token)
                return True
        except Exception as e:
            print('error: ',e)
            return False
    

def get_all_service_providers():
    """"this function for fetching all service provider from database"""
    print('email', os.getenv('email'))
    print('password', os.getenv('password'))
    try:
        auth = firebase.auth()
        db = firebase.database()
        user = auth.sign_in_with_email_and_password(os.getenv('email'), os.getenv('password'))
        user = auth.refresh(user['refreshToken'])
        user_token = user['idToken']
        response = db.child('service_providers').get(user_token)
        data = response.val()
        jdata = []
        for values in data.values():
            jdata.append(values)

        return jdata
    except Exception as e:
        print('erro get all service providers', e)
        return []

def update_user_data(user_data):
    """update user data in the firebase"""
    try:
        auth = firebase.auth()
        db = firebase.database()
        user = auth.sign_in_with_email_and_password(user_data.get('email'), user_data.get('password'))
        user_token = user['idToken']
        uid = user_data['uid']
        print(db.child('service_providers').child(uid).update(user_data, token=user_token))
        return True
    except Exception as e:
        print(e)
        return False

def get_user_data(user_id):
    """fetch user data from firebase """
    try:
        auth = firebase.auth()
        db = firebase.database()
        user = auth.sign_in_with_email_and_password(os.getenv('email'), os.getenv('password'))
        user = auth.refresh(user['refreshToken'])
        user_token = user['idToken']
        user = db.child('service_providers').child(user_id).get(user_token)
        user_data = user.val()
        if user_id:
            return user_data
        return False
    except Exception as e:
        return {}


def upload_img(path, image):
    """uplat user profile image and thumbnail to the firebase storage"""
    if image:
        storage = firebase.storage()
        try:
            auth = firebase.auth()
            user = auth.sign_in_with_email_and_password(os.getenv('email'), os.getenv('password'))
            user_token = user['idToken']
            storage.child(path).put(image, user_token)
            image_url = storage.child(path).get_url(image)
            return image_url
        except Exception as e:
            print(f"errro uplading image: {e}")
    else:
        return None


def set_comments(comment, user_name, uid):
    """save user commant to the database"""
    try:
        auth = firebase.auth()
        db = firebase.database()
        user = auth.sign_in_with_email_and_password(os.getenv('email'), os.getenv('password'))
        data = {
            'user_name': user_name,
            'comment': comment,
            'date': datetime.now().strftime('%d-%m-%Y')
        }
        id_token = user['idToken']
        db.child('comments').child(uid).push(data, id_token)
        return True
    except Exception as e:
        print('error',e)
        return False

def get_all_comments(uid):
    """fetch all comment from database based on the service """
    try:
        auth = firebase.auth()
        db = firebase.database()
        user = auth.sign_in_with_email_and_password(os.getenv('email'), os.getenv('password'))
        user = auth.refresh(user['refreshToken'])
        user_token = user['idToken']
        response = db.child('comments').child(uid).get(user_token)
        data = response.val()
        all_comments = []
        for comment in data.values():
            all_comments.append(comment)
        return all_comments
    except Exception as e:
        print('error gettingcomment', e)
        return False

