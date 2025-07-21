import { Client } from "@microsoft/microsoft-graph-client"
import dotenv from "dotenv";
import { DriveItemUrl } from "./type";

dotenv.config();

const driveId = process.env.DRIVE_ID;
const galleryId = process.env.GALLERY_ID;

const apiRoute = `/drives/${driveId}/items/${galleryId}/children`;




export default async function fetchDriveItems(client: Client): Promise<DriveItemUrl[]> {
    let response;
    try {
        response = await client.api(apiRoute)
            .orderby("name")
            // .expand("thumbnails")
            .get();
        if(response === null) {
            console.error("[ERROR] fetchDriveItems/fetchDriveItems - Error fetching drive items: Response was null");
            throw new Error("Response was null");
        }
        return response.value;
    } catch(error) {
        console.error("[ERROR] fetchDriveItems/fetchDriveItems - Error fetching drive items:", error);
        throw error;
    }
}