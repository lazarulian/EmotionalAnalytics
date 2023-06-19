## Review Classification Service with Emotion Detection

This repository contains a review classification service that utilizes HumeAI's emotion detection model to categorize customer reviews based on emotion and rating. The service aims to provide sellers with valuable insights into the emotional sentiment of their customers' reviews.

### Features

- **Emotion Detection:** The service leverages HumeAI's powerful emotion detection model to accurately identify the emotions expressed in customer reviews. By analyzing the text of the reviews, the service categorizes them into various emotional categories such as happy, sad, angry, etc.

- **Rating-based Classification:** In addition to emotion detection, the service takes into account the rating provided by the customers. This combination of emotion and rating allows for a more comprehensive understanding of the sentiment behind the reviews.

- **Real-time Alerting:** The system includes a real-time alerting mechanism that notifies sellers of any sudden spikes in emotionally negative reviews. This feature enables sellers to promptly address customer concerns and resolve potential issues before they escalate.

- **Complaint Extraction with GPT-4 & LangChain:** To provide sellers with detailed insights into specific product complaints, the service utilizes the advanced language capabilities of GPT-4 and LangChain. These technologies extract and summarize the key complaints mentioned in the reviews, allowing sellers to quickly identify areas for improvement.

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/lazarulian/emotionalanalytics.git
   ```

2. Install the required dependencies:

   ```
   pip install -r requirements.txt
   ```

3. Download the pre-trained emotion detection model from HumeAI's website and place it in the appropriate directory.

4. Obtain the necessary API keys and credentials for GPT-4 and LangChain and update the configuration file (`config.ini`) with the relevant information.

### Usage

1. Start the review classification service:

   ```
   python babu.py
   ```

2. Access the service via the provided API endpoints. Documentation for the API endpoints can be found in the `docs` directory.

3. Monitor the real-time alerts for spikes in emotionally negative reviews and take appropriate actions to address customer concerns.

### Contributing

Contributions to this project are welcome. To contribute, please follow these steps:

1. Fork the repository.

2. Create a new branch for your feature or bug fix.

3. Make the necessary changes and commit them.

4. Push your changes to your forked repository.

5. Submit a pull request with a detailed description of your changes.

### License

This project is licensed under the [MIT License](LICENSE.md).

### Acknowledgements

- [HumeAI](https://www.hume.ai) for providing the emotion detection model.
- [GPT-4](https://www.openai.com) and [LangChain](https://www.langchain.com) for their language capabilities in complaint extraction.
- The open-source community for their valuable contributions and support.

Please refer to the individual websites and documentation of the mentioned technologies for further information and usage guidelines.
