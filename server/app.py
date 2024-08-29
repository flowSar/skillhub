
from flask import Flask
from api import app_view

app = Flask(__name__)

app.register_blueprint(app_view)


if __name__ == '__main__':
    app.run(port=3333, debug=True)
    
