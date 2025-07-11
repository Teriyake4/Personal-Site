import { VercelRequest, VercelResponse } from "@vercel/node";

require("dotenv").config();
const msal = require("@azure/msal-node")

const msalConfig = {
    auth: {
        clientId: process.env.CLIENT_ID,
        authority: process.env.AUTHORITY + process.env.TENANT_ID,
        clientSecret: process.env.CLIENT_SECRET,
    }
};

const tokenRequest = {
    scopes: process.env.GRAPH_ENDPOINT + ".default",
}


export default async function getAccessToken(req: VercelRequest, res: VercelResponse) {
    try {
        const cca = new msal.ConfidentialClientApplication(msalConfig)

        console.log(`[${req.method}] ${req.url} - Acquiring access token`);
        const credResponse = await cca.acquireTokenByClientCredential(tokenRequest);
        console.log(`[${req.method}] ${req.url} - Access token acquired successfully`)
        
        return res.status(200).json({
            data: {
                accessToken: credResponse.accessToken,
                expiresIn: credResponse.expiresIn
            }
        });
    } catch(error) {
        console.error(`[${req.method}] ${req.url} - Error acquiring access token:`, error);
        return res.status(500).json({
            error: "Authentication failed",
        })
    }
}