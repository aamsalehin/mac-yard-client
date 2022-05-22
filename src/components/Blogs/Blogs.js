import React from "react";
const Blogs = () => {
  return (
    <div>
      <div className="container">
        <div>
          <div className="h3 text-center my-4">
            Difference between nodejs and javascript
          </div>
          <p className="text-center lead">
            <strong>1. NodeJS :</strong> NodeJS is a cross-platform and
            opensource Javascript runtime environment that allows the javascript
            to be run on the server-side. Nodejs allows Javascript code to run
            outside the browser. Nodejs comes with a lot of modules and mostly
            used in web development. <br />
            <strong>2. JavaScript :</strong> Javascript is a Scripting language.
            It is mostly abbreviated as JS. It can be said that Javascript is
            the updated version of the ECMA script. Javascript is a high-level
            programming language that uses the concept of Oops but it is based
            on prototype inheritance.
          </p>
        </div>
        <div>
          <div className="h3 text-center my-4">
            Differences between sql and nosql databases.
          </div>
          <p className="text-center lead">
            1. SQL databases are relational, NoSQL databases are non-relational.{" "}
            <br />
            2. SQL databases use structured query language and have a predefined
            schema. NoSQL databases have dynamic schemas for unstructured data.{" "}
            <br />
            3. SQL databases are vertically scalable, while NoSQL databases are
            horizontally scalable. <br />
            4. SQL databases are table-based, while NoSQL databases are
            document, key-value, graph, or wide-column stores. <br />
            5. SQL databases are better for multi-row transactions, while NoSQL
            is better for unstructured data like documents or JSON.
          </p>
        </div>
        <div>
          <div className="h3 text-center my-4">
            When should you use nodejs and when should you use mongodb
          </div>
          <p className="text-center lead">
            <strong>Node js</strong> Nodejs is a Javascript engine that you can
            write any application you want with (by programming in the
            Javascript language). It runs your Javascript code. Most commonly,
            it is used to build servers that can respond to web requests, though
            it can be used for lots of other types of code too. <br />{" "}
            <strong>mongoDB</strong> MongoDB is a database engine. Code within
            some application or server uses MongoDB to save, query or update
            data in a database. There are many web servers built with nodejs
            that will then use MongoDB for storing data. MongoDB offers an API
            library that runs within a Nodejs application to give you
            programmatic access to MongoDB so you can create databases and then
            add, query, update or delete data from the MongoDB database. MongoDB
            also has API libraries for other programming environments such as
            Python, Java, etc.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Blogs;
