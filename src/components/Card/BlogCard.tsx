interface BlogCardProps {
  title: string;
  description: string;
  author: string;
  image: string;
}

const BlogCard = ({ title, description, author, image }: BlogCardProps) => {
  return (
    <div className="blog-card">
      {/* Blog Image */}
      <figure className="blog-card__image">
        <img src={image} alt={title} />
      </figure>

      {/* Blog Content */}
      <div className="blog-card__content">
        <p className="author">By {author}</p>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default BlogCard