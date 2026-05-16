import {Link} from 'react-router-dom';

export function Error(){
    return(<>
    
        <div style={{'textAlign': 'center'}}>
            <h1>404</h1>
            <p>!Ups¡ Parece que la página no existe</p>

            <Link to="/">Volver a inicio</Link>
        </div>

    </>)
}