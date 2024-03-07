from flask import Flask, request, jsonify
from flask_cors import CORS
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

app = Flask(__name__)
CORS(app)  # Enable Cross-Origin Resource Sharing

@app.route('/send-email', methods=['POST'])
def send_email():
    data = request.json
    name = data.get('name')
    subject = data.get('subject')
    message = data.get('message')

    # Your email credentials and SMTP server
    sender_email = 'mwangimark57@gmail.com'
    sender_password = 'nqnr ndyk dhax mtjj'
    recipient_email = 'mwangimark57@gmail.com'  # Replace with your email address
    smtp_server = 'smtp.gmail.com'
    smtp_port = 587

    # Create MIME message
    msg = MIMEMultipart()
    msg['From'] = sender_email
    msg['To'] = recipient_email
    msg['Subject'] = 'New Form Submission'

    body = f"Name: {name}\nSubject: {subject}\nMessage: {message}"
    msg.attach(MIMEText(body, 'plain'))

    try:
        # Set up the SMTP server
        server = smtplib.SMTP(smtp_server, smtp_port)
        server.starttls()
        server.login(sender_email, sender_password)

        # Send the email
        server.sendmail(sender_email, recipient_email, msg.as_string())

        # Close the connection
        server.quit()

        return jsonify({'message': 'Email sent successfully'}), 200
    except Exception as e:
        print(e)
        return jsonify({'error': 'Failed to send email'}), 500

if __name__ == '__main__':
    app.run(debug=True)
