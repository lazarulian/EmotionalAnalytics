from flask import Flask, request
import asyncio

import sdk

app = Flask(__name__)
API_KEY  =  'AygG98GqUg0X5GkjDtZ25gY38zokOPsT3aPjAmRXOfay8AcX'

@app.route('/love_babu', methods=['POST'])
async def websocket_request():
    json_data = request.get_json()
    text = json_data.get('text')
    result = await sdk.perform(text)
    return result

if __name__ == '__main__':
    app.run()
