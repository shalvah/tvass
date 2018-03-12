# tvass
That Very Awesome Serverless Site - demo serverless site showing count of page viewers in realtime. Check out the [walkthrough]()


### Prerequisites

- Node.js v6.5.0 or greater
- An AWS account. You can sign up for a free account [here](http://aws.amazon.com/free)
- A Pusher account. Sign up [here](http://pusher.com/signup) 

## Getting Started

1. Install the serverless framework: `npm install -g serverless`
2. Run `serverless install --url https://github.com/shalvah/tvass` to install the service
3. Install dependencies: `cd tvass && npm install`
4.  Create a pusher app and obtain your app keys from the dashboard. Replace the `PUSHER_*` environment variables in the `serverless.yml` file with your app credentials.
$. Deploy: `serverless deploy` (You'll need to configure the serverless CLI with your AWS credentials first; follow [these instructions](https://www.youtube.com/watch?v=HSd9uYj2LJA))
6. Enable Channel existence webhooks for your Pusher app (Dashboard > Webhooks). Copy the POST URL printed to the console after running `serverless deploy` and paste in the text field as the webhook URL.

## Built With

* [Pusher](https://pusher.com/) - APIs to enable devs building realtime features
* [the serverless framework](https://serverless.com/) - CLI tool for building serverless apps
* [AWS Lambda Functions](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html) - serverless cloud provider
* [Node.js](nodejs.org)
