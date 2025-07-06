import { randomUUID } from "crypto";
import mime from "mime-types";

export function generateRandomImageName(mimeType: string): string {
  const ext = mime.extension(mimeType) || "bin";
  const randomName = `${Date.now()}-${randomUUID()}`;
  return `${randomName}.${ext}`;
}