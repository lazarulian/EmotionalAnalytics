import asyncio

from hume import HumeStreamClient
from hume.models.config import LanguageConfig

async def perform(sample):
    client = HumeStreamClient("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")
    config = LanguageConfig("sentence")
    async with client.connect([config]) as socket:
        #make call
        result = await socket.send_text(sample)
        emotions = result["language"]["predictions"][0]["emotions"]
        max_item = max(emotions, key=lambda x: x['score'])
        max_name = max_item['name']
        print(max_name)
        return max_name

