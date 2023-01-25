import { Router } from "express";
import controller from "./controller.js";

const router = new Router();
// Use controller to get all of the contacts
router.get("/", (_, response) => {
  controller
    .index()
    .then((contacts) => {
      response.json(contacts);
    })
    .cath((err) => {
      response.status(500).json(err);
    });
});
