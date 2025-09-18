<img src="https://cdn.prod.website-files.com/677c400686e724409a5a7409/6790ad949cf622dc8dcd9fe4_nextwork-logo-leather.svg" alt="NextWork" width="300" />

# Load Data into DynamoDB

**Project Link:** [View Project](http://learn.nextwork.org/projects/aws-databases-dynamodb)

**Author:** Eric Gitau  
**Email:** gitaueric09@gmail.com

---

## Load Data into a DynamoDB Table

![Image](http://learn.nextwork.org/inspired_purple_vibrant_plum/uploads/aws-databases-dynamodb_b481c730)

---

## Introducing Today's Project!

### What is Amazon DynamoDB?

A key benefit of DynamoDB over relational databases is its flexibility, since each item can have its own set of attributes. This is especially useful in scenarios where a table stores diverse data and only some attributes apply to all items.

### How I used Amazon DynamoDB in this project

Another benefit of DynamoDB over relational databases is speed, because DynamoDB can quickly find items using the partition key. In contrast, relational databases may need to scan the entire table to locate a specific piece of data.

### One thing I didn't expect in this project was...

One thing I didn’t expect in this project was how quickly I could perform many actions using the AWS CLI instead of the console—for example, creating tables, loading data, and deleting tables.

### This project took me...

This project took me about 1 hour to complete, covering table creation, data loading through AWS CLI, and exploring the differences between DynamoDB and relational databases.

---

## Create a DynamoDB table

DynamoDB tables organize data using items and attributes. Each item is stored as a set of attributes, and while items can have any number of attributes, each must include at least one the partition key value.

An attribute in DynamoDB is a piece of data about an item in a table. For example, if an item represents a specific student, its attributes could include the student’s name, project completed, email, or signup date. The number of attributes for each item is flexible, meaning different items in the same table can have varying attributes.

![Image](http://learn.nextwork.org/inspired_purple_vibrant_plum/uploads/aws-databases-dynamodb_a3cefee0)

---

## Read and Write Capacity

Read Capacity Units (RCUs) and Write Capacity Units (WCUs) are the units that measure the performance of my DynamoDB table. Since DynamoDB pricing is based on the number of RCUs and WCUs consumed, higher consumption results in higher project costs.

Amazon DynamoDB’s Free Tier provides 25 RCUs and 25 WCUs per month. I turned off Auto Scaling because it can automatically scale up operations, which increases RCUs and WCUs consumption and may result in higher charges.

![Image](http://learn.nextwork.org/inspired_purple_vibrant_plum/uploads/aws-databases-dynamodb_ef47dd8f)

---

## Using CLI and CloudShell

AWS CloudShell is an environment that allows us to run code and interact with AWS resources and services. It is convenient because the AWS CLI is pre-installed, so we can start running commands immediately without any setup.

AWS CLI is software that allows you to interact with AWS resources using commands instead of clicks in the Management Console. It is a practical tool that is often preferred over the console for day-to-day operations in real-world environments.

I ran a CLI command in AWS CloudShell that created four new DynamoDB tables. The command, aws dynamodb create-table, allowed me to define the table name and its attributes directly within the command.

![Image](http://learn.nextwork.org/inspired_purple_vibrant_plum/uploads/aws-databases-dynamodb_81e0258b)

---

## Loading Data with CLI

I ran a CLI command in AWS CloudShell to load multiple pieces of data (i.e., multiple items) into a DynamoDB table. This AWS CLI command is structured as aws dynamodb batch-write-item --request-items file://..., where the file contains the items to be inserted.

![Image](http://learn.nextwork.org/inspired_purple_vibrant_plum/uploads/aws-databases-dynamodb_791c600b)

---

## Observing Item Attributes

![Image](http://learn.nextwork.org/inspired_purple_vibrant_plum/uploads/aws-databases-dynamodb_b481c731)

I checked a ContentCatalog item, which included the following attributes: id, contentType, difficulty, price, projectCategory, title, and url.

I checked another ContentCatalog item, which had a different set of attributes such as services, title, and videoType, among others.

---

## Benefits of DynamoDB

A key benefit of DynamoDB over relational databases is its flexibility, since each item can have its own set of attributes. This is especially useful in scenarios where a table stores diverse data and only some attributes apply to all items.

Another benefit of DynamoDB over relational databases is speed, because DynamoDB can quickly find items using the partition key. In contrast, relational databases may need to scan the entire table to locate a specific piece of data.

![Image](http://learn.nextwork.org/inspired_purple_vibrant_plum/uploads/aws-databases-dynamodb_b481c730)

---

---
