import data from '../data';

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

export default Articles;
