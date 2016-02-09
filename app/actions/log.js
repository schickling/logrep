export const LOG_ADD_MESSAGE = 'LOG_ADD_MESSAGE'

export function addMessage(message) {
  return {
    type: LOG_ADD_MESSAGE,
    message,
    date: new Date(),
  };
}

