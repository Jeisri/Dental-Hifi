import express from "express";
import {
  loginController,
  registerController,
  authController,
  applyDoctorController,
  getAllNotificationController,
  deleteAllNotificationController,
  getAllDoctorsController,
  bookAppointmentController,
  bookingAvailabilityController,
  userAppointmentsController,
} from "../controllers/userCtrl.js";
import authMiddleware from "../middleware/authMiddleware.js";

// Router object
const router = express.Router();

// Routes
// LOGIN || POST
router.post("/login", loginController);

// REGISTER || POST
router.post("/register", registerController);

// AUTH || POST
router.post("/getUserData", authMiddleware, authController);

// APPLY DOCTOR || POST
router.post("/apply-doctor", authMiddleware, applyDoctorController);

// NOTIFICATION DOCTOR || POST
router.post("/get-all-notification", authMiddleware, getAllNotificationController);
// NOTIFICATION DOCTOR || POST
router.post("/delete-all-notification", authMiddleware, deleteAllNotificationController);

// GET ALL DOCTORS
router.get("/getAllDoctors", authMiddleware, getAllDoctorsController);

// BOOK APPOINTMENT
router.post("/book-appointment", authMiddleware, bookAppointmentController);

// BOOKING AVAILABILITY
router.post("/booking-availability", authMiddleware, bookingAvailabilityController);

// APPOINTMENTS LIST
router.get("/user-appointments", authMiddleware, userAppointmentsController);

export default router;
