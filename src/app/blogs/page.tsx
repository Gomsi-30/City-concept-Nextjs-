import Header from '../_components/heading/header';
import { blogData } from '../_components/data/blog-data';
import BlogCard from '../_components/blog-card/blogcard';

const Blog = () => {
  return (
    <div className="px-4 py-8">
      <div className="flex flex-col gap-[50px] items-center">
        {/* Header and Description Section */}
        <div className="flex flex-col gap-3 items-center max-w-[800px] text-center">
          <Header label="Stay Informed with the Latest Real Estate Insights" />
          <p className="leading-6 text-lg sm:text-md text-gray-700">
            Welcome to the Cityconcept Real Estate Blog, your go-to source for the latest news, trends, and expert advice in the world of real estate. Whether your a buyer, seller, investor, or simply interested in the market, our blog offers valuable insights to help you make informed decisions.
          </p>
        </div>

        
        <BlogCard data={blogData} />
      </div>
    </div>
  );
};

export default Blog;
