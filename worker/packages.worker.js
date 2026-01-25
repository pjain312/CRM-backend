const { commonWorker } = require("../utils/common")

const packageWorker = (() => {
    const addPackages = (params) => {
        return commonWorker("CALL AddPackage(?,?,?,?,?,?)", params, 'packages.worker.js - addPackages -')
    }

    const addSessionTypes = (params) => {
        return commonWorker("CALL AddSessionType(?,?)", params, 'packages.worker.js - addSessionTypes -')
    }

    const updatePackage = (params) => {
        return commonWorker("CALL UpdatePackage(?,?,?,?,?,?,?)", params, 'packages.worker.js - updatePackage -')
    }

    const updateSessionType = (params) => {
        return commonWorker("CALL UpdateSessionType(?,?,?)", params, 'packages.worker.js - updateSessionType -')
    }

    const deletePackage = (params) => {
        return commonWorker("CALL DeletePackage(?)", params, 'packages.worker.js - deletePackage -')
    }

    const deleteSessionType = (params) => {
        return commonWorker("CALL DeleteSessionType(?)", params, 'packages.worker.js - deleteSessionType -')
    }

    const getPackages = (params) => {
        return commonWorker("CALL GetPackages()", params, 'packages.worker.js - getPackages -')
    }

    const getSessionTypes = (params) => {
        return commonWorker("CALL GetSessionTypes()", params, 'packages.worker.js - getSessionTypes -')
    }

    const getPackageInvoiceData = (params) => {
        return commonWorker("CALL GetPackageInvoiceData(?,?,?)", params, 'packages.worker.js - getPackageInvoiceData -')
    }

    const getDailyInvoiceData = (params) => {
        return commonWorker("CALL GetDailyInvoiceData(?,?)", params, 'packages.worker.js - getDailyInvoiceData -')
    }

    const getProductInvoiceData = (params) => {
        return commonWorker("CALL GetProductInvoiceData(?,?)", params, 'packages.worker.js - getProductInvoiceData -')
    }
    return { 
        addPackages,
        addSessionTypes,
        updatePackage,
        updateSessionType,
        deletePackage,
        deleteSessionType,
        getPackages,
        getSessionTypes,
        getPackageInvoiceData,
        getDailyInvoiceData,
        getProductInvoiceData
    }
})();

module.exports = packageWorker