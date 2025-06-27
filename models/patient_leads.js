const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const patientLeadsSchema = new Schema(
  {
    leadId: {
      type: mongoose.Schema.Types.ObjectId,
      default: function () {
        return this._id;
      },
    },
    patientId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ["male", "female", "other"],
    },
    age: {
      type: Number,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    condition: {
      type: String,
      required: true,
    },
    treatment: {
      type: String,
      required: true,
      enum: [
        "physiotherapy",
        "chiropractic",
        "cupping therapy",
        "dry needling",
        "sports massage",
        "advanced",
        "other",
      ],
    },
    serviceType: {
      type: String,
      required: true,
      enum: ["home visit", "clinic visit"],
    },
    therapistPreference: {
      type: String,
      required: true,
      enum: [
        "malePhysio",
        "femalePhysio",
        "maleChiropractor",
        "femaleChiropractor",
        "any",
      ],
    },
    followUpDate: {
      type: Date,
      required: true,
    },
    knownFrom: {
      type: String,
      required: true,
      enum: [
        "social media",
        "google",
        "word of mouth",
        "website",
        "tele",
        "newspaper",
        "other",
      ],
    },
    referredBy: {
      type: String,
      required: true,
    },
    remarks: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    pincode: {
      type: Number,
      required: true,
    },
    addedBy: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

const patient_leads =
  mongoose.models.patient_leads ||
  model("patient_leads", patientLeadsSchema, "patient_leads");
module.exports = { patient_leads };
