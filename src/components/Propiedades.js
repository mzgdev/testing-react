import '../styles/Propiedades.css'

function Propiedades(props){

  return (
    <div className='contenedor-propiedades'>
      <img  className='img-propiedades' 
      src={require(`../img/img-${props.img}.jpg`)} 
      alt="foto de una casa blanca"/>
      <div className='contenedor-texto-propiedades'>
        <p className='nombre-propiedades'>{props.nombre}</p>
        <p className='direccion-propiedades'>{props.direccion}</p>
        <p className='descripcion-propiedades'>{props.descripcion}</p>
      </div>
      
    </div>
  );
}

export default Propiedades;