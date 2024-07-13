from flask import Flask, render_template, session, flash, redirect, url_for, request
from .utils.helpers import response
from flask_login import LoginManager
from os import path
from .config.database import db
from .models.User import User
# from .config.database import get_db_connection
from .config.variable import SECRET_KEY, MYSQL_HOST, MYSQL_PORT, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DB, DATABASE_URI

# db = get_db_connection()


def create_app():
    app = Flask(__name__)

    # CONFIGS
    app.config['SECRET_KEY'] = SECRET_KEY
    app.config['MYSQL_HOST'] = MYSQL_HOST
    app.config['MYSQL_PORT'] = MYSQL_PORT
    app.config['MYSQL_USER'] = MYSQL_USER
    app.config['MYSQL_PASSWORD'] = MYSQL_PASSWORD
    app.config['MYSQL_DB'] = MYSQL_DB
    app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE_URI

    # Blueprint
    from .views.auth import auth
    app.register_blueprint(auth, url_prefix='/auth')

    # Armstrong Number Checker Blueprint
    from .views.app_routes import arm_num_checker
    app.register_blueprint(arm_num_checker, url_prefix='/arm_num_checker')

    # User Blueprint
    # from .views.user import user_bluprt
    # app.register_blueprint(user_bluprt, url_prefix='/user')

    # OTHER SETUPS
    from .config.database import db
    db.init_app(app)

    # MODELS
    from . import models

    create_database(app)

    # LOGIN MANAGER
    login_manager = LoginManager()
    login_manager.login_view = 'auth.login_page'
    login_manager.init_app(app)

    @login_manager.user_loader
    def load_user(user_id):
        return User.query.get(user_id)

    @login_manager.unauthorized_handler
    def handle_needs_login():
        flash("You have to be logged in to access this page.")
        return redirect(url_for('auth.login_page', next=request.endpoint))

    # @login_manager.user_loader
    # def load_user(user_id):
    #     user_session = session.get('user')
    #     if user_session and user_session.user_id == user_id:
    #         return user_session

    # ERROR 404
    @app.errorhandler(404)
    def page_not_found(error):
        print("404 ERROR:", str(error))
        return render_template("errors/error-404.html")

    @app.errorhandler(Exception)
    def server_error(error):
        print("SERVER ERROR:", str(error))
        return response(str(error), None, False)

    return app


def create_database(app):
    if not path.exists('app/' + MYSQL_DB):
        with app.app_context():
            db.create_all()
            print(' *', 'Database created and tables initialized!')