const replicateProxy = "https://replicate-api-proxy.glitch.me";

const chatbotText = document.getElementById("chatbot");

async function getGeneration(positive) {
  let prompt;
  if (positive)
    prompt =
      "Give me a sentence that is less than 8 words to compliment someone's hardwork. Only respond with the sentence. Make sure it's not longer than 60 characters. NO other text.";
  else
    prompt =
      "Give me a sentence that is less than 8 words that push someone to work harder. Make sure it's not longer than 60 characters. Only respond with the sentence. NO other text.";

  let data = {
    version: "8e6975e5ed6174911a6ff3d60540dfd4844201974602551e10e9e87ab143d81e",
    input: {
      prompt: prompt,
      max_new_tokens: 10000,
    },
  };
//   console.log("Asking for generation Info From Replicate via Proxy", data);
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  const url = replicateProxy + "/create_n_get/";
//   console.log("url", url, "options", options);
  const generation_info = await fetch(url, options);
//   console.log("generation_response", generation_info);
  const proxy_said = await generation_info.json();

  if (proxy_said.output.length == 0) {
    // imageDiv.innerHTML = "Something went wrong, try it again";
    console.log("Something went wrong.");
  } else {
    let output = proxy_said.output.join("");
    console.log(output);
    chatbotText.innerHTML = output.toUpperCase();
  }
}

document.addEventListener("mousedown", function() {
    getGeneration(true);
});

document.addEventListener("mouseup", function() {
    getGeneration(false);
});