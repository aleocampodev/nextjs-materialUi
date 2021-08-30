import Hero from "./Hero/index";

const mainFeaturedPost = {
  title: "Let's find a home",
  description:
    "We are here to help you find right the plave for you and your family",
  image: "https://source.unsplash.com/random",
  imgText: "main image description",
};

const Banner = ({ children }) => {
  return (
    <div>
      <Hero post={mainFeaturedPost} />
      {children}
    </div>
  );
};

export default Banner;
