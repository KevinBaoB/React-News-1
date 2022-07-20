import './App.css';
import { useState } from "react"
// data
import News from './data/news.json';
import navItemsData from './data/navItems.json';
// components
import AppNav from './components/AppNav/AppNav.jsx'
import ArticleTeaser from './components/ArticleTeaser/ArticleTeaser.jsx'
import Article from './components/Article/Article.jsx'

// seed values
const randomArticleIndex = Math.floor(Math.random() * News.length);
const randomArticle = News[randomArticleIndex];

function App() {
  // states
  const [navItems, setNavItems] = useState(navItemsData)
  const [article, setArticle] = useState({
    id: randomArticleIndex,
    title: randomArticle.title,
    abstract: randomArticle.abstract,
    byline: randomArticle.byline,
    image: randomArticle.multimedia.length ? randomArticle.multimedia[0].url : null,
    caption: randomArticle.multimedia.length ? randomArticle.multimedia[0].caption : null,
    created_date: randomArticle.created_date
  })


  const [multipleArticles, setMultipleArticles] = useState(News.map((article, index) => {
    return {
      id: index,
    title: article.title,
    abstract: article.abstract,
    byline: article.byline,
    image: article.multimedia.length ? article.multimedia[0].url : null,
    caption: article.multimedia.length ? article.multimedia[0].caption : null,
    created_date: randomArticle.created_date,
    }
    
  }))

  const [showArticle, setShowArticle] = useState(false);
  
  const handleNavClick = (clickedItem) => { console.log(clickedItem) }

  const handleTitleClick = (articleID) => { console.log(articleID) 
    setShowArticle(!showArticle)
  }

  // renders
  return (
    <div>
      <hr />
      <AppNav 
        navItems={navItems} 
        handleNavClick={handleNavClick} 
      />
      <hr />

      {multipleArticles.map((article) => 
      <div>
          <ArticleTeaser
            id={article.id}
            title={article.title}
            date={article.created_date}
            handleTitleClick={handleTitleClick}
            />
            <hr />
            {showArticle ? <Article {...article}/>: ' ' }
      </div>
        )}
      
      
      
      {/* <Article {...article} /> */}
    </div>
  );
}

export default App;
