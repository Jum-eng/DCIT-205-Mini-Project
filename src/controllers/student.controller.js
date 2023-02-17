import Student from "../models/student.model.js";

//create a new student
const CREATE_STUDENT = async (req,res) => {
  const { fName, lName, programme, residence } = req.body;

  if (!fName || !lName || !programme || !residence) {
    res.status(500).json({
      err: "make sure all fields are correct",
    });
  }

  const student = new Student({
    firstName: fName,
    lastName: lName,
    programme: programme,
    residence: residence,
  });

  const response = await student.save();

  res.status(201).json(response);
};

const FIND_STUDENT = async (req, res) => {
  // take id from param
  const { id } = req.params;

  // find student by id
  const student = await Student.find({_id : id});

  // if student is not found
  if (!student) {
    return res.status(404).json({
      err: "student not found",
    });
  }
  // if student is found
  res.status(200).json(student);
};

export { CREATE_STUDENT, FIND_STUDENT };
