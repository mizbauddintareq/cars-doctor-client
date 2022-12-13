import "./BannerItem.css";

const BannerItem = ({ data }) => {
  const { image, id, next, prev } = data;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carousel-image">
        <img src={image} alt="banner-img-1" className="w-full rounded-xl" />
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#slide${prev}`} className="btn btn-circle mr-5">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
      <div className="absolute flex text-white justify-start transform -translate-y-1/2 left-24 top-1/4">
        <h1 className="text-6xl font-bold">
          Affordable <br /> Price For Car <br /> Servicing
        </h1>
      </div>
      <div className="absolute flex text-white justify-start transform -translate-y-1/2 left-24 top-1/2 w-2/5">
        <p className="text-xl">
          There are many variations of passages of available, but the majority
          have suffered alteration in some form
        </p>
      </div>
      <div className="absolute flex text-white justify-start transform -translate-y-1/2 left-24 top-3/4 w-2/5">
        <button className="btn btn-warning mr-5">Warning</button>
        <button className="btn btn-outline btn-warning">Warning</button>
      </div>
    </div>
  );
};

export default BannerItem;