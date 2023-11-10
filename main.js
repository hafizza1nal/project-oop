function buttonClicked(){


  var word = document.getElementById("word_input").value

  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((response) => response.json())
      .then((data) => {
          console.log(data)

          document.getElementById("wordDefinition").innerHTML = data[0].meanings[0].definitions[0].definition
          document.getElementById("wordExample").innerHTML = data[0].meanings[0].definitions[0].example
          document.getElementById("wordAntonyms").innerHTML = data[0].meanings[0].antonyms[0]
          document.getElementById("wordSource").innerHTML = data[0].sourceUrls[0]
          
          // Check if the API response contains an audio URL
      if (data[0].phonetics && data[0].phonetics[0] && data[0].phonetics[0].audio) {
        var audioUrl = data[0].phonetics[0].audio;

        // Create an audio element
        var audioElement = document.createElement("audio");
        audioElement.controls = true; // Display audio controls
        audioElement.src = audioUrl; // Set the audio source

        // Append the audio element to the document
        document.getElementById("audio").innerHTML = ""; // Clear previous audio
        document.getElementById("audio").appendChild(audioElement);
      }

          /*

          var words = data.dictionary[0];

          if(words) {
            var word = words.strWord;
            var translation = words.strTranslation;

            document.getElementById("wordDetails").innerHTML = `Word: ${word} <br> Translation: ${translation}`;
          } else {
            document.getElementById("wordDetails").innerHTML = "No meal found with that name";
          }
      })
      .catch((error) => {
        console.error('Error:',error)
        document.getElementById("wordDetails").innerHTML = "An error occured while fetching the meal data";
        */
      });
}

