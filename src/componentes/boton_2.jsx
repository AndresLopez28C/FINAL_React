export function Boton2({text}){
        const estilo = {
        backgroundColor: '#180144',
        color: 'white',
        border: 'none',
        outline: 'none',
        borderRadius: '.5rem',
        marginTop: '.625rem',
        fontWeight: 'bold'
    };
    return(
        <>
        <button style={estilo} onClick={() => alert("{text}")}>{text}</button>
        </>
    )


}