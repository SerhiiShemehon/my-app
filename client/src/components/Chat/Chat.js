import { useEffect, useState, useContext } from 'react';
import socketIO from 'socket.io-client';
import Messages from './Messages';
import sentMusic from '../../assets/sound/sentMusic.mp3';
import receiveMusic from '../../assets/sound/receiveMusic.mp3';
import { AuthContext } from '../../context/auth';
import { Form, Input } from '../Form';
import { URL_BASE_SOCKET } from '../../constants';

let socket;

function Chat() {
    const { user } = useContext(AuthContext);
    const [userid, setId] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const audioSent = new Audio(sentMusic);
    const audioReceive = new Audio(receiveMusic);

    useEffect(() => {
        socket = socketIO(URL_BASE_SOCKET, { transports: ['websocket'] });
        socket.on('connect', () => setId(socket.id));
        socket.emit('joined', { user });
        socket.on('welcome', (data) => {
            audioReceive.play();
            setMessages([...messages, data]);
        });

        return () => {
            socket.off();
        };
    }, []);

    useEffect(() => {
        socket.on('sendMsg', (data) => {
            setMessages([...messages, data]);
        });

        return () => {
            socket.off();
        };
    }, [messages]);

    const handleSubmit = (e) => {
        e.preventDefault();
        audioSent.play();
        socket.emit('message', { message, userid });
        setMessage('');
    };

    return (
        <div className="chat">
            <div className="chat-main">
                {messages.map((item) => (
                    <Messages
                        key={item.message}
                        user={item.userid === userid ? 'You' : item.user}
                        className={
                            item.userid === userid
                                ? 'message-right'
                                : 'message-left'
                        }
                        message={item.message}
                    />
                ))}
            </div>
            <div className="chat-form">
                <Form handleSubmit={handleSubmit}>
                    <Input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button className="btn-send" type="submit">
                        Send
                    </button>
                </Form>
            </div>
        </div>
    );
}
export default Chat;
