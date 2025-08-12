import axios from 'axios';
import { Client } from "@microsoft/microsoft-graph-client"
import dotenv from "dotenv";
import { DriveItemUrl } from "./type";

dotenv.config();

const driveId = process.env.DRIVE_ID;
const galleryId = process.env.GALLERY_ID;

const apiRoute = `/drives/${driveId}/items/${galleryId}/children`;

const link = "https://1drv.ms/f/c/87b17533b507916d/Eg7jJvMXZdlCmqeOYERv-l4BHcbzab9Iedzld_UTzqilXw"

function base64UrlEncode(url: string): string {
  // Step 1: Base64 encode the URL
  const base64Encoded = Buffer.from(url, 'utf-8').toString('base64');

  const base64url = base64Encoded
    .replace(/=/g, '')   // Remove padding
    .replace(/\+/g, '-') // Replace '+' with '-'
    .replace(/\//g, '_'); // Replace '/' with '_'

  return `u!${base64url}`;
}
const manual = "u!aHR0cHM6Ly8xZHJ2Lm1zL2YvYy84N2IxNzUzM2I1MDc5MTZkL0VnN2pKdk1YWmRsQ21xZU9ZRVJ2LWw0QkhjYnphYjlJZWR6bGRfVVR6cWlsWHc"


export default async function fetchDriveItems(client: Client): Promise<DriveItemUrl[]> {
    let response;
    try {
        // const client = Client.init({
        //     authProvider: (done) => {
        //         done(null, null); // No token needed for public links
        //     },
        // });
        // response = await client
        //     .api(`/shares/u!${base64UrlEncode(link)}/driveItem`)
        //     .expand("children")
        //     .get();
        response = await client.api(apiRoute)
            // .orderby("name")
            // .expand("thumbnails")
            .get();
        // response = await axios.get(`https://api.onedrive.com/v1.0/shares/${base64UrlEncode(link)}/root?expand=children`)
        // response = await axios.get("https://api.onedrive.com/v1.0/shares/u!aHR0cHM6Ly8xZHJ2Lm1zL2YvYy84N2IxNzUzM2I1MDc5MTZkL0VnN2pKdk1YWmRsQ21xZU9ZRVJ2LWw0QkhjYnphYjlJZWR6bGRfVVR6cWlsWHc/root?expand=children")

        if(response === null) {
            console.error("[ERROR] fetchDriveItems/fetchDriveItems - Error fetching drive items: Response was null");
            throw new Error("Response was null");
        }
        return response;
    } catch(error) {
        console.error("[ERROR] fetchDriveItems/fetchDriveItems - Error fetching drive items:", error);
        throw error;
    }
}