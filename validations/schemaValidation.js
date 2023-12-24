const yup = require("yup");

//! sign up validation
const signUpValidation = yup.object().shape({
  userName: yup.string().max(15).required(),
  phone: yup.string().min(11).max(11).required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).max(16).required(),
  isAdmin: yup.boolean().required(),
});

//! login validation
const loginValidation = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).max(16).required(),
});

//! hero section validation
const heroValidation = yup.object().shape({
  heroImage: yup.string().required(),
  heroHeader: yup.string().max(100).required(),
  heroDetail: yup.string().required(),
});

// ! service section validation
const serviceValidation = yup.object().shape({
  serviceTitle: yup.string().required(),
  serviceDetail: yup.string().required(),
});

// ! testimonial validation
const testimonialValidation = yup.object().shape({
  reviewerName: yup.string().required(),
  identity: yup.string().required(),
  comments: yup.string().max(500).required(),
});

// ! team validation
const teamValidation = yup.object().shape({
  teamMemberImg: yup.string().required(),
  teamMemeberName: yup.string().required(),
  teamMemberDesignation: yup.string().required(),
  teamMemberDegree: yup.string().required(),
});

// ! blogs validation
const blogValidation = yup.object().shape({
  blogImg: yup.string().required(),
  blogTitle: yup.string().required(),
  blogDetail: yup.string().required(),
  publicationDate: yup.string().required(),
});

// ! researcher validateion
const researcherValidation = yup.object().shape({
  researcherImg: yup.string().required(),
  researcherName: yup.string().required(),
  designation: yup.string().required(),
  degree: yup.string().required(),
  expertise: yup.string().required(),
});

module.exports = {
  signUpValidation,
  loginValidation,
  heroValidation,
  serviceValidation,
  testimonialValidation,
  teamValidation,
  blogValidation,
  researcherValidation,
};
