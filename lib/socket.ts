import { io, type Socket } from 'socket.io-client'

let socket: Socket | null = null

/** Single shared connection so route changes do not open extra sockets. */
export function getSocket(): Socket {
  if (!socket) {
    const backendUrl =
  process.env.NEXT_PUBLIC_SHADOWCHAT_URL || 'http://localhost:3000'

    socket = io(backendUrl, {
      path: '/socket',
      transports: ['websocket', 'polling'],
      autoConnect: false,
      reconnectionAttempts: 8,
      reconnectionDelay: 700,
    })
  }

  return socket
}

export function disposeSocket() {
  if (socket) {
    socket.removeAllListeners()
    socket.disconnect()
    socket = null
  }
}