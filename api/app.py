from flask import Flask
from flask_cors import CORS


app = Flask(
    "arte-movies-api",
)
CORS(app)


@app.route("/hello")
def hello_world():
    return {"message": "Hello, World!!!"}
