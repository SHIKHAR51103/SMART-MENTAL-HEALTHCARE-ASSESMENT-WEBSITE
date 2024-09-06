import csv
import requests
from time import sleep
from flask import Flask, render_template_string, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template_string(open('index.html').read())

@app.route('/submit', methods=['POST'])
def submit():
    username = request.form['username']

    # Simulate the test and store the score
    score = run_color_name_guessing_test(username)

    # Save the name and score to a CSV file
    file_path = "dataset.csv"
    data = [username, score]
    save_to_csv(file_path, data)

    return "Score saved successfully!"

def run_color_name_guessing_test(username):
    # Set up the URL for the local server
    url = "http://127.0.0.1:5000/"

    # Initialize the session and fetch the initial page
    session = requests.Session()
    response = session.get(url)

    # Implement the logic of the test here (same as before, without Selenium)
    # ...

    # For testing purposes, we'll use a random score between 0 and 100
    import random
    score = random.randint(0, 100)

    # Submit the test result by sending a POST request with username and score
    data = {'username': username, 'score': str(score)}
    response = session.post(url + "submit", data=data)
    sleep(1)  # Wait for a moment before proceeding

    return score

def save_to_csv(file_path, data):
    with open(file_path, 'a', newline='') as csvfile:
        writer = csv.writer(csvfile)
        writer.writerow(data)

if __name__ == '__main__':
    app.run()
