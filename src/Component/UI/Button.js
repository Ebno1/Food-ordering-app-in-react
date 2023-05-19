const Button=(props)=>{
    return (
        <button disabled={props.disabled} className={props.className} onClick={props.onClick}>{props.children}</button>
    )
}

export default Button;