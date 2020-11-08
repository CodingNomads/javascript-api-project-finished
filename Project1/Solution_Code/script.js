/*
 *
 *
 * Start of task 1 here:
 * - you will be creating this block of HTML with the following function createPreviewBox:
 *  
 *       <div class="chat-bubble out">
 *           <p>
 *               Let's go to the store and grab some puppy chow?
 *           </p>
 *       </div>
 *
 *  - Using the comments as a guide, create this chunk of code with JavaScript and add it to the DOM
 */

const iterateOverMessgeObjectAndCreateMessages = () => {
    // This references the object in the messageInfo.js file
    const messages = message_info[0].messages
    messages.forEach(message => createChatBubble(message))
}

const createChatBubble = (msgObj) => {
    // Create a div element and assign it to a variable called chatBubble
    let chatBubble = document.createElement('div');
    // Add two classes "chat-bubble" and "out" to the chatBubble element you just created
    chatBubble.classList.add("chat-bubble", msgObj.sent);
    // Create a p element and assign it to a variable called paragraph
    let paragraph = document.createElement('p');
    // Add the value passed in as the msg parameter to the innerText property of paragraph
    paragraph.innerText = msgObj.message;
    // Append theparagraph element to the newly created Chat Bubble element
    chatBubble.appendChild(paragraph);
    // Reference the Element from the HTML File with the id 'chat-bubble-wrapper' and assign
    // the referece to the variable wrapper
    let wrapper = document.getElementById('chat-bubble-wrapper');
    // Append the chatBubble element to the wrapper element
    wrapper.appendChild(chatBubble);
}

iterateOverMessgeObjectAndCreateMessages()


/*
 *
 *
 * Start of task 2 here:
 * - you will be creating this block of HTML with the following function createPreviewBox:
 * 
 *      <div class="message-preview-box">
 *          <div class="img-wrap">
 *              <img src="./images/sirBarksAlot.jpeg" alt="A cute puppy icon">
 *          </div>
 *          <div class="message-text-wrap">
 *              <p>Bark Wharlberg</p>
 *              <p>I'm baby pok pok forage kinfolk taxidermy actually cornhole</p>
 *          </div>
 *          <div class="date-wrap">
 *              <p>3/12/20</p>
 *          </div>
 *      </div>
 * 
 *  - Using the comments as a guide, create this chunk of code with JavaScript and add it to the DOM
 */

 const iterateOverMessgeObjectAndCreateSidebar = () => {
    // This references the object in the messageInfo.js file
    const messageBoxes = message_info;
    messageBoxes.forEach(messageBox => createPreviewBox(messageBoxes))
}

 function createPreviewBox(messageBoxInfo) {

    //Create a div element and assign it to a variable called previewBox
    let previewBox = document.createElement('div');
    // add a class of "message-preview-box" to the previewBox element you just created
    previewBox.classList.add('message-preview-box')

    // Create a div element and assign it to a variable called imageWrap

    // add a class of "img-wrap" to the imageWrap element you just created

    // Create an img element and assign it to a variable called image

    // add a src attribute and alt attribute to the image element you just created (hint: google for reference the JS method 'setAttribute')

    // append the image to the imageWrap

    // append the imageWrap to the previewBox

    // Create a div element and assign it to a variable called textWrap

    // add a class of "message-text-wrap" to the textWrap element you just created

    // Create a paragraph element and assign it to a variable called p1

    // set the innerHTML of p1 equal to the name "Mcgruff the Crime Dog"

    // Create a second paragraph element and assign it to a variable called p2

    // set the innerHTML of p2 equal to the message "Take a Bite Out of Crime"

    // append p1 to the textWrap

    // append p2 to the textWrap

    // append the textWrap to the previewBox

    // Create a div element and assign it to a variable called dateWrap

    // add a class of "date-wrap" to the dateWrap element you just created

    // Create a paragraph element and assign it to a variable called dateP

    // set the innerHTML of dateP equal to the name "3/25/20"

    // append dateP to the dateWrap

    // append the dateWrap to the previewBox

    // Select the div with the id of "message-wrapper" (already on the HTML page) and assign that to a new variable named "messageWrap".

    // append the previewBox element to the messageWrap

 }

 //Invoke the createPreviewBox function to see it work!