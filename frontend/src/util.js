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

export async function getTrends() {
  const trends = [
    {
      'trendId': 1,
      'header': "BEWARE OF FAKE FRIEND CALL SCAMS",
      'author': "anonymous",
      'date': "30/5/24",
      'body': "Cold call. He knew my name (but didn't say his) and started by informing me that he had changed to a new phone number. He then tried to trick me into mentioning a real friend's name."
    },
    {
      'trendId': 2,
      'header': "BEWARE OF JOB SCAMS",
      'author': "anonymous",
      'date': "26/5/24",
      'body': "I came across a job scam promising high pay with commission for working from home, Monday to Friday, 10am to 6pm. Pretending to be from: MMI Group Media. Here’s how it started: The company claimed they found your resume on a job website and offered you an easy admin job processing hotel bookings for Agoda, Booking.com, and Trip.com. Initially, they build trust by paying you via PayNow for completing tasks, with payment on the same day. However, on the second day, they ask you to pay for hotel bookings, promising to reimburse you plus a commission. They lead you to a room where you're presented with multiple bookings to pay even more. Some people post screenshots showing they transferred money to the company, but these are insiders trying to make you feel safe about transferring money. Once you pay, they ask for more money for additional bookings, claiming your group won't get paid unless you complete the bookings. They use guilt and fake testimonials to coerce you into paying more. Do not believe them."
    },
    {
      'trendId': 3,
      'header': "ONLINE FRIEND TURNED OUT TO BE A SCAMMER",
      'author': "anonymous",
      'date': "26/5/24",
      'body': "I met Sam on CMB in April 2024. According to his profile, he is from Australia but stays in Malaysia and works as a property project developer. Throughout our conversations on the app, he was polite and never pushy. Before our chatroom closed, I gave him my phone number for coffee if he came over to Singapore. Once we were on WhatsApp, he began professing his love for me, citing that I was different from his previous partners. He even insisted that we both delete our CMB profiles, which he did before me. He was attentive and remembered every detail I shared with him. However, the red flag was his refusal to meet up, even though we were just across the causeway. We chatted over text and WhatsApp calls for close to two months. Over the phone, he sounded Australian and spoke very well. During this time, he built up a story about rushing to complete his project and meeting me in Singapore in another two months. He also painted a beautiful picture of bringing me home to Sydney to meet his mum. He offered to do video calls, but somehow the video quality was always terrible and barely lasted for 30 seconds. After nearly two months of being in touch, he shared that the project's investor delayed his payment, and he needed to pay his workers from his personal funds. He also said that, in a bid to meet me earlier, he made the workers work overtime, which depleted his personal funds. He asked me for a loan of SGD 6,000. I refused, but he pestered me endlessly for two days. After this failed attempt, he disappeared, likely realising I was a bad candidate."
    },
    {
      'trendId': 4,
      'header': "AM A DUMB FUCK",
      'author': "anonymous",
      'date': "26/5/24",
      'body': "I kena baited to join hackathon."
    }
  ];

  return trends;
}