# from mysql.connector import connect
# from .variable import HOST, PORT, USER, PASSWORD, DATABASE

from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


# def get_db_connection():
#     try:
#         db = connect(
#             host=HOST,
#             port=PORT,
#             user=USER,
#             password=PASSWORD,
#             database=DATABASE
#         )

#         if db.is_connected():
#             print(' *', 'DATABASE CONNECTED')

#         cursor = db.cursor(dictionary=True, buffered=True)
#         return db, cursor

#     except Exception as e:
#         print('DATABASE ERROR:', str(e))
