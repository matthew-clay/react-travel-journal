function Blog(props) {
  return (
    <div className="blog">
      <img
        className="blog-img"
        src={`./images/${props.item.imageURL}`}
        alt={`${props.item.location}, ${props.item.title}`}
      />
      <div className="blog-info">
        <span className="blog-title">
          <i className="fa-solid fa-location-dot location-icon"></i>
          <span className="country-name">{props.item.location}</span>
          <a href={`${props.item.googleMapsURL}`}>View on Google Maps</a>
        </span>
        <h1>{props.item.title}</h1>
        <div className="calendar">
          <span>{props.item.startDate}</span> &minus;{" "}
          <span>{props.item.endDate}</span>
        </div>
        <p className="description">{props.item.description}</p>
      </div>
    </div>
  );
}

export default Blog;
