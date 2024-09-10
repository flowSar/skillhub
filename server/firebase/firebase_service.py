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
        try:
            user = self.auth.create_user_with_email_and_password(self.__email, self.__password)
            if user:
                return True
            else:
                return False
        except:
            return False
    
    def sign_in(self):
        try:
            user = self.auth.sign_in_with_email_and_password(self.__email, self.__password)
            return user
        except Exception as e:
            return False


    def create_account(self, user):
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
        try:
            user = self.auth.sign_in_with_email_and_password(self.__email, self.__password)
            return user
        except Exception as e:
            return False

    def create_account(self, user):
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
    try:
        auth = firebase.auth()
        db = firebase.database()
        user = auth.sign_in_with_email_and_password(os.getenv('email'), os.getenv('password'))
        user = auth.refresh(user['refreshToken'])
        user_token = user['idToken']
        user = db.child('service_providers').child(user_id).get(user_token)
        user_data = {}
        if user_id:
            for u in user:
                user_data[u.key()] = u.val()
                print('user', user_data)
        return user_data
    except Exception as e:
        return {}


def upload_img(path, image):
    if image:
        storage = firebase.storage()
        try:
            storage.child(path).put(image)
            image_url = storage.child(path).get_url(image)
            return image_url
        except Exception as e:
            print(f"errro uplading image: {e}")
 
    else:
        return None


def set_comments(comment, user_name, uid):
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
    except:
        return False



# user = User("khalid mahsousi", "khalid.mahsousi@gmail.com", '123456789')
# user.create_user()
# user.create_account()
# sv = ServiceProvider('ali', 'sata', 'ali.sata@gmail.com', 'werr567er', 'agadir ait mezal', '069876543224', 'agadir', 'morocco', ['monday', 'friday', 'saturday', 'sunday'], ['cleaning Homes', 'cleaning cars'], 'I work deligently')

