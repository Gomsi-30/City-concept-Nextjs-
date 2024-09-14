import ArticleNavbar from '../_components/article/articlenavbar';
// import Header from '../_components/heading/header';
// import ArticleCards from '../_components/article-card/articlecard';
type LayoutProps = {
    children:React.ReactNode;
}
const Layout = ({children}:LayoutProps) => {
    return (
        <div>
           <ArticleNavbar />
           <main className='pt-[56px]'> {children} </main>
           {/* <Header label='Whats More' center={false} />
           <ArticleCard data={} /> */}
        </div>
    )
}

export default Layout;