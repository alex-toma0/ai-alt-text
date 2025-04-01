import Replicate from "replicate";
import { MissingApiTokenError, InvalidImageUrlError } from "./errors";
import { cleanAltText, isValidUrl } from "./utils";

interface BlipOptions {
  prompt?: string;
  apiToken?: string;
  model?: `${string}/${string}` | `${string}/${string}:${string}`;
}

export default async function generateAltText(
  imageUrl: string,
  options: BlipOptions = {}
): Promise<string> {
    if (!isValidUrl(imageUrl)) {
        throw new InvalidImageUrlError(imageUrl)
    }

  const {
    prompt = "Describe this image concisely for use as alt text",
    apiToken = process.env.REPLICATE_API_TOKEN,
    model = "salesforce/blip:2e1dddc8621f72155f24cf2e0adbde548458d3cab9f00c0139eea840d0ac4746",
  } = options;

  if (!apiToken) {
    throw new MissingApiTokenError();
  }

  try {
    const replicate = new Replicate({
      auth: apiToken,
    });

    const output = await replicate.run(model, {
      input: {
        image: imageUrl,
        question: prompt,
      },
    });

    let altText = cleanAltText(output)
    return altText;
  } catch (error) {
    console.error("Error generating alt text: ", error);
    return "An image";
  }
}

