import { Controller, Get, Res, Body, Post, Param } from "@nestjs/common";
import { Response } from "express";
import { CreateRegisterDto } from "./create-User.dto";
import { AppServiceRegister } from "app.service";

@Controller()
export class AppController {
  appServiceRegister: AppServiceRegister;
  constructor() {
    this.appServiceRegister = new AppServiceRegister();
  }

  @Get()
  listUsers() {
    return this.appServiceRegister.findAll();
  }

  @Post()
  postUser(@Body() body: CreateRegisterDto) {
    const { name, lastName, email, password, birthDate } = body;
    const productData = `${name} ${lastName} ${email} ${password} ${birthDate}`; // Concatenate name and content as a string
    return this.appServiceRegister.create(productData);
  }

  @Get("login")
  getLoginUser(@Res() res: Response) {
    return res.status(200).json({ message: "this page is use for login form" });
  }

  @Get("/:id")
  getUser(@Param("id") id: string) {
    return this.appServiceRegister.findAll();
  }
}
