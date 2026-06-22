import express from 'express'
import { changeJobApplicationStatus, changeVisibility, getCompanyData, getCompanyJobApplicants, getCompanyPostedJobs, loginCompany, postJob, registerCompany } from '../controllers/companyController.js'
import upload from '../config/multer.js'

const router = express.Router()

// Register a company 
router.post('/register',upload.single('image'),registerCompany)

// Company LOgin
router.post('/login',loginCompany)

// Get Company data
router.get('/company',getCompanyData)

// Post a job
router.post('/post-job',postJob)

// Get Applicants data of company
router.get('/applicants',getCompanyJobApplicants)

// Get COmpany joblists
router.get('/list-jobs',getCompanyPostedJobs)

// Change application status
router.post('/change-status',changeJobApplicationStatus)

// Change application visibility
router.post('/change-visibility',changeVisibility)

export default router