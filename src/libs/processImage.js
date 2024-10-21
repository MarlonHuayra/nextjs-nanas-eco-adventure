import { writeFile } from 'fs/promises'
import path from 'path'

export async function processImage(image) {
  //convert image to byte them buffer
	const bytes = await image.arrayBuffer()
	const buffer = Buffer.from(bytes)

  //generate in a route
	const filePath = path.join(process.cwd(), 'public', image.name)
  //create
	await writeFile(filePath, buffer)
  //return filePath
  return filePath
}
