import asyncio

from hume import HumeStreamClient
from hume.models.config import LanguageConfig

async def perform(sample):
    client = HumeStreamClient("AygG98GqUg0X5GkjDtZ25gY38zokOPsT3aPjAmRXOfay8AcX")
    config = LanguageConfig("sentence")
    async with client.connect([config]) as socket:
        result = await socket.send_text(sample)
        emotions = result["language"]["predictions"][0]["emotions"]
        max_item = max(emotions, key=lambda x: x['score'])
        max_name = max_item['name']
        print(max_name)
        return max_name

asyncio.run(perform("I am very very sad."))