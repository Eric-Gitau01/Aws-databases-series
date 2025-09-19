<img src="https://cdn.prod.website-files.com/677c400686e724409a5a7409/6790ad949cf622dc8dcd9fe4_nextwork-logo-leather.svg" alt="NextWork" width="300" />

# Connect a Web App with Aurora

**Project Link:** [View Project](http://learn.nextwork.org/projects/aws-databases-webapp)

**Author:** Eric Gitau  
**Email:** gitaueric09@gmail.com

---

## Connect a Web App to Amazon Aurora

![Image](http://learn.nextwork.org/inspired_purple_vibrant_plum/uploads/aws-databases-webapp_1709b26b)

---

## Introducing Today's Project!

### What is Amazon Aurora?

Amazon Aurora is a fully managed relational database service provided by AWS that is compatible with MySQL and PostgreSQL. It is useful because it offers high performance, scalability, and availability while reducing the administrative overhead of managing a database, allowing developers to focus on building applications rather than maintaining infrastructure.

### How I used Amazon Aurora in this project

In today’s project, I used Amazon Aurora to connect with a web application, allowing me to add and manage data directly through the web app. This demonstrated how a cloud-based relational database can seamlessly support dynamic web applications.

### One thing I didn't expect in this project was...

One thing I didn’t expect in this project was how smoothly Amazon Aurora integrated with my web app, making it easier than anticipated to set up the database connection and manage data in real time.

### This project took me...

This project took me approximately 60 minutes to complete, from setting up the EC2 instance and Aurora database to connecting them and testing the web application.

---

## Creating a Web App

![Image](http://learn.nextwork.org/inspired_purple_vibrant_plum/uploads/aws-databases-webapp_b7999168)

To connect to my EC2 instance, I used the terminal and established a secure connection via SSH with the command ssh -i NextWorkAuroraApp.pem ec2-user@ec2-3-252-220-221.eu-west-1.compute.amazonaws.com. Before doing this, I ensured the private key file had the correct permissions by running chmod 400 NextWorkAuroraApp.pem, which restricts access to the file and allows the SSH client to use it securely. This step was necessary to authenticate my connection and safely access the EC2 instance.

To prepare for creating my web app, I first ensured that all software on the EC2 instance was up to date. I then installed all the necessary tools required to run the web application, including the Apache web server, PHP, PHP libraries, and MariaDB. This setup provides a complete environment for hosting and managing the web app, ensuring that both the server and database components are ready for development and deployment.

---

## Connecting my Web App to Aurora

I set up my EC2 instance’s connection details to the database by using the terminal and editing the dbinfo.inc file with Nano. This allowed me to securely configure the database credentials and connection settings so that the web application can communicate with the Aurora database.

![Image](http://learn.nextwork.org/inspired_purple_vibrant_plum/uploads/aws-databases-webapp_1709b25b)

---

## My Web App Upgrade

Next, I upgraded my web app by adding a sample page—a PHP file—that includes a header and a form layout. This page allows me to input data, serving as a basic interface to interact with the database and test the functionality of the web application.

![Image](http://learn.nextwork.org/inspired_purple_vibrant_plum/uploads/aws-databases-webapp_2709b25b)

---

## Testing my Web App

To ensure my web app was working correctly, I used the MySQL CLI to verify that I could retrieve all the data entered through the web application. This step confirmed that the web app was properly communicating with the database and that data was being stored and accessed as intended.

![Image](http://learn.nextwork.org/inspired_purple_vibrant_plum/uploads/aws-databases-webapp_1409z22b)

---

---
