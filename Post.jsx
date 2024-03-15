export default function Post({post}){
    const {title, body} = post;
    return(
        <div className="port">
            <h4>Title: {title}</h4>
            <h4>Description body: {body}</h4>
        </div>
    )
}