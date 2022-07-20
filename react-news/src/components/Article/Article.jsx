function Article(props) {
 
  return (
    <div>
       {props.image ? <img src={props.image}/>: <h2>Image not found</h2>}
       {props.caption ? <h3>{props.caption}</h3> : <h2>No Caption</h2>}
    </div>
  )
}

export default Article;
