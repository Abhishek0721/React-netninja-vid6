import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'Abhishek', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Abhi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mathew', id: 3 }
  ])

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" />
    </div>
  );
}
 
export default Home;