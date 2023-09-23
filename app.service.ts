import { AppRepository } from "./app.repository";
export class AppServiceRegister {
  appRepository: AppRepository;
  constructor() {
    this.appRepository = new AppRepository();
  }
  findAll() {
    return this.appRepository.findAll();
  }

  findOne(id:string) {
    return this.appRepository.findOne(id);
  }

  create(message: string) {
    return this.appRepository.create(message);
  }
}
