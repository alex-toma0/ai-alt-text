# ai-alt-text

A lightweight module designed to generate accesible alt text for images using the BLIP model and Replicate.

## Installation

```
npm install ai-alt-text
```

## Setup

You'll need a Replicate API token, get it from [replicate.com](https://replicate.com).

Set your token as an environment variable:

```
REPLICATE_API_TOKEN=your_replicate_token
```

## Basic usage
```javascript
import generateAltText from 'ai-alt-text'

const imageUrl = 'https://picsum.photos/800/900'
const altText = generateAltText(imageUrl)

```

## Advanced usage

You can tweak the model's parameters through the BlipOptions interface
```javascript
import generateAltText from 'ai-alt-text'

const imageUrl = 'https://picsum.photos/800/900'

const options = {
    prompt='Describe this image as alt text, for use by visually impaired users.',
    model='salesforce/blip:2e1dddc8621f72155f24cf2e0adbde548458d3cab9f00c0139eea840d0ac4746'
}
    
const altText = generateAltText(
    options=options,
    imageUrl=imageUrl
)
```

## License

MIT