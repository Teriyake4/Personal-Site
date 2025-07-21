import { DriveItem } from "@microsoft/microsoft-graph-types";

export type DriveItemUrl = DriveItem & {
  "@microsoft.graph.downloadUrl"?: string;
};

export type Image = {
    id: number;
    display: string;
    preview: string;
    aspectRatio: number;
}