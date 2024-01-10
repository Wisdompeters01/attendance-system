"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainApp = void 0;
const mainApp = (app) => {
    try {
        app.get("/", (req, res) => {
            try {
                return res.status(200).json({
                    message: "welcome to my Attendance system"
                });
            }
            catch (error) {
                return res.status(404).json({
                    message: "default error"
                });
            }
            ;
        });
    }
    catch (error) {
        return error;
    }
};
exports.mainApp = mainApp;
