import { sanityClient } from "sanity:client";
import getFileAsset from "@sanity/asset-utils";

export const fileBuilder = getFileAsset(sanityClient);

export function urlForFile(source) {
  return fileBuilder.image(source);
}
