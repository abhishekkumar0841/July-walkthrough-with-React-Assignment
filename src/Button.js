
function Button( {onClick, text} ){

    return (
        <>
            <button style={{fontSize: '3rem'}} onClick={onClick} > {text} </button>
        </>
    )
}

export default Button 