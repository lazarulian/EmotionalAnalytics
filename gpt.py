import os
import openai
openai.organization = "org-v4HJ8q7Yc457LIZVfDG22Kss"
openai.api_key = os.getenv("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")
openai.Model.list()
response = openai.ChatCompletion.create(
    model="chat-gpt3.5-turbo",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Explain asynchronous programming in the style of the pirate Blackbeard."},
    ],
    temperature=0,
)

print(response['choices'][0]['message']['content'])