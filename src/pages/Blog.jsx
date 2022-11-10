import React from "react";

function Blog() {
  return (
    <div className="my-12 pt-12">
      <div className="container space-y-12">
        {/* first */}
        <div>
          <h1 className="text-2xl text-slate-700 font-bold">
            #1 Difference Between SQL and NoSQL
          </h1>
          <div className="px-8">
            <h4 className="font-bold text-xl mt-4 text-slate-700">SQL</h4>
            <p className="text-slate-700">
              SQL is the programming language used to interface with relational
              databases. (Relational databases model data as records in rows and
              tables with logical links between them).SQL has been around for
              over 40 years, so it is recognizable, documented, and widely-used.
              Safe and versatile, it’s particularly well suited for complex
              queries.
            </p>
            <h4 className="font-bold text-xl mt-4 text-slate-700">NoSQL</h4>
            <p className="text-slate-700">
              NoSQL is a class of DBMs that are non-relational and generally do
              not use SQL.The dynamic schemata of NoSQL databases allow
              representation of alternative structures, often alongside each
              other, encouraging greater flexibility.
            </p>
            <p className="text-slate-700">
              There are five practical differences between SQL and NoSQL:
            </p>
            <p className="text-slate-700">1. Language</p>
            <p className="text-slate-700">2. Scalability</p>
            <p className="text-slate-700">3. Structure</p>
            <p className="text-slate-700">4. Properties</p>
            <p className="text-slate-700">5. Support and communities</p>
          </div>
        </div>
        {/* end first */}
        <div>
          <h1 className="text-2xl text-slate-700 font-bold mb-4">
            #2 What is JWT token and How is it Works?
          </h1>
          <div className="px-8 space-y-2">
            <p className="text-slate-700">
              JSON Web Token (JWT) is an open standard that defines a compact
              and self-contained way for securely transmitting information
              between parties as a JSON object. This information can be verified
              and trusted because it is digitally signed. JWTs can be signed
              using a secret (with the HMAC  algorithm) or a public/private key
              pair using RSA or ECDSA.
            </p>
            <p className="text-slate-700">
              In its compact form, JSON Web Tokens consist of three parts
              separated by dots (.)
            </p>
            <p className="text-slate-700">
              In authentication, when the user successfully logs in using their
              credentials, a JSON Web Token will be returned. Since tokens are
              credentials, great care must be taken to prevent security issues.
              In general, you should not keep tokens longer than required.
            </p>
          </div>
        </div>
        {/* end second */}
        <div>
          <h1 className="text-2xl text-slate-700 font-bold mb-4">
            #3 What is the difference between javascript and node js?
          </h1>
          <div className="px-8 space-y-2">
            <h4 className="font-bold text-xl mt-4 text-slate-700">
              Javascript
            </h4>
            <p className="text-slate-700">
              JavaScript is a simple programming language that can be used with
              any browser that has the JavaScript Engine installed.Javascript is
              a Scripting language. It is mostly abbreviated as JS. It can be
              said that Javascript is the updated version of the ECMA script.
              Javascript is a high-level programming language that uses the
              concept of Oops but it is based on prototype inheritance.
            </p>
            <h4 className="font-bold text-xl mt-4 text-slate-700">Node Js</h4>
            <p className="text-slate-700">
              Node. js, on the other hand, is an interpreter or execution
              environment for the JavaScript programming language.Node. js, on
              the other hand, is an interpreter or execution environment for the
              JavaScript programming language.
            </p>
          </div>
        </div>
        {/* end third */}
        <div>
          <h1 className="text-2xl text-slate-700 font-bold mb-4">
            #4 How does node js handle multiple requests at the same time?
          </h1>
          <div className="px-8 space-y-2">
            <h4 className="font-bold text-xl mt-4 text-slate-700">
              Event Loop
            </h4>
            <p className="text-slate-700">
              Javascript is a single thread language. So by default node js is
              also a single threaded. But node js can handle multiple request at
              the same time. If you ask how does node js do this then the answer
              will be help of workers and event loop node js can handle multiple
              request at the same time. It deliver it's work to the workers.
              Then when the task is finished with the help of event loop it
              response with the result.
            </p>
          </div>
        </div>
        {/* end fourth */}
      </div>
    </div>
  );
}

export default Blog;
