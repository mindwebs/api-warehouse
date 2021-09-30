import smtplib

sender = input("Enter your email")
receivers = [i for i in input("Enter the email of your recipient seperated by comma").split(",")]

message = input("Enter your lovely message")

try:
   domain = input("Enter your domain")
   port = input("Enter the port you are using for the email")
   smtpObj = smtplib.SMTP(domain, port)
   smtpObj.sendmail(sender, receivers, message)         
   print("Done, wait for the hello from the other side email")
except SMTPException:
   print("Sorry, unable to send your email try again later")