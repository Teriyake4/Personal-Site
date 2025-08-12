// import { ConfidentialClientApplication, Configuration, NodeAuthOptions } from "@azure/msal-node";
import { ClientSecretCredential } from "@azure/identity";
import { ConfidentialClientApplication } from "@azure/msal-node";
import { Client } from "@microsoft/microsoft-graph-client"
import { TokenCredentialAuthenticationProvider } from "@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials/index.js";
import dotenv from "dotenv";

dotenv.config();


const credential = new ClientSecretCredential(
    process.env.TENANT_ID!,
    process.env.CLIENT_ID!,
    process.env.CLIENT_SECRET!,
);

const msalConfig = {
    auth: {
        clientId: process.env.CLIENT_ID!,
        authority: `https://login.microsoftonline.com/${process.env.TENANT_ID}`,
        clientSecret: process.env.CLIENT_SECRET,
    },
}

const tokenRequest = {
    scopes: ["https://graph.microsoft.com/.default"],
}

const authProvider = new TokenCredentialAuthenticationProvider(credential, {
    scopes: ["https://graph.microsoft.com/.default"],
});

export default async function getClient(): Promise<Client> {
    // let client;
    try {
        const cca = new ConfidentialClientApplication(msalConfig);
        const result = await cca.acquireTokenByClientCredential(tokenRequest);
        if (!result || !result.accessToken) {
            console.error("[ERROR] auth/getClient - Error acquiring access token: Response was null");
            throw new Error("Failed to acquire access token.");
        }
        const client = Client.init({
            authProvider: (done) => {
            done(null, result.accessToken);
            },
        });
        // client = Client.initWithMiddleware( {authProvider: authProvider})
        
        // if(client === null) {
        //     console.error("[ERROR] auth/getClient - Error acquiring client: Response was null");
        //     throw new Error("Response was null");
        // }
        return client;
    } catch (error) {
        console.error("[ERROR] auth/getClient - Error acquiring client:", error);
        throw error;
    }
}