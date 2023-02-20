import { Helmet } from 'react-helmet';

import { Chat } from '../../../components/Chat';

import './Messages.scss';

function Messages() {
    return (
        <>
            <Helmet>
                <title>Chat | My App</title>
            </Helmet>
            <h1 className="dashboard-title">Chat</h1>
            <Chat />
        </>
    );
}

export default Messages;
