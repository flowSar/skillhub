#!/usr/bin/python3
from flask import Flask, jsonify, request, session
from flask_session import Session
from api import app_view
from flask_cors import CORS
from firebase.firebase_service import firebase, Customer, ServiceProvider, upload_img, get_user_data, set_comments, get_all_comments, update_user_data
from flask_mail import Mail, Message

app = Flask(__name__)
CORS(app, supports_credentials=True, origins=['https://skillhub-delta.vercel.app/'])
app.config['SESSION_TYPE'] = 'filesystem'
app.config['SECRET_KEY'] = 'ProfesstionalskillHub'
app.config['SESSION_COOKIE_DOMAIN'] = 'skill-hub.site'
app.config['SESSION_COOKIE_PATH'] = '/'
app.config['SESSION_COOKIE_SECURE'] = True
app.config['SESSION_COOKIE_SAMESITE'] = 'None'
Session(app)

app.register_blueprint(app_view)

app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = 'your-email@gmail.com'
app.config['MAIL_PASSWORD'] = 'your-email-password'
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True

mail = Mail(app)

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
    services = request.form.get('service')
    sub_service = request.form.get('sub_service')
    description = request.form.get('description')
    gender = request.form.get('gender')
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
                                        sub_service=sub_service,
                                        description=description,
                                        gender=gender,
                                        profile_img=profile_img,
                                        thumbnail_img=thumbnail_img)
    user = service_provider.create_user()
    if not user:
         print('create user failed', user)
         return jsonify({'error': 'this email address is already in use'}), 409
    signed_in_user = service_provider.sign_in();
    print('sign in ', user)
    if signed_in_user:
        print('acoute created succ', service_provider.create_account(signed_in_user))
        return jsonify({"signup": "success"}), 200
    else:
        print('error sign up :', signed_in_user)
        return jsonify({'error': 'signup failed'}), 409


@app.route('/signup/customer', strict_slashes=False, methods=['POST'])
def sign_up_customer():
        email = request.form.get('email')
        user_name = request.form.get('user_name')
        password = request.form.get('password')
        gender =  request.form.get('gender')
        customer = Customer(username=user_name, email=email, password=password, gender=gender)
        user = customer.create_user()

        if not user:
            print('create user failed')
            return jsonify({'error': 'this email address is already in use'}), 409

        signed_in_user = customer.sign_in()
        if signed_in_user:
            customer.create_account(signed_in_user)
            return jsonify({"signup": "success"}), 200
        else:
             print('error sign up :', signed_in_user)
             return jsonify({'error': 'signup failed'}), 409

@app.route('/update_profile', strict_slashes=False, methods=['POST'])
def update_profile():
    uid = request.form.get('uid')
    # thumbnail_img = request.files.get('thumbnail_img')
    # profile_img = request.files.get('profile_img')
    first_name = request.form.get('first_name')
    last_name = request.form.get('last_name')
    email = request.form.get('email')
    password = request.form.get('password')
    # profile_img_url = upload_img(f'/img/profile/{first_name}-{last_name}.png', profile_img)
    # thumbnail_img_url = upload_img(f'/img/thumbanil/{first_name}-{last_name}.png', thumbnail_img)
    address = request.form.get('address')
    phone_number = request.form.get('phone_number')
    city = request.form.get('city')
    country = request.form.get('country')
    working_days = request.form.get('working_days')
    description = request.form.get('description')
    # profile_img = profile_img_url
    # thumbnail_img = thumbnail_img_url
    user_data = {
        "uid": uid,
        "first_name": first_name,
        "last_name": last_name,
        "email": email,
        "password": password,
        "address": address,
        "phone_number": phone_number,
        "city": city,
        "country": country,
        "working_days": working_days,
        "description": description,
        # "profile_img": profile_img,
        # "thumbnail_img": thumbnail_img
        }
    result = update_user_data(user_data)
    print('result', result);
    if result is True:
        return jsonify({'status': 'update is success'}), 200
    else:
        return jsonify({'status': 'update failed'}), 409


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
            print('session', session.get(str(user_id)))

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
        print('session: ', session.get(str(user_id)), '====', user_id)
        if user_id == session.get(str(user_id)):
            return jsonify({}), 200
        else:
            return jsonify({}), 409
    return jsonify({}), 409


@app.route('/logout', strict_slashes=False, methods=['GET','POST'])
def log_out():
    data = request.get_json()
    user_id = data.get('user_id')
    if user_id:
        print('loging state', session.get(str(user_id)))
        print('login state user_id: ', user_id)
        if session.get(str(user_id)):
            session.pop(str(user_id), None)
            return jsonify({}), 200
        else:
            return jsonify({}), 409
    return jsonify({}), 409


@app.route('/user', strict_slashes=False, methods = ['POST'])
def get_user():
    json_data = request.get_json()
    user_id = json_data.get('user_id')

    if user_id:
        if user_id == session.get(str(user_id)):
            data = get_user_data(user_id)
            if len(data) == 0:
                return jsonify({"error": "user not found"}), 404  
            return jsonify(data), 200
        else:
           return jsonify({"error": "plase log in"}), 404  
    else:
       return jsonify({"error": "user not found"}), 404 

@app.route('/comment', strict_slashes=False, methods = ['POST'])
def set_comment():
    """route for pusing comment to realtime database"""
    comment = request.form.get('comment')
    user_name = request.form.get('user_name')
    uid = request.form.get('uid')
    result = set_comments(comment=comment, user_name=user_name, uid=uid)
    print('ali mohamadof uid', uid)
    if result is True:
        return jsonify({}), 200
    return jsonify({}), 409


@app.route('/comments', strict_slashes=False, methods = ['POST'])
def get_comments():
    """route loading comments from realtime database"""
    uid = request.get_json().get('uid');
    print('uid: ', uid)
    comments = get_all_comments(uid)
    return jsonify(comments), 200

@app.route('/contact', methods=['POST'])
def contact():
    """route for sending msg"""
    try:
        email = request.form.get('email')
        subject = request.form.get('subject')
        msg = request.form.get('message')

        msg = Message(subject=subject,
                    sender=email,
                    recipients=['your-email@gmail.com'])
        msg.body = msg
        mail.send(msg)

        return jsonify({}), 200
    except Exception as e:
        return jsonify({"error": "sending msg was failed"}), 409

@app.route('/')
def Home():
    return '<h1>hello world</h1>'

@app.route('/set_session')
def set_session():
    session['user'] = 'John Doe'
    return 'Session set!'

@app.route('/get_session')
def get_session():
    return session.get('user', 'Session not set')

if __name__ == '__main__':
    app.run(port=3333, debug=True)
    
