const express = require("express");
const router = express.Router();
const clubController = require("../controllers/clubs-controllers");

router.post("/", clubController.createClub);

router.get("/", clubController.getAllClubs);

router.get("/:cid", clubController.getClubById);

router.patch("/join/:cid", clubController.joinClub);

router.post("/thread/:cid", clubController.addDiscussionThread);

router.patch("/monthly-pick/:cid", clubController.setMonthlyPick);

module.exports = router;
