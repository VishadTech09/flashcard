const CardGroup = (props) => {
    const { name, description } = props;
    return (
        <div className="bg-white p-3 border rounded-md">
            <h1 className="font-bold ">{name}</h1>
            <p>{description}</p><br />
            <button className="pl-4 pr-5 pt-1 pb-1 text-yellow-50 rounded-full bg-red-800">View Card</button>

        </div>
    );
}

export default CardGroup;