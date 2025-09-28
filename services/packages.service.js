
const worker = require("../worker/packages.worker");

const packageService = (() => {
    const { getJsonResponse } = require("../utils/common");

    const addPackages = async (reqBody) => {
        const { packageName, chargePerSession, chargePerSessionForPackage, totalSession, totalCost } = reqBody;
        const params = [packageName, chargePerSession, chargePerSessionForPackage, totalSession, totalCost]
        const response = await worker.addPackages(params)
        if (response.queryErr) {
            console.log(`packages.service-js - addPackages - ${response.queryErr}`)
            return { status: 500, data: getJsonResponse(false, [], "Internal Server Error", null) }
        }

        if (response.queryRes) {
            return { status: 200, data: getJsonResponse(true, response.queryRes, null, null) }
        }
        else {
            return { status: 500, data: getJsonResponse(false, [], "No Records", null) }
        }
    }

    const addSessionTypes = async (reqBody) => {
        const { sessionName, chargePerSession } = reqBody;
        const params = [sessionName, chargePerSession]
        const response = await worker.addSessionTypes(params)
        if (response.queryErr) {
            console.log(`packages.service-js - addSessionTypes - ${response.queryErr}`)
            return { status: 500, data: getJsonResponse(false, [], "Internal Server Error", null) }
        }

        if (response.queryRes) {
            return { status: 200, data: getJsonResponse(true, response.queryRes, null, null) }
        }
        else {
            return { status: 500, data: getJsonResponse(false, [], "No Records", null) }
        }
    }

    const updatePackage = async (reqBody) => {
        const { packageId, packageName, chargePerSession, chargePerSessionForPackage, totalSession, totalCost } = reqBody;
        const params = [packageId, packageName, chargePerSession, chargePerSessionForPackage, totalSession, totalCost]
        const response = await worker.updatePackage(params)
        if (response.queryErr) {
            console.log(`packages.service-js - updatePackage - ${response.queryErr}`)
            return { status: 500, data: getJsonResponse(false, [], "Internal Server Error", null) }
        }

        if (response.queryRes) {
            return { status: 200, data: getJsonResponse(true, response.queryRes, null, null) }
        }
        else {
            return { status: 500, data: getJsonResponse(false, [], "No Records", null) }
        }
    }

    const updateSessionType = async (reqBody) => {
        const { sessionId, sessionName, chargePerSession } = reqBody;
        const params = [sessionId, sessionName, chargePerSession]
        const response = await worker.updateSessionType(params)
        if (response.queryErr) {
            console.log(`packages.service-js - updateSessionType - ${response.queryErr}`)
            return { status: 500, data: getJsonResponse(false, [], "Internal Server Error", null) }
        }

        if (response.queryRes) {
            return { status: 200, data: getJsonResponse(true, response.queryRes, null, null) }
        }
        else {
            return { status: 500, data: getJsonResponse(false, [], "No Records", null) }
        }
    }

    const deletePackage = async (reqBody) => {
        const { packageId} = reqBody;
        const response = await worker.deletePackage([packageId])
        if (response.queryErr) {
            console.log(`packages.service-js - deletePackage - ${response.queryErr}`)
            return { status: 500, data: getJsonResponse(false, [], "Internal Server Error", null) }
        }

        if (response.queryRes) {
            return { status: 200, data: getJsonResponse(true, response.queryRes, null, null) }
        }
        else {
            return { status: 500, data: getJsonResponse(false, [], "No Records", null) }
        }
    }

    const getPackages = async () => {
        const response = await worker.getPackages()
        if (response.queryErr) {
            console.log(`packages.service-js - getPackages - ${response.queryErr}`)
            return { status: 500, data: getJsonResponse(false, [], "Internal Server Error", null) }
        }

        if (response.queryRes) {
            return { status: 200, data: getJsonResponse(true, response.queryRes[0], null, null) }
        }
        else {
            return { status: 500, data: getJsonResponse(false, [], "No Records", null) }
        }
    }

    const getSessionTypes = async () => {
        const response = await worker.getSessionTypes()
        if (response.queryErr) {
            console.log(`packages.service-js - getSessionTypes - ${response.queryErr}`)
            return { status: 500, data: getJsonResponse(false, [], "Internal Server Error", null) }
        }

        if (response.queryRes) {
            return { status: 200, data: getJsonResponse(true, response.queryRes[0], null, null) }
        }
        else {
            return { status: 500, data: getJsonResponse(false, [], "No Records", null) }
        }
    }

    const deleteSessionType = async (reqBody) => {
        const { sessionId } = reqBody;
        const response = await worker.deleteSessionType([sessionId])
        if (response.queryErr) {
            console.log(`packages.service-js - deleteSessionType - ${response.queryErr}`)
            return { status: 500, data: getJsonResponse(false, [], "Internal Server Error", null) }
        }

        if (response.queryRes) {
            return { status: 200, data: getJsonResponse(true, response.queryRes, null, null) }
        }
        else {
            return { status: 500, data: getJsonResponse(false, [], "No Records", null) }
        }
    }

    const getPackageInvoiceData = async (reqQuery) => {
         const { patientId, appointmentId } = reqQuery;
        const response = await worker.getPackageInvoiceData([patientId, appointmentId])
        if (response.queryErr) {
            console.log(`packages.service-js - getPackageInvoiceData - ${response.queryErr}`)
            return { status: 500, data: getJsonResponse(false, [], "Internal Server Error", null) }
        }
        if (response.queryRes) {
            return { status: 200, data: getJsonResponse(true, response.queryRes[0] && response.queryRes[0][0] ? response.queryRes[0][0] : {}, null, null) }
        }
        else {
            return { status: 500, data: getJsonResponse(false, [], "No Records", null) }
        }
    }

    const getDailyInvoiceData = async (reqQuery) => {
        const { patientId, appointmentId } = reqQuery;
       const response = await worker.getDailyInvoiceData([patientId, appointmentId])
       if (response.queryErr) {
           console.log(`packages.service-js - getPackageInvoiceData - ${response.queryErr}`)
           return { status: 500, data: getJsonResponse(false, [], "Internal Server Error", null) }
       }
       if (response.queryRes) {
        const res = {
            details: response.queryRes[0] && response.queryRes[0][0] ? response.queryRes[0][0] : {},
            services: response.queryRes[1] ? response.queryRes[1] : [],
        }
           return { status: 200, data: getJsonResponse(true, res, null, null) }
       }
       else {
           return { status: 500, data: getJsonResponse(false, [], "No Records", null) }
       }
   }

    return {
        addPackages,
        addSessionTypes,
        updatePackage,
        updateSessionType,
        deletePackage,
        getPackages,
        getSessionTypes,
        deleteSessionType,
        getPackageInvoiceData,
        getDailyInvoiceData
    }
})();


module.exports = packageService