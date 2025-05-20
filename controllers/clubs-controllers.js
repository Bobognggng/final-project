const HttpError = require("../models/http-error");
const Club = require("../models/club-model");

// Create a new club
const createClub = async (req, res, next) => {
  const { name, description, members, discussionThreads, monthlyPick } = req.body;

  const newClub = new Club({
    name,
    description,
    members: members || [],
    discussionThreads: discussionThreads || [],
    monthlyPick: monthlyPick || null
  });

  try {
    await newClub.save();
  } catch (err) {
    console.error("CreateClub error:", err);
    return next(new HttpError("Creating club failed.", 500));
  }

  res.status(201).json({ club: newClub.toObject({ getters: true }) });
};

// Get all clubs
const getAllClubs = async (req, res, next) => {
  let clubs;
  try {
    clubs = await Club.find();
  } catch (err) {
    return next(new HttpError("Fetching clubs failed.", 500));
  }

  if (!clubs || clubs.length === 0) {
    return next(new HttpError("No clubs found.", 404));
  }

  res.json({ clubs: clubs.map(c => c.toObject({ getters: true })) });
};

// Get a club by ID
const getClubById = async (req, res, next) => {
  const clubId = req.params.cid;
  let club;

  try {
    club = await Club.findById(clubId);
  } catch (err) {
    return next(new HttpError("Fetching club failed.", 500));
  }

  if (!club) {
    return next(new HttpError("Club not found.", 404));
  }

  res.json({ club: club.toObject({ getters: true }) });
};

// Add a member to a club
const joinClub = async (req, res, next) => {
  const { username } = req.body;
  const clubId = req.params.cid;

  try {
    const club = await Club.findById(clubId);
    if (!club) return next(new HttpError("Club not found.", 404));

    if (!club.members.includes(username)) {
      club.members.push(username);
      await club.save();
    }

    res.status(200).json({ club: club.toObject({ getters: true }) });
  } catch (err) {
    return next(new HttpError("Joining club failed.", 500));
  }
};

// Add a discussion thread
const addDiscussionThread = async (req, res, next) => {
  const clubId = req.params.cid;
  const { title, messages } = req.body;

  try {
    const club = await Club.findById(clubId);
    if (!club) return next(new HttpError("Club not found.", 404));

    club.discussionThreads.push({ title, messages });
    await club.save();

    res.status(200).json({ club: club.toObject({ getters: true }) });
  } catch (err) {
    return next(new HttpError("Adding discussion thread failed.", 500));
  }
};

// Set monthly movie pick
const setMonthlyPick = async (req, res, next) => {
  const clubId = req.params.cid;
  const { movieId } = req.body;

  try {
    const club = await Club.findById(clubId);
    if (!club) return next(new HttpError("Club not found.", 404));

    club.monthlyPick = movieId;
    await club.save();

    res.status(200).json({ club: club.toObject({ getters: true }) });
  } catch (err) {
    return next(new HttpError("Setting monthly pick failed.", 500));
  }
};

exports.createClub = createClub;
exports.getAllClubs = getAllClubs;
exports.getClubById = getClubById;
exports.joinClub = joinClub;
exports.addDiscussionThread = addDiscussionThread;
exports.setMonthlyPick = setMonthlyPick;
