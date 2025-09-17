<img src="https://cdn.prod.website-files.com/677c400686e724409a5a7409/6790ad949cf622dc8dcd9fe4_nextwork-logo-leather.svg" alt="NextWork" width="300" />

# Aurora Database with EC2

**Project Link:** [View Project](http://learn.nextwork.org/projects/aws-databases-aurora)

**Author:** Eric Gitau  
**Email:** gitaueric09@gmail.com

---

## Connect a Web App to Amazon Aurora

![Image](http://learn.nextwork.org/inspired_purple_vibrant_plum/uploads/aws-databases-aurora_44443546)

---

## Introducing Today's Project!

### What is Amazon Aurora?

Amazon Aurora is a fully managed relational database service built for high performance and availability. It is useful because it automatically scales, provides strong security, supports failover with minimal downtime, and is compatible with MySQL and PostgreSQL, making it easier to run applications that need reliable and efficient database performance.

### How I used Amazon Aurora in this project

In today’s project, I used Amazon Aurora to connect to my EC2 instance. This helped me learn how to set up a relational database and link it with a compute resource. By doing this, I practiced important cloud skills like database creation, secure access, and connectivity, which are key steps toward hosting a web application on AWS.

### One thing I didn't expect in this project was...

One thing I didn’t expect in this project was how expensive it can be to run both the Aurora database and the EC2 instance at the same time. This made me realize the importance of managing resources carefully and understanding AWS pricing before launching services.

### This project took me...

This project took me a 45 min to complete because I had to go step by step first creating the IAM user, then setting up the EC2 instance, and finally creating and connecting the Aurora database. The process required careful attention to detail, especially when configuring security and connectivity.

---

## In the first part of my project...

### Creating an Aurora Cluster

A relational database is..A relational database is a type of database that organizes data into tables made up of rows and columns. Each table stores related information, and relationships between tables are created using keys. This structure makes it easier to store, manage, and retrieve data efficiently while ensuring consistency and accuracy.

Aurora is a good choice when you have a large-scale application that needs a relational database. This is because Aurora uses clusters, which provide high availability, scalability, and efficient performance, making it well-suited for handling demanding workloads.

![Image](http://learn.nextwork.org/inspired_purple_vibrant_plum/uploads/aws-databases-aurora_44443546)

---

## Halfway through I stopped!

I stopped creating my Aurora database because I first need to set up an EC2 instance. This will allow me to connect the Aurora database with the EC2 instance and make sure the two resources can communicate properly.

### Features of my EC2 instance

I created a new key pair for my EC2 instance because I want to securely connect to my EC2 instance and use it to access my Aurora database. The key pair ensures that only authorized users can log in to the instance through a secure SSH connection.

When I created my EC2 instance, I took note of the public IPv4 DNS address, the public IPv4 address, and the key pair name. This information is important because it helps me know how to securely access my instance using the key pair and identify the correct address to connect to when working with my Aurora database.

![Image](http://learn.nextwork.org/inspired_purple_vibrant_plum/uploads/aws-databases-aurora_91b9fd1g)

---

## Then I could finish setting up my database

![Image](http://learn.nextwork.org/inspired_purple_vibrant_plum/uploads/aws-databases-aurora_1fddb0b5)

Aurora Database uses clusters because they provide high availability, scalability, and fault tolerance. A cluster has multiple database instances and shared storage, which means if one instance fails, another can take over, ensuring the database remains reliable and efficient.

---

---
