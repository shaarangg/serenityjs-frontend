export default [
	{
		lang: "Javascript",
		value: "javascript",
		code: `fetch("https://api.merenity.live/predict", {
"method": "POST",
"body": {"text":"string"}
})
.then(response => {
console.log(response);
})
.catch(e => {
console.error(e);
});`,
	},
	{
		lang: "Python",
		value: "python",
		code: `import request
        
url = "https://api.myserenity.live/predict"

payload = {
    "text": "string",
}
response = requests.request("POST", url, json=payload)
print(response.text)`,
	},
	{
		lang: "Bash",
		value: "bash",
		code: `curl --request POST \\
--url https://api.myserenity.live \\
--data '{
    "text": "string"
}'`,
	},
];
