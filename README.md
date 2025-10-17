# Plotly Studio Proxy

This is a proxy server for Plotly Studio.

## Description
This project provides a simple Node.js proxy server for handling requests from Plotly Studio.

## Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/rc-bellergy/plotly-studio-proxy.git
   cd plotly-studio-proxy
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## Usage
1. In proxy.js, update the `target` to your Plotly Studio app URL

2. Start the proxy server:
   ```bash
   npm start
   ```
3. The server will run on `http://localhost:3000`


## Vercel Deployment

This project can be easily deployed to Vercel.

1.  **Fork and Clone**: Fork this repository to your GitHub account and then clone it locally.
2.  **Vercel CLI**: If you haven't already, install the Vercel CLI:
    ```bash
    npm install -g vercel
    ```
3.  **Deploy**: Navigate to your project directory in the terminal and run:
    ```bash
    vercel
    ```
    Follow the prompts to link your project to a new or existing Vercel project.
