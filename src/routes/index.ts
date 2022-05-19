import express, { Router } from 'express'
import path from 'path'
import sampleRouter from './sample'
import adminRouter from './admin'

const router = Router({ mergeParams: true })

router.use('/api/file', express.static(path.join(__dirname, '../../../uploads')))
router.use('/sample', sampleRouter)
router.use('/admin', adminRouter)

export default router
