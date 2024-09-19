import "./ServiceCard.css";

const ServiceCard = (data) => {
  const { title, description } = data.data;
  return (
    <div className="service-card">
      <h3 className="service-title">{title}</h3>
      <p className="service-desc">{description}</p>
    </div>
  );
};

export default ServiceCard;
