import data from '../data/data';
import PropTypes from "prop-types";



function Articles() {
  return (
    <>
      <div className="container wrapper flex flex-stretch">
        {data.map((text) => (
          <Card key={text.author} info={text} />
        ))}
      </div>
    </>
  );
}

function Card(props) {
  let { urlToImage, title } = props.info;
  return (
    <>
      <div className="card flex-20">
        <img className="image-width" src={urlToImage} alt="k" />
        <div className="title">{title}</div>
      </div>
    </>
  );
}

Card.propTypes = {
  author: PropTypes.string.isRequired,
  urlToImage: PropTypes.string.isRequired
}

export default Articles;
