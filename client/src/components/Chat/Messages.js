function Messages({ user, message, className }) {
    return (
        <div className={`message-block ${className}`}>
            <strong>{user}</strong>
            <p>{message}</p>
        </div>
    );
}
export default Messages;
