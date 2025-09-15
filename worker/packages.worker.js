const { commonWorker } = require("../utils/common")

const packageWorker = (() => {
    const addPackages = (params) => {
        return commonWorker("CALL AddPackage(?,?,?,?)", params, 'packages.worker.js - addPackages -')
    }

    const updatePackage = (params) => {
        return commonWorker("CALL UpdatePackage(?,?,?,?,?)", params, 'packages.worker.js - updatePackage -')
    }

    const deletePackage = (params) => {
        return commonWorker("CALL DeletePackage(?)", params, 'packages.worker.js - deletePackage -')
    }

    const getPackages = (params) => {
        return commonWorker("CALL GetPackages()", params, 'packages.worker.js - getPackages -')
    }

    return { 
        addPackages,
        updatePackage,
        deletePackage,
        getPackages
    }
})();

module.exports = packageWorker