---
title: 'Starting with Next.js'
date: '2022-08-08'
---

Ever since I first began learning React using [iLoveCoding.org](https://ilovecoding.org/) I was impressed by the framework's ability to simplify code and increase its modularity through the component system. What wasn’t intuitive was the one-way passage of props from parent components to their children. At the end of the course, I wanted to build a CRUD application using React and I struggled for days trying to find a work around to **one-way data flow** (or one-way binding). Attempting to save data within one component, like a form, and send it back up the hierarchy to a data component, I realized this is not how React was meant to be used. At that point, I hadn’t yet learned about the backend of a web application, and once I started taking the Node.js and Express.js courses from [iLoveCoding](https://ilovecoding.org/) I learned how to write CRUD functions server-side using an API and a database. 

Now, I’m revisiting React as I learn about building web applications using Next.js. **Next.js is a delight** because I get to use the strengths of React, like its modularity, to create an entire website capable of retrieving various data from the file system or an external source via API. Currently, the most interesting benefit of using Next.js is the ability to **choose how to render the page**, on a page-by-page basis.  To do this I get to choose from three options: 

- **Server-Side Rendering (SSR)**

> With SSR the HTML of the webpage is generated on a server for **each request**. The generated HTML, JSON data, and JavaScript instructions to make the page interactive (i.e. onclick event handlers) are then sent to the client. At the client-side, the HTML is used to show a fast non-interactive page, while React uses the JSON data and JavaScript instructions to make components interactive (for example, attaching event handlers to a button). This process is called **hydration**. This method of rendering is a good idea if the page cannot be pre-rendered ahead of the user's request, for example, if it contains commonly updated data or the page changes on every request. 

- **Client-Side Rendering (CSR)**

> Using CSR Next.js statically generates (or pre-renders) the parts of the page that do not require external data. When the page loads, Next.js fetches external data from the client using JavaScript and populates the remaining parts of the webpage not already pre-rendered. This approach works well for user dashboard pages, for example or anything that is a user-specific page, or SEO is not relevant, or the data is frequently updated, which requires **request-time data fetching**.

- **Static Site Generation (SSG)**

> With SSG, the HTML is generated on the server, but unlike server-side rendering, there is no server at runtime. Instead, **content is generated once**, at build time, when the application is deployed, and the HTML is stored in a CDN and re-used for each request. This method is good if the page can be pre-rendered ahead of the user's request (i.e., marketing pages, blog posts, e-commerce product listings, help and documentation).

By far I use static site generation the most, and I have used it to build this website’s features which require data including the portfolio and blog sections. Overall, I am excited to keep learning about the ways Next.js can help me build performant websites! 
