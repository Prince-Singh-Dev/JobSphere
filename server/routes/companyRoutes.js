import express from 'express'
import { changeJobApplicationStatus, changeVisibility, getCompanyData, getCompanyJobApplicants, getCompanyPostedJobs, loginCompany, postJob, registerCompany } from '../controllers/companyController.js'
import upload from '../config/multer.js'
import { protectCompany } from '../middleware/authMiddleware.js'

const router = express.Router()

// Register a company 
router.post('/register',upload.single('image'),registerCompany)

// Company LOgin
router.post('/login',loginCompany)

// Get Company data
router.get('/company',protectCompany,getCompanyData)

// Post a job
router.post('/post-job',protectCompany,postJob)

// Get Applicants data of company
router.get('/applicants',protectCompany,getCompanyJobApplicants)

// Get COmpany joblists
router.get('/list-jobs',protectCompany,getCompanyPostedJobs)

// Change application status
router.post('/change-status',protectCompany,changeJobApplicationStatus)

// Change application visibility
router.post('/change-visibility',protectCompany,changeVisibility)

export default router