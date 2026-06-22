import Company from "../models/Company.js";
import bcrypt from 'bcrypt'

// Register a new company
export const registerCompany = async (req,res) => {
    const {name,email,password} = req.body
    const imageFile = req.file;
    if (!name || !email || !password || !imageFile) {
        return res.json({success:false , message:"Missing Details"})
    }
    try {
        const companyExists = await Company.findOne({email})
        if (companyExists) {
            return res.json({success:false,message:"Company Already Registered"})
        }
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password,salt)
        
    } catch (error) {
        
    }
}


// Company Login
export const loginCompany = async(req,res) => {

}

// Get Company data
export const getCompanyData = async(res,res) => {
    
}

// Post a new JOb
export const postJob = async (req,res) => {

}

// Get company job Applicants
export const getCompanyJobApplicants = async (req,res) => {

}

// Get company posted jobs
export const getCompanyPostedJobs = async (req,res) => {

}

// Change job application status
export const changeJobApplicationStatus = async(req,res) => {

}

// Change job visibility
export const changeVisibility = async(req,res) => {

}