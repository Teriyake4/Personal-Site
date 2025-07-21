import { ConfidentialClientApplication, Configuration, NodeAuthOptions } from "@azure/msal-node";
import { ClientSecretCredential } from "@azure/identity";
import { Client } from "@microsoft/microsoft-graph-client"
import { TokenCredentialAuthenticationProvider } from "@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials";
import dotenv from "dotenv";

dotenv.config();


const credential = new ClientSecretCredential(
    process.env.TENANT_ID!,
    process.env.CLIENT_ID!,
    process.env.CLIENT_SECRET!,
);

const authProvider = new TokenCredentialAuthenticationProvider(credential, {
    scopes: ["https://graph.microsoft.com/.default"],
});

export default async function getClient(): Promise<Client> {
    let client;
    try {
        client = Client.initWithMiddleware( {authProvider: authProvider})
        
        if(client === null) {
            console.error("[ERROR] auth/getClient - Error acquiring client: Response was null");
            throw new Error("Response was null");
        }
        return client;
    } catch (error) {
        console.error("[ERROR] auth/getClient - Error acquiring client:", error);
        throw error;
    }
}