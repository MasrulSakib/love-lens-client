import React from 'react';

const Blog = () => {
    return (
        <div className="container mx-auto my-20">
            <h1 className="md:text-3xl text-2xl font-bold mb-10">Key Topics in Web Development</h1>
            <div className='text-left'>
                {/* Question and Answer 1: Difference between SQL and NoSQL */}
                <div className="mb-6">
                    <h2 className="md:text-xl text-lg font-semibold mb-2">1. Difference between SQL and NoSQL</h2>
                    <p className="md:text-lg text-base">
                        SQL (Structured Query Language) and NoSQL (Not only SQL) are two types of database systems used for storing and managing data.
                        <br /><br />
                        SQL databases are relational databases that use tables to store data and have a predefined schema. They are suitable for complex queries and transactions. Examples include MySQL, PostgreSQL, and Oracle.
                        <br /><br />
                        NoSQL databases are non-relational and provide a more flexible data model. They can be document-based (like MongoDB), key-value pairs (like Redis), columnar (like Cassandra), or graph-based (like Neo4j). NoSQL databases are highly scalable and efficient for handling large volumes of unstructured data.
                    </p>
                </div>

                {/* Question and Answer 2: What is JWT, and how does it work? */}
                <div className="mb-6">
                    <h2 className="md:text-xl text-lg font-semibold mb-2">2. What is JWT, and how does it work?</h2>
                    <p className="md:text-lg text-base">
                        JSON Web Token (JWT) is a compact, URL-safe token format used for securely transmitting information between parties as JSON objects.
                        <br /><br />
                        JWTs consist of three parts: header, payload, and signature. After a user authenticates, a JWT containing user data is generated and signed by the server. The client includes this token in subsequent requests. The server verifies the token's signature to authenticate and authorize the user.
                    </p>
                </div>

                {/* Question and Answer 3: What is the difference between JavaScript and Node.js? */}
                <div className="mb-6">
                    <h2 className="md:text-xl text-lg font-semibold mb-2">3. What is the difference between JavaScript and Node.js?</h2>
                    <p className="md:text-lg text-base">
                        JavaScript is a programming language primarily used for client-side scripting in web development, running in web browsers to create dynamic and interactive web pages.
                        <br /><br />
                        Node.js, on the other hand, is a runtime environment that allows running JavaScript on the server-side. It enables building server-side applications using JavaScript and extends the language beyond the browser environment.
                        <br /><br />
                        Node.js provides APIs for file system operations, networking, and database access, making it suitable for developing scalable backend applications.
                    </p>
                </div>

                {/* Question and Answer 4: How does Node.js handle multiple requests at the same time? */}
                <div className="mb-6">
                    <h2 className="md:text-xl text-lg font-semibold mb-2">4. How does Node.js handle multiple requests at the same time?</h2>
                    <p className="md:text-lg text-base">
                        Node.js uses an event-driven, non-blocking I/O model to handle multiple requests concurrently.
                        <br /><br />
                        When a request is received, Node.js registers a callback function and continues processing other requests without waiting for the response. This asynchronous behavior allows Node.js to efficiently manage I/O operations such as file I/O, network requests, and database queries without blocking the event loop.
                        <br /><br />
                        Node.js operates on a single-threaded event loop, utilizing non-blocking I/O operations to handle multiple concurrent requests, making it highly scalable and efficient for building real-time applications.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;
