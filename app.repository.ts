import { readFile, writeFile } from "fs/promises";

export class AppRepository {
  async findOne(id: string) {
    const rawContent = await readFile("registerData.json", "utf-8");
    const mainContent = JSON.parse(rawContent);
    return mainContent[id];
  }

  async findAll() {
    const rawContent = await readFile("registerData.json", "utf-8");
    const mainContent = JSON.parse(rawContent);
    return mainContent;
  }

  async create(message: string) {
    const rawContent = await readFile("registerData.json", "utf-8");
    const mainContent = JSON.parse(rawContent);
    let id = Math.floor(Math.floor(Math.random() * 999));
    mainContent[id] = { id, mainContent: message };
    await writeFile("registerData.json", JSON.stringify(mainContent));
  }
}
