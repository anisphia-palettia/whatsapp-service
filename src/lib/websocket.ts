import {WebSocketServer, WebSocket} from 'ws';

let wss: WebSocketServer | null = null;

export function initializeWebSocketServer(port: number = 8001): WebSocketServer {
    if (wss) {
        console.log('WebSocket server already initialized.');
        return wss;
    }

    wss = new WebSocketServer({port});
    console.log(`WebSocket server running on ws://localhost:${port}`);

    wss.on('connection', (ws: WebSocket) => {
        console.log('Client connected');

        ws.on('message', (message: string) => {
            console.log(`Received from client: ${message}`);
            ws.send(`Server received: ${message}`);
        });

        ws.send('Hello from WebSocket Server (TS)!');
    });

    return wss;
}

export function broadcastMessage(message: string) {
    if (!wss) return;

    wss.clients.forEach((client) => {
        if (client.readyState === client.OPEN) {
            client.send(message);
        }
    });
}

export function broadcast(message: string) {
    if (!wss) return;
    wss.clients.forEach((client) => {
        if (client.readyState === client.OPEN) {
            client.send(message);
        }
    });
}