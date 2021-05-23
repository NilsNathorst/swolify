export const Excercise = ({ name, sets, repetitions, weight }) => {
    return (
        <div>
            <h3>{name}</h3>
            <span>
                {`${sets} x ${repetitions}`} {weight && ` / ${weight} kg`}
            </span>
        </div>
    )
}
