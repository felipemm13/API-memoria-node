import mongoose from 'mongoose';
import DeviceModel from '../models/Device.Model'; // Asegúrate de tener esta importación para DeviceModel
import CustomModel from '../models/Custom.Model';

async function getDevices(filterParam) {
    try {
        let devices;
        const matchCriteria = {};

        if (filterParam) {
            // Asumir que filterParam es el deviceId a menos que sea un ObjectId válido
            if (mongoose.Types.ObjectId.isValid(filterParam)) {
                // Si filterParam es un ObjectId válido, buscar por _id
                matchCriteria._id = new mongoose.Types.ObjectId(filterParam);
            } else {
                // Si no, buscar por deviceId
                matchCriteria.deviceId = filterParam;
            }
        }

        // Utilizar .find con los criterios de búsqueda y poblar el campo 'custom'
        devices = await DeviceModel.find(matchCriteria).populate('custom');

        return devices;
    } catch (error) {
        console.error("Error retrieving devices:", error);
        return [];
    }
}

async function addDevice(newDevice) {
    try {
        // Extraer el deviceId y separar el resto de los datos para Custom
        const { deviceId, ...customData } = newDevice;

        // Verificar si ya existe un dispositivo con el mismo deviceId
        const existingDevice = await DeviceIdModel.findOne({ deviceId: deviceId });
        if (existingDevice) {
            return { success: false, message: 'Device already exists' };
        }

        // Crear un nuevo documento en la colección Custom con los datos extraídos
        const newCustom = await CustomModel.create(customData);

        // Crear un nuevo dispositivo con el deviceId y la referencia al documento Custom creado
        const newDeviceData = {
            deviceId: deviceId,
            custom: newCustom._id
        };
        const newDeviceRecord = new DeviceIdModel(newDeviceData);
        await newDeviceRecord.save();

        return { success: true, device: newDeviceRecord, custom: newCustom };
    } catch (error) {
        console.error("Error adding device:", error);
        throw error;
    }
}



async function updateDevice(deviceId, customParams) {
    try {
        // Buscar el dispositivo por deviceId
        const device = await DeviceModel.findOne({ deviceId: deviceId }).populate('custom');

        if (!device) {
            return { success: false, message: 'Device not found' };
        }

        // Si el dispositivo no tiene un documento Custom asociado, crea uno
        if (!device.custom) {
            const newCustom = await CustomModel.create(customParams);
            device.custom = newCustom._id;
            await device.save();
            return { success: true, message: 'New custom data created and associated with the device' };
        }

        // Si el documento Custom existe, actualiza sus parámetros
        await CustomModel.findByIdAndUpdate(device.custom._id, { $set: customParams }, { new: true, upsert: true });

        return { success: true, message: 'Custom data updated successfully' };
    } catch (error) {
        console.error("Error updating device custom parameters:", error);
        throw error;
    }
}

async function deleteDevice(deviceId) {
    try {
        // Buscar el dispositivo por deviceId
        const device = await DeviceModel.findOne({ deviceId: deviceId });

        if (!device) {
            return { success: false, message: 'Device not found' };
        }

        // Si el dispositivo tiene un documento Custom asociado, eliminarlo
        if (device.custom) {
            await CustomModel.findByIdAndRemove(device.custom);
        }

        // Eliminar el dispositivo
        await DeviceModel.findByIdAndRemove(device._id);

        return { success: true, message: 'Device and its custom data deleted successfully' };
    } catch (error) {
        console.error("Error deleting device and its custom parameters:", error);
        throw error;
    }
}

const deviceManagement ={
    getDevices,
    addDevice,
    updateDevice,
    deleteDevice
}

export default deviceManagement




