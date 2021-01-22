export default function Joke({
    image,
    text
}) {
    return <div>
    <img src={image} alt={text}/>
    <p>{text}</p>
    </div>
}