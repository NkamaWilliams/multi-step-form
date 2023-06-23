interface stepProp {
    index: number,
    description: string
}

function Step(props:stepProp){
    return(
        <div>
            <div>{props.index}</div>
            <div>
                <h2>step {props.index}</h2>
                <h1>{props.description}</h1>
            </div>
        </div>
    )
}

export default Step;