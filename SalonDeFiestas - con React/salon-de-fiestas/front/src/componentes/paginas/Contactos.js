import '../estilos/contacto.css';

const Contactos = () => {
  return (
    <div className="holder">
      <h3>ENVIANOS TU CONSULTA O SOLICITÁ TU PRESUPUESTO</h3>
      <p>Consultá las condiciones y los servicios incluidos para cada tipo de evento y Solicitanos un presupuesto o vení a visitarnos y Reservá tu fecha!!!</p>
      <div className='fomulario-masinfo'>
        <div className="formulario">
          <form action="" method="post">
            <div class="form-group">
              <label for="nombre">Nombre:</label>
              <input type="text" id="nombre" name="nombre" required />
            </div>
            <div class="form-group">
              <label for="apellido">Apellido:</label>
              <input type="text" id="apellido" name="apellido" required />
            </div>
            <div class="form-group">
              <label for="dni">DNI:</label>
              <input type="text" id="dni" name="dni" required />
            </div>
            <div class="form-group">
              <label for="correo">Correo Electrónico:</label>
              <input type="email" id="correo" name="correo" required />
            </div>
            <div class="form-group">
              <label for="mensaje">Mensaje:</label>
              <textarea id="mensaje" name="mensaje" rows="4" required></textarea>
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>


        <div className="contacto">
          <p><b>Podés contactarnos por estas vías, o bien completar el formulario que se encuentra a continuación</b></p>
          <p><b>(*todos los campos son obligatorios):</b></p>
          <ul className='contacto-info'>
            <li><span>🗺️ Direccion:</span></li>
            <li><span>📞Telefono:</span></li>
            <li><span>📱Celular:</span></li>
            <li><span>📧Email:</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Contactos;