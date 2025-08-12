import { Client } from "@microsoft/microsoft-graph-client"
import { VercelRequest, VercelResponse } from "@vercel/node";
import getClient from "./auth.js"
import fetchDriveItems from "./fetchDriveItems.js"
import { DriveItemUrl, Image } from "./type";

export default async function handler(req: VercelRequest, res: VercelResponse) {
    const functionPath = "getImages/handler";
    console.log(`[${req.method}] ${req.url} - Acquiring images`);
    // Get client
    let client: Client;
    try {
        client = await getClient();
    } catch(error) {
        console.error(`[ERROR] ${functionPath} - Error in authentication:`, error);
        return res.status(500).json({
            error: "Authentication failed",
        });
    }
    // get drive items
    let items: DriveItemUrl[];
    try {
        items = await fetchDriveItems(client);
    } catch(error) {
        console.error(`[ERROR] ${functionPath} - Error in fetching items:`, error);
        return res.status(500).json({
            error: "Fetching images failed",
        });
    }
    const images: Image[] = Array.from({ length: items.length / 2 }, (_, i) => ({ // One Image is preview and display combined
        id: i,
        display: "",
        preview: "",
        aspectRatio: 0,
        
    }));
    for(let i = 0; i < items.length; i++) {
        const item = items[i];
        if(!item) {
            console.warn(`[WARN] ${functionPath} - Item ${i} from driveItems is empty`);
            continue;
        }
        else if(!item.name || !item["@microsoft.graph.downloadUrl"] || !item.image || !item.image.height || !item.image.width) {
            const missing = !item.name ? "Name"
                : !item["@microsoft.graph.downloadUrl"] ? "Download URL"
                : !item.image ? "Image data"
                : !item.image.height ? "Image height"
                : !item.image.width ? "Image width"
                : "OK?"; // This should never appear
            console.warn(`[WARN] ${functionPath} - ${missing} of item ${i} from driveItems is empty`);
            continue;
        }
        const idAndType = item.name.split("_"); // Name should be {name}_disp.jpeg or {name}_prev.jpeg
        const id = Number(idAndType![0]);
        if(idAndType![1] === "disp") {
            images[id].display = item["@microsoft.graph.downloadUrl"];
        }
        else {
            images[id].preview = item["@microsoft.graph.downloadUrl"];
            let aspectRatio = item.image.height / item.image.width;
            aspectRatio = Math.trunc(aspectRatio * (10 ** 2)) / 10 ** 2;
            images[id].aspectRatio = aspectRatio;
        }
    }
    return res.status(200).json({
        data: images,
    });
}