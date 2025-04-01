export class MissingApiTokenError extends Error {
  constructor() {
    super(
      "Replicate API token is required. Set it in the REPLICATE_API_TOKEN environment variable"
    );
    this.name = "MissingApiTokenError";
  }
}
export class InvalidImageUrlError extends Error {
  constructor(url: string) {
    super(`Invalid image URL: ${url}. Must be a valid HTTP/HTTPS URL.`);
    this.name = "InvalidImageUrlError";
  }
}
