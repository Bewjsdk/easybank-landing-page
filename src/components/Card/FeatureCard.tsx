interface CardProps {
  title: string;
  description: string;
  icon: string;
}

const Card = ({ title, description, icon }: CardProps) => {
  return (
    <div className="card">
      {/* Icon */}
      <div>
        <img src={icon} alt={title} />
      </div>
      
      {/* Title */}
      <h3>{title}</h3>
      
      {/* Description */}
      <p>{description}</p>
    </div>
  )
}

export default Card