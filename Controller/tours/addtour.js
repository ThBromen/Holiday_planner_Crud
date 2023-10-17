import { tours } from "../../Models";

export const addTour = async (req, res) => {
  await tours.create(req.body);
  console.log(res.body);
  res.status(201).json({
    message: "Tour created successfully",
  });
};