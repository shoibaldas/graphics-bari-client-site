import React from 'react';
import img1 from '../../assets/blogImages/sqlNoSql.png';
import img2 from '../../assets/blogImages/jwt.png';
import img3 from '../../assets/blogImages/javascript-and-node-js.jpg';
import img4 from '../../assets/blogImages/handel-request.png';
import TitleHeader from '../../titleHeader/TitleHeader';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const blogItem = [
    {
        id: 1,
        image: img1,
        title: "Difference between SQL and NoSQL",
        ans: "The programming language used to communicate with relational databases is called SQL. (Relational databases represent data as rows and tables of records connected by logical linkages.) NoSQL DBMs are a subset of non-relational DBMs that often do not employ SQL."
    },
    {
        id: 2,
        image: img2,
        title: "What is JWT, and how does it work?",
        ans: "An open standard called JSON Web Token (JWT) (RFC 7519) outlines a condensed and independent method for securely transferring data between parties as a JSON object. The fact that this information is digitally signed allows for verification and confidence."
    },
    {
        id: 3,
        image: img3,
        title: "What is the difference between javascript and NodeJS?",
        ans: "Any browser that has the JavaScript Engine installed can use the straightforward programming language known as JavaScript. Contrarily, Node.js is an environment or interpreter for the JavaScript programming language. To be more useful, it needs libraries that JavaScript programming can easily access."
    },
    {
        id: 4,
        image: img4,
        title: "How does NodeJS handle multiple requests at the same time?",
        ans: "Numerous client requests are received by NodeJS, which adds them to EventQueue. The event-driven architecture approach was used in the construction of NodeJS. The EventLoop in NodeJS is an endless loop that accepts and handles requests."
    },
]

const Blog = () => {

    TitleHeader('Blog');

    return (
        <section className=" dark:text-gray-100">
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                {
                    blogItem.map(blog => <div key={blog.id} blog={blog} className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
                        <PhotoProvider>
                            <PhotoView src={blog.image}>
                                <img src={blog.image} alt="" className="object-fit md:object-cover w-full h-64 sm:h-96 lg:col-span-7" />
                            </PhotoView>
                        </PhotoProvider>
                        <div className="p-6 space-y-2 lg:col-span-5">
                            <h3 className="text-2xl font-semibold sm:text-4xl">{blog.title}</h3>
                            <p>{blog.ans}</p>
                        </div>
                    </div>)
                }
            </div>
        </section>
    );
};

export default Blog;