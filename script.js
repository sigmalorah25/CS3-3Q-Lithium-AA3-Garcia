function legitChecker() {
    let messageToVerify = prompt('Enter a message to verify.')

    if ((messageToVerify.indexOf('FR') >= 0) && (messageToVerify.indexOf('AI') >= 0 )) {
        document.getElementById('result').innerHTML = `The message ${messageToVerify} is very legitimate! Info is very safe :p`;
    }
    
        else if (messageToVerify.indexOf('AI') >= 0 || messageToVerify.indexOf('aI') >= 0 || messageToVerify.indexOf('Ai') >= 0) {
        document.getElementById('result').innerHTML = `The message ${messageToVerify} is tampered!!!!!!!!! D:<<< DO NOT LISTEN TO THIS INFO.`;
    }

        else if (messageToVerify.indexOf('FR') >= 0) {
        document.getElementById('result').innerHTML = `The message ${messageToVerify} is legitimate! ^__^ `;
    }

        else {
        document.getElementById('result').innerHTML = `The message ${messageToVerify} yet to be encoded... Try again next time! TnT`;
    }
}