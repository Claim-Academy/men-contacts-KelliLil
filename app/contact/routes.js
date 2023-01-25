import { Router } from "express";

const router = new Router();
// Use controller to get all of the contacts
router.get("/", (_, response) => {});

router.get("/:id", (request, response) => {
  if (contact) {
    response.json(contact);
  } else {
    response.status(404).json({ message: "Contact not found" });
  }
});
