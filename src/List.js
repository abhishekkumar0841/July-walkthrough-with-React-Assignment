function List({ items } ){
    return(
        <>
            <ul>
                <li style={{fontSize: '3rem'}}>
                    {items}
                </li>
            </ul>
        </>
    )
}

export default List