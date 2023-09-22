import { AppRepository } from "./app.repository";
export class AppServiceRegister {
  appRepository: AppRepository;
  constructor() {
    this.appRepository = new AppRepository();
  }
  findAll() {
    return this.appRepository.findAll();
  }
  create(message: string) {
    return this.appRepository.create(message);
  }
}
