# user-authentications
Developer Guide
Getting Started
Prerequisites
virtualenv
postgresql
mysql
redis
Initialize the project
Create and activate a virtualenv:

virtualenv venv
source venv/bin/activate
Install dependencies:

pip install -r requirements.txt
NOTE: After installing dependencies, pip-tools is also installed. You can now use it to manage package dependencies of your project.

'''
Add a new package to requirements.in and run the following command to auto-update requirements.txt file
'''
pip-compile requirements.in

'''
Run the following command to sync your virtualenv
'''
pip-sync
For more details, https://github.com/nvie/pip-tools

Migrate, create a superuser, and run the server:

python manage.py migrate
python manage.py makemigrations {{cookiecutter.project_name}}
python manage.py createsuperuser
python manage.py runserver
Setting up Environment Variables
Edit the environment variables in '.env.template' file and then RENAME the file to '.env'
