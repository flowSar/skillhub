#!/usr/bin/python3
import requests
from flask import jsonify, request, abort

from . import app_view

from firebase.firebase_service import firebase, Customer, ServiceProvider, get_all_service_providers, upload_img, get_user_data


@app_view.route('/users')
def get_service_providers():
    # Example: returning a list of users
    data = get_all_service_providers()
    print('data',data)
    if len(data) > 0:
        return jsonify(data), 200
    return jsonify({}), 409

