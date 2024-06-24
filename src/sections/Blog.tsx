import BlogCard from "../components/Card/BlogCard"
import { blogCards } from "../constant"

const Blog = () => {
  return (
    <section id="blog" className="blog">
      {/* Topic */}
      <article className="blog__content">
        <h2>Latest Aritcles</h2>

        {/* Blog Cards Wrapper */}
        <div className="card-wrapper">
          {/* Blog Card */}
          {blogCards.map(blog => (
            <BlogCard 
              key={blog.title}
              title={blog.title}
              description={blog.description}
              author={blog.author}
              image={blog.image}
            />
          ))}
        </div>
      </article>
    </section>
  )
}

export default Blog