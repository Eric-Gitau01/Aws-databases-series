<img src="https://cdn.prod.website-files.com/677c400686e724409a5a7409/6790ad949cf622dc8dcd9fe4_nextwork-logo-leather.svg" alt="NextWork" width="300" />

# Query Data with DynamoDB

**Project Link:** [View Project](http://learn.nextwork.org/projects/aws-databases-query)

**Author:** Eric Gitau  
**Email:** gitaueric09@gmail.com

---

## Query Data with DynamoDB

![Image](http://learn.nextwork.org/inspired_purple_vibrant_plum/uploads/aws-databases-query_733d9399)

---

## Introducing Today's Project!

### What is Amazon DynamoDB?

Amazon DynamoDB is a fully managed NoSQL database service that provides fast and predictable performance at any scale. It is useful because it automatically handles data replication, scaling, and high availability, allowing developers to focus on building applications without worrying about infrastructure. Its flexible schema and support for key-value and document data models make it ideal for applications that require low-latency access to large amounts of data.

### How I used Amazon DynamoDB in this project

In today’s project, I used Amazon DynamoDB to create and load a table, and ran queries using both the AWS CLI and the AWS Management Console. I also practiced transactions, which allow multiple operations to be executed at once, ensuring consistent management of related data across tables.

### One thing I didn't expect in this project was...

One thing I didn’t expect in this project was how strict DynamoDB is about using the partition key in queries. I initially tried to filter by an attribute that wasn’t the partition key, which caused an error and highlighted the importance of designing tables with queries in mind.

### This project took me...

This project took me 60 min to complete, including setting up the DynamoDB table, loading data, running queries, and practicing transactions to manage related data.

---

## Querying DynamoDB Tables

A partition key is the primary identifier that DynamoDB uses to distribute and organize items across its storage partitions. Every item in the table must have a partition key value. This value must be unique unless the table also has a sort key, in which case multiple items can share the same partition key but are distinguished by the sort key.

A sort key is an additional attribute that DynamoDB uses alongside the partition key to uniquely identify items within a table. When a table has a sort key, each item is defined by the combination of its partition key + sort key. This means that multiple items can share the same partition key, as long as their sort key values are different. The sort key also makes it possible to efficiently filter and query specific items within the same partition.


![Image](http://learn.nextwork.org/inspired_purple_vibrant_plum/uploads/aws-databases-query_d105b0b0)

---

## Limits of Using DynamoDB

I ran into an error when I queried for all comments made by a specific user. This happened because a query must use the table’s partition key, and the postedBy attribute (which I used to filter the results) was not the partition key.

Insights we can extract from our Comment table include all comments left on a single post, allowing us to analyze discussions or engagement on specific content. However, insights that are harder to extract from this table include all comments made by a specific user, since querying by attributes that are not the partition key requires additional strategies such as using secondary indexes.

![Image](http://learn.nextwork.org/inspired_purple_vibrant_plum/uploads/aws-databases-query_cb3e260c)

---

## Running Queries with CLI

A query I ran in CloudShell was aws dynamodb get-item. This command retrieves an item from the table using the partition key specified in the command, allowing me to fetch a specific record directly from DynamoDB.

Query options I can add to my query include: --consistent-read, which provides a strongly consistent read; --projection-expression, which allows returning only specific attributes; and --return-consumed-capacity, which shows the number of capacity units consumed by the query. These options help make queries more efficient and provide better insight into resource usage.

![Image](http://learn.nextwork.org/inspired_purple_vibrant_plum/uploads/aws-databases-query_733d9399)

---

## Transactions

A transaction is a set of one or more operations in DynamoDB that are executed as a single, all-or-nothing unit. This means that either all operations succeed or none are applied, ensuring data consistency and integrity when working with related items across one or more tables.

I ran a transaction using AWS CLI commands in AWS CloudShell. This transaction performed two actions: first, it added a new item to the Comments table; then, it updated an item in the Forum table, increasing the commentCount attribute by 1. This ensured that both the new comment and the updated count were applied together, maintaining data consistency.

![Image](http://learn.nextwork.org/inspired_purple_vibrant_plum/uploads/aws-databases-query_2f65f83e)

---

---
