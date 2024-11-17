import { getEvent, getAllEvents } from "../models/event.js";

export const getEvents = async (req, res, next) => {
  try {
    res.json(await getAllEvents());
  } catch (error) {
    next(error);
  }
};

export const getEventById = async (req, res, next) => {
  try {
    res.json(await getEvent(req.params.id));
  } catch (error) {
    next(error);
  }
};

export const eventRegistration = async (req, res) => {
  const { name, year, department, college, email, number, team, members } =
    req.body;

  if (!name || !year || !department || !college || !email || !number) {
    return res.status(400).json({
      message: "All fields are required except team name and member name",
    });
  }

  try {
    const registration = new Registration({
      name,
      currentYear,
      department,
      collegeName,
      email,
      phoneNumber,
      event,
      teamName,
      memberName,
    });
    await registration.save();
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error saving registration", error });
  }

  res.status(201).json({
    message: "Registration successful",
    data: {
      name,
      currentYear,
      department,
      collegeName,
      email,
      phoneNumber,
      event,
      teamName,
      memberName,
    },
  });
  res.send("Success");
};
