#!/usr/bin/python3
from flask import jsonify
from . import app_view


@app_view.route('/users')
def get_users():
    # Example: returning a list of users
    users = [
        {"id": 1, "name": "John Doe"},
        {"id": 2, "name": "Jane Doe"}
    ]
    return jsonify(users)
