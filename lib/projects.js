import fs from 'fs';
import path from 'path';

export async function getAllProjectData() {
  const filePath = path.join(process.cwd(), './projects/portfolio.json');
  const jsonData = await fs.readFileSync(filePath);
  const projects = JSON.parse(jsonData);
  return {
    projects
  }
}
