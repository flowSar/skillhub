#!/usr/bin/python3
from flask import Flask, jsonify, request, session
from flask_session import Session
from api import app_view
from flask_cors import CORS
from firebase.firebase_service import firebase, Customer, ServiceProvider, get_all_service_providers, upload_img

app = Flask(__name__)
CORS(app, supports_credentials=True)
app.config['SESSION_TYPE'] = 'filesystem'
app.config['SECRET_KEY'] = 'supersecretkey'
Session(app)

app.register_blueprint(app_view)


@app.route('/signup/serviceProvider', strict_slashes=False, methods=['POST'])
def sign_up():
    thumbnail_img = request.files.get('thumbnail_img')
    profile_img = request.files.get('profile_img')
    first_name = request.form.get('first_name')
    last_name = request.form.get('last_name')
    profile_img_url = upload_img(f'/img/profile/{first_name}-{last_name}.png', profile_img)
    thumbnail_img_url = upload_img(f'/img/thumbanil/{first_name}-{last_name}.png', thumbnail_img)
    email = request.form.get('email')
    password = request.form.get('password')
    address = request.form.get('address')
    phone_number = request.form.get('phone_number')
    city = request.form.get('city')
    country = request.form.get('country')
    working_days = request.form.get('working_days')
    services = request.form.get('services')
    description = request.form.get('description')
    profile_img = profile_img_url
    thumbnail_img = thumbnail_img_url
    service_provider = ServiceProvider(first_name=first_name,
                                        last_name=last_name,
                                        email=email,
                                        password=password,
                                        address=address,
                                        phone_number=phone_number,
                                        city=city,
                                        country=country,
                                        working_days=working_days,
                                        services=services,
                                        description=description,
                                        profile_img=profile_img,
                                        thumbnail_img=thumbnail_img)
    user = service_provider.create_user()
    if user == False:
         print('create user failed')
         return jsonify({'error': 'this email address is already in use'}), 409
    signed_in = True if service_provider.sign_in() else False;
    if signed_in == True:
        service_provider.create_account(user)
        return jsonify({"signup": "success"}), 200
    else:
        print('error sign up :', signed_in)
        return jsonify({'error': 'signup failed'}), 409


@app.route('/signup/customer', strict_slashes=False, methods=['POST'])
def sign_up_customer():
        email = request.form.get('email')
        user_name = request.form.get('user_name')
        password = request.form.get('password')
        customer = Customer(username=user_name, email=email, password=password)
        user = customer.create_user()

        if user == False:
            print('create user failed')
            return jsonify({'error': 'this email address is already in use'}), 409

        signed_in = True if customer.sign_in() else False
        if signed_in == True:
            customer.create_account(user)
            return jsonify({"signup": "success"}), 200
        else:
             print('error sign up :', signed_in)
             return jsonify({'error': 'signup failed'}), 409

@app.route('/signin', strict_slashes=False, methods=['GET','POST'])
def sign_in():
    auth = firebase.auth()
    email = request.form.get('email')
    password = request.form.get('password')
    try:
        user = auth.sign_in_with_email_and_password(email, password)
        sign_in = True if user else False
        if sign_in == True:
            user_id = user['localId']
            session[str(user_id)] = str(user_id)

            return jsonify({'user_id': user_id}), 200
        else:
            return jsonify({"error": "sign in failed"}), 409
    except Exception as e:
        print('exception', e)
        return jsonify({"error": "sign in failed"}), 409

@app.route('/loginStat', strict_slashes=False, methods=['GET','POST'])
def log_in():
    data = request.get_json()
    user_id = data.get('user_id')
    if user_id:
        if user_id == session.get(str(user_id)):
            print(f'user_id {user_id} == {session.get(str(user_id))}')
            return jsonify({}), 200
        else:
            return jsonify({}), 409
    return jsonify({}), 409


@app.route('/logout', strict_slashes=False, methods=['GET','POST'])
def log_out():
    data = request.get_json()
    user_id = data.get('user_id')
    if user_id:
        if session.get(str(user_id)):
            session.pop(str(user_id), None)
            return jsonify({}), 200
        else:
            return jsonify({}), 409
    return jsonify({}), 409

@app.route('/')
def Home():
    return '<h1>hello world</h1>'


if __name__ == '__main__':
    app.run(port=3333, debug=True)
    
