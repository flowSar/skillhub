#!/usr/bin/python3
import requests
from flask import jsonify, request, abort
from . import app_view

from firebase.firebase_service import firebase, Customer, ServiceProvider, get_all_service_providers, upload_img


@app_view.route('/users')
def get_service_providers():
    # Example: returning a list of users
    return jsonify(get_all_service_providers())

