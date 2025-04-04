
export const Item = ({text,isPacked}) => {
    return (

        <li className="item">
            {isPacked ? (
            <del>
                {text + ' ✅'}
            </del>
            ) : (
                text
            )}
        </li>
        
    )
}
