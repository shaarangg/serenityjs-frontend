export default [
	{
		lang: "Javascript",
		value: "javascript",
		code: `fetch("https://api.merenity.live/predict", {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
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
        headers = {
            "Content-Type": "application/json",
        }
        response = requests.request("POST", url, json=payload, headers=headers)
        print(response.text)`,
	},
	{
		lang: "Bash",
		value: "bash",
		code: `curl --request POST \
        --url https://api.myserenity.live \
        --header 'Content-Type: application/json' \
        --data '{
         "text": "string"
        }'`,
	},
];
