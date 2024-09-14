import BlogCard2 from '../../_components/blog-card2/blogcard2';
import ContactForm from '../../_components/contactus/contactus';
import DynamicBanner from '../../_components/dynamic-banner/dynamicbanner';
import { allarticledata } from '../../_components/data/allarticledata';
import { loan } from '../../_components/data/loan';
import Image from 'next/image';

const segments = ['realestate', 'properties', 'marketnews', 'loan'];

interface ArticleData {
  title: string;
  contents: string[];
  imgUrl: string;
  authorName: string;
  readTime: string;
  articleNumber: number;
  articleId?: number;
  authorImg?: string;
  id?: number;
}

interface DynamicArticlesProps {
  params: {
    dynamic: string;
  };
}

export const generateStaticParams = () => {
  return allarticledata.flatMap(({ title }) => {
    const formattedTitle = title.replace(/[^A-Za-z0-9]+/g, "-");

    return segments.map(segment => ({
      dynamic: `${segment}-${formattedTitle}`, 
    }));
  });
};
  
export const generateMetadata = ({ params }: { params: { dynamic: string } }) => {
  const { dynamic } = params;
  const parts = dynamic ? dynamic.split('-') : [];
  const remainingParts = parts.slice(1).join('-');

  const article = allarticledata.find(({ title }) => {
    return title.replace(/[^A-Za-z0-9]+/g, "-") === remainingParts;
  });

  if (article) {
    return {
      title: article.title,
      description: article.contents.at(-1) || '',
      openGraph: {
        url: `/${dynamic}`,
        title: article.title,
        description: article.contents.at(-1) || '',
        images: [`/articleassets/articleimages/${article.imgUrl}`],
      },
      twitter: {
        card: "summary_large_image",
        title: article.title,
        description: article.contents.at(-1) || '',
        images: [`/articleassets/articleimages/${article.imgUrl}`],
      },
    };
  }

  return {
    title: 'Article Not Found',
    description: 'No article found for the given parameters',
  };
};

const DynamicArticles = ({ params }: DynamicArticlesProps) => {
  const { dynamic } = params;
  const parts = dynamic ? dynamic.split('-') : [];
  let part = parts[0];
  part = part[0].toUpperCase() + part.slice(1);
  const remainingParts = parts.slice(1).join('-');
  const heading = remainingParts.replace(/[^A-Za-z0-9]+/g, " ");

  const articleData = allarticledata.find(item => item.title.replace(/[^A-Za-z0-9]+/g, "-") === remainingParts);
  const data1 = loan
    .filter(item => item.title !== articleData?.title)
    .slice(0, 3);

  const updateHeadings = (articleData: ArticleData) => {
    articleData.contents = articleData.contents.map((content: string) => {
      if (content.startsWith('***')) {
        return `<h2 class='hh font-bold text-xl'>${content.slice(3).trim()}</h2>`;
      }
      return content;
    });
  };

  if (articleData) {
    updateHeadings(articleData);
  }

  return (
    <div className='container'>
      <div className='flex flex-col gap-[130px]'>
        {/* Main Content and Banner */}
        <div className='flex flex-col md:flex-row gap-[60px]'>
          <div className='w-full md:w-[70%] flex flex-col gap-6'>
            <h1 className='text-sm font-regular'>{part} : {heading}</h1>
            <div className="mt-[20px]">
              <DynamicBanner
                gap={true}
                check="c"
                which='articleimages'
                headingText={articleData?.title || 'Default Heading'}
                profileImage={articleData?.authorImg}
                profileName={articleData?.authorName}
                articleImage={articleData?.imgUrl}
                profileReadTime={articleData?.readTime}
                articleNumber={articleData?.articleNumber} // Convert number to string if necessary
              />
            </div>
            <div className="px-4 max-w-7xl mt-[10px]">
              <div className="flex flex-col gap-6 md:gap-10">
                {articleData ? (
                  articleData.contents.map((desc, index) => (
                    <div key={index}>
                      {desc.endsWith('.jpg') || desc.endsWith('.png') ? (
                        <div className="relative h-[300px] md:h-[400px] lg:h-[400px] xl:h-[400px] w-full max-w-screen-md">
                          <Image
                            src={`/articleassets/articleimages/${desc}`} 
                            alt="Banner Image"
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>
                      ) : (
                        <div
                          className="text-lg font-medium sm:font-regular md:text-lg text-2xl text-gray-800 sm:leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: desc }} 
                        />
                      )}
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-gray-500">Loading...</p>
                )}
              </div>
            </div>
          </div>
          <div className='w-full md:w-[30%] flex flex-col gap-1 mt-10 md:mt-0'>
            <h1 className='hh text-2xl font-semibold'>Whats More</h1>
            <BlogCard2 extra='loan' data={data1} showContent={false} />
          </div>
        </div>

        {/* Contact Form */}
        <ContactForm />
      </div>
    </div>
  );
};

export default DynamicArticles;
