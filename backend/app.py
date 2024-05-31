# app.py
from flask import Flask, request, jsonify

app = Flask(__name__)

questions_data = {
    "Data": [
        {
            "questionId": 1,
            "questionType": 0,  # 0 = MCQ/TrueFalse, 1 = MRQ with Body, 2 = Fun Fact
            "Body": "",
            "question": "What is my name?",
            "options": ["Silas", "Jed", "Michael", "John"],
            "answer": 0
        },
        # Add more questions as needed
    ],
    "Status": 200
}

# Sample data for /trends endpoint
trends_data = {
    "Data": [
        {
            "trendID": 1,
            "header": "BEWARE OF FAKE FRIEND CALL SCAMS",
            "author": "anonymous",
            "date": "30/5/24",
            "body": "I was a dumb fuck and kena scam"
        },
        # Add more trends as needed
    ],
    "Status": 200
}

@app.route('/questions', methods=['GET'])
def get_questions():
    return jsonify(questions_data)

@app.route('/trends', methods=['GET'])
def get_trends():
    return jsonify(trends_data)

if __name__ == '__main__':
    app.run(debug=True)