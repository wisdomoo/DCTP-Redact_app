document.addEventListener("DOMContentLoaded", () => {
    const originalText = document.getElementById("message");
    const redactWords = document.getElementById("textToRedact");
    const redactButton = document.getElementById("redact-button");
    const specChar = document.getElementById("spec-char")
    const redactedText = document.querySelector(".redacted-text");
    const numOfWords = document.querySelector(".numWords");
    const matchedWords = document.querySelector(".matchedWords");
    const scrambledchar = document.querySelector(".scrambledchar");
    const timeToExecute = document.querySelector(".timeToExecute")

  
    redactButton.addEventListener("click", () => {
        const startTime = new Date();
        const textToRedact = message.value;
        console.log(textToRedact)
        const wordsToRedact = redactWords.value.split(" ");
        
        // Regular expression pattern to match specified words
        const redactPattern = new RegExp(wordsToRedact.map(word => `\\b${word}\\b`).join("|"), "gi");
        
        // Redact the specified words with asterisks
        const redacted = textToRedact.replace(redactPattern, specChar.value);
        const redactedArray = redacted.split(" ")
        
        console.log(redactedArray)
        //console.log(wordsToRedact)
        //calculates the number of matched words
        let len = 0;
        
        //loops through the array and compares it with the special characters provided by the user
        for (let i = 0; i < redactedArray.length; i++) {
            if (redactedArray[i] === specChar.value){
                len++
              
            }
          }
         // Calculates the execution time by subtracting the start time from the end time
         const endTime = new Date();
         const executionTime = endTime - startTime;
          
       

        const numOfChar = wordsToRedact.join("")
       console.log(numOfChar)
        matchedWords.innerHTML = len  
        redactedText.innerHTML = redacted;
        numOfWords.innerHTML = textToRedact.split(" ").length
        scrambledchar.innerHTML = numOfChar.length
        timeToExecute.textContent = `${executionTime} milliseconds`;

    });
});
