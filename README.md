# The Decentralized Right to Breathe Monorepo

Welcome to **The Decentralized Right to Breathe** repository, a cutting-edge initiative that combines the power of blockchain, IoT, and decentralized technologies to revolutionize the way we perceive and interact with digital art and assets. This monorepo contains all the components necessary to power this ecosystem.

## Repository Structure

The repository is organized into the following directories:

- **assets**: Contains images and documents for the project documentation.
- **breathfor-sale-website**: A Node.js + Angular web application that showcases the NFTs in connection with the BreathTaking device.
- **iot-integration-server**: A Python-based MQTT client app that automates NFT art generation and sales.
- **nft-collection**: Smart contracts written in Solidity for managing the NFT collection.

## Getting Started

### Prerequisites

To get started, ensure you have the following installed on your machine:

- **Node.js**: For running the website.
- **Python**: For the IoT integration server.
- **Solidity**: For compiling the smart contracts.
- **Truffle/Hardhat**: For deploying the smart contracts.

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/the-decentralized-right-to-breathe.git
    cd the-decentralized-right-to-breathe
    ```

2. **Install dependencies for the web application**:
    ```bash
    cd breathfor-sale-website
    npm install
    ```

3. **Install dependencies for the IoT integration server**:
    ```bash
    cd ../iot-integration-server
    pip install -r requirements.txt
    ```

4. **Compile and deploy the smart contracts**:
    ```bash
    cd ../nft-collection
    truffle compile
    truffle migrate
    ```

### Usage

#### Running the Web Application

To start the web application, navigate to the `breathfor-sale-website` directory and run:
```bash
npm start
```
Open your browser and go to `http://localhost:4200` to view the website.

#### Running the IoT Integration Server

To start the IoT integration server, navigate to the `iot-integration-server` directory and run:
```bash
python app.py
```
This will start the MQTT client, which will handle the automation of NFT art generation and sales.

### Smart Contracts

The smart contracts for the NFT collection are located in the `nft-collection` directory. You can interact with these contracts using Truffle or any other Ethereum development framework.

## Contributing

We welcome contributions from the community! To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch with your feature or bug fix.
3. Commit your changes and push them to your fork.
4. Open a pull request with a detailed description of your changes.

Please ensure all contributions adhere to our code of conduct and include appropriate tests and documentation.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, feel free to open an issue or contact us at [info@lo-ph.org](mailto:info@lo-ph.org).

Thank you for being a part of **The Decentralized Right to Breathe**! Let's revolutionize governance together.