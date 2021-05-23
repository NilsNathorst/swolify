export const Excercise = ({ name, sets, repetitions, weight }) => {
    return (
        <div>
            <h3>{name}</h3>
            <p>{`${sets} x ${repetitions}`}</p>
            <p>{weight}</p>
        </div>
    )
}
