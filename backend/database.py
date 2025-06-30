import mysql.connector
from dotenv import load_dotenv
import os

dotenv_path = os.path.join(os.path.dirname(__file__), '.env')
load_dotenv(dotenv_path)

db_user = os.getenv("user")
db_password = os.getenv("password")
db_name = os.getenv("database")


def get_connection():
    return mysql.connector.connect(
        host="127.0.0.1",
        user=db_user,
        password = db_password,
        database = db_name,
        use_pure=True
    )
