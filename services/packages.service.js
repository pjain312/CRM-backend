
const worker = require("../worker/packages.worker");

const packageService = (() => {
    const { getJsonResponse } = require("../utils/common");

    const addPackages = async (reqBody) => {
        const { packageName, chargePerSession, totalSession, totalCost } = reqBody;
        const params = [packageName, chargePerSession, totalSession, totalCost]
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

    const updatePackage = async (reqBody) => {
        const { packageId, packageName, chargePerSession, totalSession, totalCost } = reqBody;
        const params = [packageId, packageName, chargePerSession, totalSession, totalCost]
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

    return {
        addPackages,
        updatePackage,
        deletePackage,
        getPackages
    }
})();


module.exports = packageService