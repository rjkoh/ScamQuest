export async function getQuestions() {
    const questions = [
        {
          'questionId': 1,
          'questionType': 0,
          'body': "",
          'question': "What is a key characteristic of a phishing scam?",
          'options': [
            "Offering genuine investment opportunities",
            "Sending emails or messages that appear to be from legitimate institutions asking for personal information",
            "Promising high returns with no risk",
            "Offering discounts on popular products"
          ],
          'answer': 1
        },
        {
          'questionId': 2,
          'questionType': 0,
          'body': "",
          'question': "What is the purpose of a firewall?",
          'options': [
            "To manage the user's passwords",
            "To protect a network by controlling incoming and outgoing traffic",
            "To increase the speed of the internet",
            "To store large amounts of data securely"
          ],
          'answer': 1
        },
        {
          'questionId': 3,
          'questionType': 0,
          'body': "",
          'question': "Which of the following is a strong password?",
          'options': [
            "password123",
            "12345678",
            "Qwerty",
            "Xyz@789!"
          ],
          'answer': 3
        },
        {
          'questionId': 4,
          'questionType': 0,
          'body': "",
          'question': "What does 'https' signify in a website URL?",
          'options': [
            "The website is running on an outdated protocol",
            "The website is safe and uses a secure connection",
            "The website is not available",
            "The website is hosted on a private server"
          ],
          'answer': 1
        },
        {
          'questionId': 5,
          'questionType': 0,
          'body': "",
          'question': "What is the primary function of antivirus software?",
          'options': [
            "To create backups of important files",
            "To detect and remove malicious software",
            "To speed up the computer's performance",
            "To provide internet access"
          ],
          'answer': 1
        },
        {
          'questionId': 6,
          'questionType': 0,
          'body': "",
          'question': "What is social engineering in the context of cybersecurity?",
          'options': [
            "Using software tools to protect data",
            "Manipulating people into giving up confidential information",
            "Building secure networks",
            "Encrypting sensitive information"
          ],
          'answer': 1
        },
        {
          'questionId': 7,
          'questionType': 0,
          'body': "",
          'question': "Which of the following is an example of two-factor authentication?",
          'options': [
            "Entering a username and password",
            "Using a password and a security token",
            "Providing a fingerprint scan",
            "Using an encrypted email"
          ],
          'answer': 1
        },
        {
          'questionId': 8,
          'questionType': 0,
          'body': "",
          'question': "What is malware?",
          'options': [
            "Software designed to protect a computer system",
            "Software intended to perform unauthorized actions on a computer system",
            "Hardware that enhances computer performance",
            "A type of data backup"
          ],
          'answer': 1
        },
        {
          'questionId': 9,
          'questionType': 0,
          'body': "",
          'question': "Which of the following actions can help protect your online privacy?",
          'options': [
            "Sharing your passwords with friends",
            "Using public Wi-Fi for sensitive transactions",
            "Regularly updating your software and using strong, unique passwords",
            "Clicking on links in unsolicited emails"
          ],
          'answer': 2
        },
        {
          'questionId': 10,
          'questionType': 0,
          'body': "",
          'question': "What is ransomware?",
          'options': [
            "Software that speeds up your computer",
            "A type of malware that demands payment to restore access to your data",
            "A security tool that encrypts data",
            "A backup solution for critical files"
          ],
          'answer': 1
        }
      ];
      
      
    return questions;
}