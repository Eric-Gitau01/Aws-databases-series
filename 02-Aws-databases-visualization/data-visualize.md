<img src="https://cdn.prod.website-files.com/677c400686e724409a5a7409/6790ad949cf622dc8dcd9fe4_nextwork-logo-leather.svg" alt="NextWork" width="300" />

# Visualize a Relational Database

**Project Link:** [View Project](http://learn.nextwork.org/projects/aws-databases-rds)

**Author:** Eric Gitau  
**Email:** gitaueric09@gmail.com

---

## Visualise a Relational Database

![Image](http://learn.nextwork.org/inspired_purple_vibrant_plum/uploads/aws-databases-rds_1fddb0b5)

---

## Introducing Today's Project!

### What is Amazon RDS?

Amazon RDS (Relational Database Service) is a fully managed cloud service that makes it easy to set up, operate, and scale a relational database. It is useful because it handles tasks like backups, patching, and scaling automatically, allowing developers and businesses to focus on building applications instead of managing database infrastructure.

### How I used Amazon RDS in this project

In today’s project, I used Amazon RDS to create and manage a relational database, populated it with data using MySQL Workbench, and configured security groups to secure the connection. I then connected the RDS instance with Amazon QuickSight to visualize and interact with the data.

### One thing I didn't expect in this project was...

One thing I didn’t expect in this project was the number of errors I encountered while configuring the database, security groups, and connections. Each error, however, provided a valuable learning opportunity and helped me better understand AWS database management and troubleshooting.

### This project took me...

This project took me approximately 2 hour to complete. The time included setting up the RDS instance, configuring security groups, populating data, connecting to MySQL Workbench, and visualizing the data in QuickSight.

---

## In the first part of my project...

### Creating a Relational Database

I created my relational database using Amazon Aurora and Amazon RDS service. I was able to quickly configure the databases with the easy-to-create function, making the setup process smooth and efficient.

![Image](http://learn.nextwork.org/inspired_purple_vibrant_plum/uploads/aws-databases-rds_43343546)

---

## Understanding Relational Databases

A relational database is a type of database that stores information in tables made up of rows and columns, similar to how data is organized in a spreadsheet. Each table represents a specific type of data (for example, customers or orders), and the tables are linked to each other through relationships using keys (like a customer ID). This structure makes it easy to organize, search, and connect data while ensuring accuracy and consistency. Relational databases use SQL (Structured Query Language) to query and manage the data.

### MySQL vs SQL

The difference between SQL and MySQL is that SQL (Structured Query Language) is a programming language used to communicate with and manage data in relational databases, while MySQL is a database management system (DBMS) that uses SQL to store, organize, and retrieve data. In simple terms, SQL is the language or set of rules, and MySQL is the software that implements those rules. For example, you use SQL commands like SELECT, INSERT, or UPDATE to interact with data, and MySQL executes those commands to perform the requested actions on the database.

---

## Populating my RDS instance

The first thing I did was make my RDS instance public to allow MySQL Workbench to connect to it. This step enables secure remote access so I can manage and interact with the database from my local machine.

I had to update the default security group for my RDS instance so that my tool, MySQL Workbench, could access the database from my local machine. This configuration ensures secure and authorized connections while working remotely with the RDS instance.

![Image](http://learn.nextwork.org/inspired_purple_vibrant_plum/uploads/aws-databases-rds_91b9fd1g)

---

## Using MySQL Workbench

![Image](http://learn.nextwork.org/inspired_purple_vibrant_plum/uploads/aws-databases-rds_1fddb0b5)

To populate my database, I used SQL commands such as CREATE TABLE to define the structure, INSERT INTO to add data, and SELECT * to view the contents of the tables. These commands allowed me to efficiently organize and verify the data in my database.

---

## Connecting QuickSight and RDS

To connect my RDS instance to Amazon QuickSight, I modified the inbound rules of my security group and selected RDS when creating a new dataset. This configuration allows QuickSight to securely access the database for visualization and analysis.

This solution is risky because it allows any external user, tool, or service to access my RDS instance, potentially exposing sensitive data or resources.

### A better strategy

First, I created a new security group to allow QuickSight to securely access my RDS instance.

Next, I connected my new security group to QuickSight by adding an inline policy explicitly allowing QuickSight to access the security group.

---

## Now to secure my RDS instance

To secure my RDS instance, I made it private and added an inbound rule to allow connections only from the security group I created. This ensures a secure connection between the RDS instance and QuickSight while preventing unauthorized access.

I ensured that my RDS instance could be accessed from QuickSight by adding the RDS security groups, allowing secure and authorized connections for data visualization.

![Image](http://learn.nextwork.org/inspired_purple_vibrant_plum/uploads/aws-databases-rds_1709b26b)

---

## Adding RDS as a data source for QuickSight

![Image](http://learn.nextwork.org/inspired_purple_vibrant_plum/uploads/aws-databases-rds_1709b29b)

This data source differs from my initial setup because it is not publicly accessible; instead, it connects securely through the dedicated security group, ensuring controlled and authorized access.

![Image](http://learn.nextwork.org/inspired_purple_vibrant_plum/uploads/aws-databases-rds_1709b30b)

---

---
