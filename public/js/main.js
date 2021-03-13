const chatForm = document.getElementById('chat-form');
const socket = io();
const chatMessages = document.querySelector('.chat-messages');
//message from the server
socket.on('message', (message) => {
    console.log(message);
    outputMsg(message);
    
    chatMessages.scrollTop= chatMessages.scrollHeight;

    //scroll down
    
  });

chatForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    //get msg text

    const msg = e.target.elements.msg.value;
    console.log(msg);
    socket.emit('chatMessage',msg)
    //clear input
    e.target.elements.msg.value = '';
    e.target.elements.msg.focus();
})

//output the message
const outputMsg = (message) => {
    const div = document.createElement('div');
    div.innerHTML = `<p class="meta">${message.username} <span>${message.time}</span></p>
    <p class="text">
        ${message.text}
    </p>`

    document.querySelector('.chat-messages').appendChild(div)

}