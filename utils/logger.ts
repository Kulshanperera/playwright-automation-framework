//-------------------------------------------------------------------------------
//Log the test results using winston logger library
//-------------------------------------------------------------------------------

import winston from 'winston';

export const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        winston.format.printf(({ timestamp, level, message }) => {
            return `${timestamp} [${level.toUpperCase()}]: ${message}`;
        })
    ),
    transports: [
        new winston.transports.Console(),
        //Overide the exisitng file and save it in the below file path
        new winston.transports.File({ filename: 'test-results/logs/test.log' })
    ],
});

// Test case Pass logged as blow
export const logPass = (testCaseId: string, testName: string) => {
    logger.info(`✅ PASS | TC-${testCaseId} | ${testName}`);
};
// Test case Failed logged as blow
export const logFail = (testCaseId: string, testName: string, error: any) => {
    logger.error(`❌ FAIL | TC-${testCaseId} | ${testName} | Error: ${error.message}`);
};