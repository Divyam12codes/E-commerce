function Card({src}) {
    return (
        <>
            <div className="m-5 p-5 w-[250px] h-[350px] cursor-pointer overflow-hidden rounded-xl">
                <img src={src} className="w-full h-[80%] border border-black border-t-20"></img>
            </div>
        </>
    );
}

export default Card;