import io from 'socket.io-client';

export const connect = () => {
  return io.connect('http://localhost:4000');
};

export const createPin = (socket) => {
  socket.emit('create_pin');
};

export const authorizePin = (socket, userInputPin, pin) => {
  socket.emit('authorize_pin', userInputPin, pin);
};

export const updateFormData = (socket, formData) => {
  socket.emit('update_formdata', formData);
}
