export const Excercise = ({ name, sets, repetitions, weight, type }) => {
    return (
        <div>
            <h3>
                {name} {type.icon}
            </h3>
            <span>
                {`${sets} x ${repetitions}`} {weight && ` / ${weight} kg`}
            </span>
        </div>
    )
}
