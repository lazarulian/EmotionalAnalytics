import asyncio

from hume import HumeStreamClient
from hume.models.config import LanguageConfig

async def perform(sample):
    client = HumeStreamClient("AygG98GqUg0X5GkjDtZ25gY38zokOPsT3aPjAmRXOfay8AcX")
    config = LanguageConfig()
    async with client.connect([config]) as socket:
        for sample in sample:
            result = await socket.send_text(sample)
            emotions = result["language"]["predictions"][0]["emotions"][0]["name"]
            print(emotions)
            return str(emotions)


