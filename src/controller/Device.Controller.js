import deviceManagement from "../business/Device.Management";

function getDevices(req, res) {
    const { deviceId } = req.params; // Obtén el ID del usuario de la solicitud
    deviceManagement.getDevices(deviceId)
      .then((device) => {
        if (device) {
          // Si se encontró el usuario, enviarlo en la respuesta
          res.json(device);
        } else {
          // Si no se encontró el usuario, enviar un mensaje de error
          res.status(404).json({ message: 'Usuario no encontrado' });
        }
      })
      .catch((error) => {
        // Si ocurre un error al obtener el usuario, enviar un mensaje de error
        res.status(500).json({ error: error.message });
      });
}


function createDevices(req, res) {
    const deviceData = req.body; 
    deviceManagement.createUser(deviceData) 
      .then((newDevice) => {
        res.status(201).json(newDevice); // Retorna el nuevo usuario creado como respuesta
      })
      .catch((error) => {
        res.status(500).json({ error: error.message });
      });
}



function updateDevice(req, res) {
    const { deviceId } = req.params; // Obtén el ID del usuario de la solicitud
    const deviceData = req.body; // Datos a actualizar: nombre, apellido o contraseña
  
    deviceManagement.updateDevice(deviceId, deviceData)
      .then((updatedDevice) => {
        res.json(updatedDevice); // Retorna el usuario actualizado
      })
      .catch((error) => {
        res.status(500).json({ error: error.message }); // Si hay un error, devuelve un mensaje de error
      });
}

function deleteDevice(req, res) {
    const { deviceId } = req.params;
  
    deviceManagement.deleteDevice(deviceId)
      .then((result) => {
        res.json(result); // Retorna el mensaje de éxito
      })
      .catch((error) => {
        res.status(500).json({ error: error.message }); // Si hay un error, devuelve un mensaje de error
      });
}

const deviceController ={
    getDevices,
    createDevices,
    updateDevice,
    deleteDevice
}

export default deviceController;