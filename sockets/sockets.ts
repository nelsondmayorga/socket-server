import { Socket } from "socket.io";
import socketIO from 'socket.io';

export const disconnect = (client: Socket) => {
    client.on('disconnect', () => {
        console.log('Cliente desconectado');
    })
}

export const mensaje = (client: Socket, io: socketIO.Server) => {
    client.on('mensaje', (payload: {de: string, cuerpo: string}) => {
        console.log('Mensaje recibido', payload);
        io.emit('new-message', payload);
    });
}