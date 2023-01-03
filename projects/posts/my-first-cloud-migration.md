---
title: 'My First Cloud Migration'
date: '2022-12-10'
---

My personal website (this one you're reading from) was originally hosted via **Vercel**, which is an easy way to host Next.js applications. It is specifically designed to host such apps and all you must do is drag and drop your files and boom your website is available on the internet. That made this website technically already a cloud-based application, but I wanted to allocate the cloud resources myself using my new AWS knowledge, so I began a simple migration process! 

First, I determined what kind of functionality I needed so I could choose the appropriate cloud services. This website is mostly static web pages (or pages that could be made static without losing functionality, to be more precise). For my website I decided to host it on S3 because is the most cost-effective service for static web pages. **S3 is a good option for object-level storage needs because you can store large objects relatively cheaply and utilize its different storage tiers for even more savings.** Further, S3 has native hosting capabilities so all you have to do is make your bucket (the name of storage containers in S3) public and S3 will assign a public address to the bucket. 

Next, I needed to implement the REST API I used for a contact form. My contact form is a simple POST request and was originally fulfilled by nodemailer in the backend. Because my site will be on S3, there is no backend. To reenable the POST functionality I use **API Gateway and Lambda. These two services are a classic combination to create a serverless API.** Serverless infrastructure is important to me to both reduce cost and maintenance. Once I got the CORS headers set up correctly and my Lambda function connected to my API my contact form's functionality was back! 

The last step of this migration was to buy my domain on Route 53 and connect it to my S3 bucket. At this step I also decided to use a CloudFront distribution to decrease latency for users around the globe (there's no extra cost as well). To do that **I created a CloudFront distribution which caches my website** (CloudFront is perfect in this case because my site is static). So, CloudFront points to my S3 bucket, and my domain name in Route 53's domain name service points to the CloudFront distribution. This way requests don’t have to go all the way to the origin(S3) to fetch the website's files.

Well, that's it! Now you know how I used AWS's microservices like Route 53, CloudFront, API Gateway, S3 and Lambda to host my website! 