// import { useState } from "react";
// import ArticleTeaser from "../ArticleTeaser/ArticleTeaser.jsx";
// import Article from "../Article/Article.jsx";

// function ArticleGroup (article) {

//   const [showArticle, setShowArticle] = useState(false);

//   const handleTitleClick = (articleID) => { console.log(articleID) 
//     setShowArticle(!showArticle)
//   }

//     return ( 
//         <div>
//                 <ArticleTeaser
//                 id={article.id}
//                 title={article.title}
//                 date={article.created_date}
//                 handleTitleClick={handleTitleClick}
//                 />
//                 <hr />
//                 {showArticle ? <Article {...article}/>: ' ' }
            
//         </div>
//      );
// }
 
// export default ArticleGroup;